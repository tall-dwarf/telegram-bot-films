import dotenv from 'dotenv';
import {Bot} from "./src/app"
dotenv.config()

const token = process.env.BOT_TOKEN as string
const bot = new Bot(token)
bot.init()