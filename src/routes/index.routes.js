/* Modules */
import { Router } from "express";

/* Init Router */
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

export default router;
