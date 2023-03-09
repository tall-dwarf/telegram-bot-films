import { Input, Markup, Telegraf } from "telegraf";
import { ButtonsFactory } from "../components/buttons/buttons.factory";
import { IBotContext } from "../context/context.session";
import { ButtonItem, Command } from "./command.base";
import { Context } from "telegraf"

export class GenresCommand extends Command {
  
  public handle(): void {
    this.addAction("genres", this.genresHandler.bind(this));
    
  }

  private genresHandler(ctx: IBotContext): void {
    ctx.replyWithPhoto(Input.fromURL("https://picsum.photos/200/300/"), {
      caption: "text",
      ...this.createKeyboard(),
    });
  }

  protected getButtonsInfo(): ButtonItem[] {
    return [
      {
        buttonType: "callback",
        buttonText: "К началу",
        handlerName: "start",
      },
      {
        buttonType: "callback",
        buttonText: "Ужастики",
        handlerName: "genres.horor",
      },

      {
        buttonType: "callback",
        buttonText: "Приключение",
        handlerName: "genres.adventure",
      },

      {
        buttonType: "callback",
        buttonText: "Драмма",
        handlerName: "genres.drama",
      },

      {
        buttonType: "callback",
        buttonText: "Комедия",
        handlerName: "genres.comedy",
      },
    ];
  }
}
