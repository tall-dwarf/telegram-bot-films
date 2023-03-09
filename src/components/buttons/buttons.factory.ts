import { Markup } from "telegraf";

export type ButtonTypes = "callback"


export class ButtonsFactory{

    public createButton(type: ButtonTypes, text: string, handler: string){
        return Markup.button[type](text, handler)
    }
}