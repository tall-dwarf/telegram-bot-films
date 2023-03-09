import { Input } from "telegraf";
import { IBotContext } from "../context/context.session";
import { IResponse } from "./response.interface";



export class BaseResponse implements IResponse{
    public replyWithPhoto(
        ctx: IBotContext,
        imgPath: string,
        textContent: string
      ) {
        const newImgPath = Input.fromLocalFile(imgPath);
        ctx.replyWithPhoto(newImgPath, {
          caption: textContent,
          parse_mode: "HTML",
        });
      }
}