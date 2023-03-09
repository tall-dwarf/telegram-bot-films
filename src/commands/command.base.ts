import { NarrowedContext, Telegraf } from "telegraf";
import {
  ButtonsFactory,
  ButtonTypes,
} from "../components/buttons/buttons.factory";
import { KeyboardBuilder } from "../components/keyboard/keyboard.builder";
import { IBotContext } from "../context/context.session";
import { IResponse } from "../responses/response.interface";
import { IService } from "../services/service.iterface";

export type ButtonItem = {
  buttonType: ButtonTypes;
  buttonText: string;
  handlerName: string;
};

export abstract class Command {
  constructor(
    protected bot: Telegraf<IBotContext>,
    protected response: IResponse,
  ) {}

  public abstract handle(): void;

  public addAction(
    actionName: string | RegExp,
    actionHandler: (ctx: IBotContext) => void
  ) {
    this.bot.action(actionName, actionHandler);
  }

  protected createKeyboard() {
    const keyboardBuilder = new KeyboardBuilder();
    const buttonsInfo = this.getButtonsInfo();
    
    for (const btn of buttonsInfo) {
      keyboardBuilder.addButton(
        btn.buttonType,
        btn.buttonText,
        btn.handlerName
      );
    }

    return keyboardBuilder.buildKeyBoard();
  }

  protected abstract getButtonsInfo(): ButtonItem[];
}
