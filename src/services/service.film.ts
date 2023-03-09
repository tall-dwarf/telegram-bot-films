import ServiceBase from "./service.base";
import { IService } from "./service.iterface";
import { Film } from "@prisma/client";
import { ArrayHelper } from "../helpers/helper.array";

export default class ServiceFilm extends ServiceBase implements IService<Film> {
  public async getRandomElements(count: number) {
    const film = (await this.prisma
      .$queryRaw`SELECT * FROM Film ORDER BY rand() LIMIT count;`) as Film;
    return film;
  }

  public async getFilmsByGenr(genrId: number) {
    const orderBy = ArrayHelper.getRandElementInArray([
      "id",
      "name",
      "descriptions",
      `raiting`,
      `img`,
    ]);
    const orderDir = ArrayHelper.getRandElementInArray([`asc`, `desc`]);
    const skip = Math.max(0, Math.floor(Math.random() * 300) + 2);

    const films = await this.prisma.film.findMany({
      take: 5,
      skip: skip,
      orderBy: { [orderBy]: orderDir },
      where: { genres: { some: { id: genrId } } },
      include: { genres: true },
    });

    return films;
  }

  public async customQuery<T>(query: string) {
    const film = (await this.prisma.$queryRaw`${query}`) as T;
    return film;
  }
}
