import type { NextApiRequest, NextApiResponse } from "next";
import { twobttnsController } from "../utils/2bttns";
import { GeneratePlayURLParams } from "./../../../../@2bttns/controller/src/Controller";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const game_id = req.query.game_id as GeneratePlayURLParams["game_id"];
    const user_id = req.query.user_id as GeneratePlayURLParams["user_id"];
    const num_items = req.query.num_items as GeneratePlayURLParams["num_items"];

    const url = twobttnsController.generatePlayUrl({
      game_id,
      user_id,
      num_items,
    });
    return res.redirect(url);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
    return res.status(500).json({ error: "Unknown error" });
  }
}