import { Router } from "express";
import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

const router = Router();

router.post("/register", async (req, res) => {

  const email = req.body.email?.trim().toLowerCase();
  const password = req.body.password;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({
      error: "Please provide a valid email address",
    });
  }

  if (!password || password.length < 8) {
    return res.status(400).json({
      error: "Password must be at least 8 characters long",
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

export default router;