import { IBotContext } from "../context/context.session";
import { ButtonItem, Command } from "./command.base";
import path from "path";
import ServiceFilm from "../services/service.film";
import { FilmResponce } from "../responses/responses.film";

export class GenresItemCommand extends Command {
  private genresInfo = {
    horor: 27,
    adventure: 12,
    drama: 18,
    animation: 16,
    comedy: 35,
  };

  public handle(): void {
    this.addAction(/genres\..{1,7}/, this.genresItemHandler.bind(this));
  }

  private async genresItemHandler(ctx: IBotContext): Promise<void> {
    const filmService = new ServiceFilm();
    const films = await filmService.getFilmsByGenr(this.getGenrId(ctx));

    for (const film of films) {
      const imgPath = path.join(__dirname, `../images/${film.id}.jpg`);
      const textMessages = `<strong>${film?.name} Рейтинг ${film?.raiting}</strong> ${film?.descriptions}`;
      this.response.replyWithPhoto(ctx, imgPath, textMessages);
    }

    setTimeout(() => {
      ctx.reply("Меню", {
        ...this.createKeyboard(),
      });
    }, 1000);
    
  }

  private getGenrId(ctx: IBotContext) {
    const query = ctx.callbackQuery as any;
    const generType = query.data.split(".")[1] as keyof typeof this.genresInfo;
    return this.genresInfo[generType];
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
        buttonText: "Топы по жанрам",
        handlerName: "genres",
      },
    ];
  }
}
