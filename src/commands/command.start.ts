import { Telegraf, Markup, Input } from "telegraf";
import { IBotContext } from "../context/context.session";
import { ButtonItem, Command } from "./command.base";

export class StartCommand extends Command {
  // constructor(bot: Telegraf<IBotContext>, ) {
  //   super(bot);
  // }

  public handle(): void {
    this.bot.start(this.startHandler.bind(this));
    // this.bot
    this.addAction("start", this.startHandler.bind(this));
  }

  private startHandler(ctx: IBotContext) {
    // ctx.reply("awdawd")

    
    ctx.replyWithPhoto(Input.fromURL("https://i.imgur.com/VDqYVl.jpg"), {
      caption: "Выберите интересующую вас категорию",
      ...this.createKeyboard(),
    });
  }

  protected getButtonsInfo(): ButtonItem[] {
    return [
      {
        buttonType: "callback",
        buttonText: "Топы по жанрам",
        handlerName: "genres",
      },

      {
        buttonType: "callback",
        buttonText: "Рандомный культовый фильм",
        handlerName: "cult.film",
      },

      {
        buttonType: "callback",
        buttonText: "Победитель премии оскар",
        handlerName: "oscar",
      },
    ];
  }
}
