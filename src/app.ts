import { Telegraf } from "telegraf";
import LocalSession from "telegraf-session-local";
import { IBotContext } from "./context/context.session";
import { Command } from "./commands/command.base";
import { StartCommand } from "./commands/command.start";
import { GenresCommand } from "./commands/command.genres";
import { CultFilmCommand } from "./commands/command.cult.film";
import { GenresItemCommand } from "./commands/command.genres.item";
import { BaseResponse } from "./responses/response.base";
import { FilmResponce } from "./responses/responses.film";
import { OscarCommand } from "./commands/command.oscar";
import { OscarYearCommand } from "./commands/command.oscar.year";
import { OscarNominationCommand } from "./commands/command.oscar.nomination";

export class Bot {
  private bot: Telegraf<IBotContext>;
  private commands: Command[] = [];

  constructor(token: string) {
    this.bot = new Telegraf<IBotContext>(
      "5862707035:AAGcJokc5Ch-aQdtIaQw0fNwTFTU6oWEfQ0"
    );
    this.bot.use(
      new LocalSession({ database: "example_db.json" }).middleware()
    );
  }

  public init() {
    this.commands = [
      new StartCommand(this.bot, new BaseResponse()),
      new GenresCommand(this.bot, new FilmResponce()),
      new CultFilmCommand(this.bot, new BaseResponse()),
      new GenresItemCommand(this.bot, new BaseResponse()),
      new OscarCommand(this.bot, new BaseResponse()),
      new OscarYearCommand(this.bot, new BaseResponse()),
      new OscarNominationCommand(this.bot, new BaseResponse()),
    ];
    for (const command of this.commands) {
      command.handle();
    }
    this.bot.launch();
  }
}
