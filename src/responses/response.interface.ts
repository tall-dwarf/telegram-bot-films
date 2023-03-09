import { IBotContext } from "../context/context.session";


export interface IResponse{
    replyWithPhoto: (ctx: IBotContext,
        imgPath: string,
        textContent: string) => void
}