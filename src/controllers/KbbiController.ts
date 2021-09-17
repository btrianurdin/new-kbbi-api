import { Request, Response } from "express";
import { SearchWord } from "../utils/SearchWord";

export default class KbbiController {
  static async search(req: Request, res: Response) {
    try {
      const { kata } = req.params;
      const result = await SearchWord(kata);

      if (!result) {
        res.status(404).json({
          status: false,
          message: "Kata tidak ditemukan atau terkena limit",
        });
        return;
      };
      
      res.status(200).json({
        status: true,
        message: 'success',
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: error.message || "Internal server error!",
      });
    }
  }
}
