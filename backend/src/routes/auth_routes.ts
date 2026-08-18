import { Router } from "express";
import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
import authMiddleware from "../middleware/auth_middleware.js";

const router = Router();

function validateEmailAndPassword(email: string, password:string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    return "Please provide a valid email address";
  }

  if (!password || password.length < 8) {
    return "Password must be at least 8 characters long";
  }

  return null;
}

router.post("/register", async (req, res) => {

  const email = req.body.email?.trim().toLowerCase();
  const password = req.body.password;

  validateEmailAndPassword(email, password);

  const validationError = validateEmailAndPassword(email, password);

  if (validationError) {
  return res.status(400).json({
    error: validationError,
  });
  } 

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(409).json({
        error: "Email is already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        passwordHash: hashedPassword,
      }
    })

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    });
  }
  catch(error){
    console.error("Error registering user:", error);
    return res.status(500).json({
      error: "Failed to register user",
    });
  }
  });

  router.post("/login", async (req, res)=>{
    const email = req.body.email?.trim().toLowerCase();
    const password = req.body.password;

    const validationError = validateEmailAndPassword(email, password);

    if (validationError) {
      return res.status(400).json({
        error: validationError,
      });
      } 

    try{

      const existingUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });
     
      if (!existingUser) {
        return res.status(401).json({
          error: "Invalid email or password",
        });
      }

      const passwordMatches = await bcrypt.compare(
        password,
        existingUser.passwordHash
      );

      if (!passwordMatches) {
        return res.status(401).json({
          error: "Invalid email or password",
        });
      }

      const token = jwt.sign(
        {
          userId: existingUser.id,
          email: existingUser.email,
          role: existingUser.role,
        },
        process.env.JWT_secret!,
        {
          expiresIn: "1h",
        }
      );

      return res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id: existingUser.id,
          email: existingUser.email,
          role: existingUser.role,
        },
      });
    }
    catch (error) {
      console.error("Error logging in user:", error);
  
      return res.status(500).json({
        error: "Failed to login",
      });
    }
  });

  router.get("/me", authMiddleware, async (req, res) => {
    const user = (req as any).user;
  
    return res.status(200).json({
      message: "Authenticated successfully",
      user,
    });
  });

export default router;