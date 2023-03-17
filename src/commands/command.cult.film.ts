import { Input } from "telegraf";
import { IBotContext } from "../context/context.session";
import { ButtonItem, Command } from "./command.base";
import ServiceFilm from "../services/service.film";

export class CultFilmCommand extends Command {

  public handle(): void {
    this.addAction("cult.film", this.cultFilm.bind(this));
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

  public async cultFilm(ctx: IBotContext) {
    const filmService = new ServiceFilm();
    const film = await filmService.getRandomCultFilm()
    console.log(film);
  
    ctx.replyWithPhoto(Input.fromURL(film?.img || ""), {
      caption: `<strong>${film.name} Рейтинг ${film?.raiting}</strong> ${film?.descriptions}`,
      parse_mode: "HTML",
      ...this.createKeyboard(),
    });
  }
}
