import { Nominal } from "@prisma/client";
import { Input } from "telegraf";
import { IBotContext } from "../context/context.session";
import ServiceFilm from "../services/service.film";
import { ButtonItem, Command } from "./command.base";

export class OscarNominationCommand extends Command {
  public handle(): void {
    this.addAction(/oscar\.\D{4,}/, this.oscarNominationHandler.bind(this));
  }

  private nominals = {
    "best-mult": "BEST_MULTFILM",
    vissual: "BEST_VISUAL_EFFECTS",
    montage: "BEST_MONTAGE",
    best: "BEST_FILM",
  };

  private async oscarNominationHandler(ctx: IBotContext) {
    console.log(ctx.session.year);
    const nom = this.getNominations(ctx);
    const filmService = new ServiceFilm();
    const nomin = this.nominals[nom] as Nominal;
    const oscarFilm = await filmService.getOscarFilms(nomin, ctx.session.year);
    if (oscarFilm) {
      const textMessages = `<strong>${oscarFilm?.name} Рейтинг ${oscarFilm?.raiting}</strong> ${oscarFilm?.descriptions}`;
      ctx.replyWithPhoto(Input.fromURL(oscarFilm.img), {
        caption: textMessages,
        parse_mode: "HTML",
        ...this.createKeyboard(),
      });
    }
  }

  private getNominations(ctx: IBotContext): keyof typeof this.nominals {
    const query = ctx.callbackQuery as any;
    const year = query.data.split(".")[1];
    return year;
  }

  protected getButtonsInfo(): ButtonItem[] {
    return [
      {
        buttonType: "callback",
        buttonText: "К началу",
        handlerName: "start",
      },
    ];
  }
}
