import { PrismaClient } from "@prisma/client";



export default abstract class ServiceBase{

    protected prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient()
    }
}