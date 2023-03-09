import { Markup } from "telegraf";
import { InlineKeyboardButton } from "telegraf/typings/core/types/typegram";
import { ButtonsFactory, ButtonTypes } from "../buttons/buttons.factory";

export class KeyboardBuilder {
  protected buttonsFactory: ButtonsFactory;
  protected buttons: any[] = [];

  constructor() {
    this.buttonsFactory = new ButtonsFactory();
  }

  public addButton(type: ButtonTypes, text: string, handler: string) {
    this.buttons.push(this.buttonsFactory.createButton(type, text, handler));
    return this;
  }

  public buildKeyBoard() {
    const keyboard = [];
    for (let index = 0; index < this.buttons.length; index++) {
      if (this.buttons[index + 1] != undefined) {
        keyboard.push([this.buttons[index], this.buttons[index + 1]]);
        index += 1 
      } else {
        keyboard.push([this.buttons[index]]);
      }
    }
    

    return Markup.inlineKeyboard(keyboard);
  }
}
