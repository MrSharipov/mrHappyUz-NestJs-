import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { identity } from 'rxjs';
import { CreateItemDto, UpdateItemDto } from './dto';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
    constructor(private portfolioService: PortfolioService){}
   
    @Get()
    getAllItems(){
        return this.portfolioService.getAllItems();
    }

    @Get(':id')
    getItemByID(@Param('id')id){
        return `Salom ${id}`;
    }

    @Post()
    createItem(@Body() dto: CreateItemDto){
        return this.portfolioService.createItem(dto);
    }

    @Put(':id')
    updateItemById(@Param('id') id, @Body() dto: UpdateItemDto){
        return `Item ${id} is updated ${dto.title}`;
    }

    @Delete(':id')
    deleteItemById(@Param('id') id){
        return `Item ${id} is deleted`;
    }
}
