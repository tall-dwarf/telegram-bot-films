import { IBotContext } from "../context/context.session";
import { ButtonItem, Command } from "./command.base";



export class OscarYearCommand extends Command{

    public handle(): void {
        this.addAction(/oscar\.\d{4}/, this.oscarYearHandler.bind(this));
    }

    private oscarYearHandler(ctx: IBotContext): void{
        ctx.session.year = this.getYear(ctx)
        ctx.reply("Выберите категорию", { ...this.createKeyboard() });
    }

    private getYear(ctx: IBotContext) {
        const query = ctx.callbackQuery as any;
        const year = Number(query.data.split(".")[1])
        return year;
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
              buttonText: "Лучший фильм",
              handlerName: "oscar.best",
            },

            {
                buttonType: "callback",
                buttonText: "Лучший анимационный фильм фильм",
                handlerName: "oscar.best-anim",
              },
            
              {
                buttonType: "callback",
                buttonText: "Лучшие визуальные эффекты ",
                handlerName: "oscar.vissual",
              },
              {
                buttonType: "callback",
                buttonText: "Лучший монтаж",
                handlerName: "oscar.montage",
              },
          ];
    }

}