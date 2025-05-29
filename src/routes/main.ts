import { Router } from "express";
import { createUser, createUsers } from "../services/user";

export const mainRouter = Router();

mainRouter.get("/ping", (req, res) => {
  res.json({ pong: true });
});

mainRouter.post("/user", async (req, res) => {
  const user = await createUser({
    name: "Rodrigo",
    email: "crfogato@gmail.com",
  });
  if (user) {
    res.status(201).json({ user });
  } else {
    res.status(500).json({ error: "Failed to create user" });
  }
});

mainRouter.post("/users", async (req, res) => {
  const result = await createUsers([
    { name: "Alice", email: "alice123@gmail.com" },
    { name: "Bob", email: "bob321@hotmail.com" },
    { name: "Charlie", email: "charlie987@gmail.com" },
    { name: "David", email: "david890@hotmail.com" },
  ]);
  res.json({ result });
});
