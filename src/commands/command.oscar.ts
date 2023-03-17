import { IBotContext } from "../context/context.session";
import { ButtonItem, Command } from "./command.base";

export class OscarCommand extends Command {
  public handle(): void {
    this.addAction("oscar", this.oscarHandler.bind(this));
  }

  private oscarHandler(ctx: IBotContext): void {
    ctx.reply("Выберите год", { ...this.createKeyboard() });
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
        buttonText: "2022 год",
        handlerName: "oscar.2022",
      },
      {
        buttonType: "callback",
        buttonText: "2018 год",
        handlerName: "oscar.2018",
      },
      {
        buttonType: "callback",
        buttonText: "2021 год",
        handlerName: "oscar.2021",
      },
      {
        buttonType: "callback",
        buttonText: "2020 год",
        handlerName: "oscar.2020",
      },
      {
        buttonType: "callback",
        buttonText: "2019 год",
        handlerName: "oscar.2019",
      },
    ];
  }
}
