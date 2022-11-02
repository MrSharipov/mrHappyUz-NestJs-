import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemDto } from './dto';

@Injectable()
export class PortfolioService {
    constructor(private prisma: PrismaService){}
        // Get All
    async getAllItems(){
        const item = await this.prisma.portfolio.findMany({});
        console.log(item);
    }

        // Get One
    getItemByID(){}

        // Create one
    async createItem(dto: CreateItemDto){
        const item = await this.prisma.portfolio.create({
            data: {
                title: dto.title,
                desc: dto.desc,
                imgLink: dto.img
            }
        })

        return item;
    }
    updateItemById(){}
    deleteItemById(){}
}
