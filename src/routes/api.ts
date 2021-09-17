import { Request, Response, Router } from "express";
import Config from "../config";
import KbbiController from "../controllers/KbbiController";

const router = Router();

router.get("/", function (req: Request, res: Response) {
  res.status(200).json({
    message: "Welcome to New KBBI API",
    developer: "https://github.com/btrianurdin",
    endpoint: "/cari/[kosa kata]",
    example: `${Config.baseUrl}/cari/demokrasi`,
  });
});

router
  .get("/cari/:kata", KbbiController.search)

export default router;