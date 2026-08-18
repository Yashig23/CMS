import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: "Authentication required",
    });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      error: "Authentication token missing",
    });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_secret!
    );

    (req as any).user = decoded;

    next();

  } 
  catch (error) {
    console.error("JWT verification failed:", error);
  
    return res.status(401).json({
      error: "Invalid or expired token",
      details: error instanceof Error ? error.message : String(error),
    });
  }
};

export default authMiddleware;