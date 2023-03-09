import { IBotContext } from "../context/context.session";
import { ButtonItem, Command } from "./command.base";



export class OscarNominationCommand extends Command{
    public handle(): void {
        this.addAction(/oscar\.\D{4,}/, this.oscarNominationHandler.bind(this));
    }

    private oscarNominationHandler(ctx: IBotContext): void{
        console.log(ctx.session.year);
        //  = this.getYear(ctx)
        
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
          ];
    }

}