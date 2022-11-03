import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateItemDto, UpdateItemDto } from './dto';

@Injectable()
export class PortfolioService {
    constructor(private prisma: PrismaService){}

// Get All

    async getAllItems(){
        const item = await this.prisma.portfolio.findMany({});
        
        return item;
    }

// Get One

    async getItemByID(id: number){
        const item = await this.prisma.portfolio.findUnique({
            where: {
                id
            }
        });
        
        return item;
    }

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

// Update Item

     async updateItemById(id: number, dto: UpdateItemDto){
         const item = await this.prisma.portfolio.findUnique({
            where: {
                id
            }
         });

         if(!item) throw new ForbiddenException("Not found in DB");

         return await this.prisma.portfolio.update({
            where: {
                id,
            },
            data: {
                ...dto
            }
         })
    }


// Delete Item

    async deleteItemById(id:number){
        const item = await this.prisma.portfolio.findUnique({
            where: {
                id,
            }
        });

        if(!item) throw new ForbiddenException('Not found in DB');

        return this.prisma.portfolio.delete({
            where: {
                id,
            }
        })
    }
}
