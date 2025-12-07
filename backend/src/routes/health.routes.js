import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ status: "ok", system: "Kog.db backend ativo." });
});

export default router;