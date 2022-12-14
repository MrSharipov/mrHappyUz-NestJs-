import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
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
    getItemByID(@Param('id', ParseIntPipe)id){
        return this.portfolioService.getItemByID(id);
    }

    @Post()
    createItem(@Body() dto: CreateItemDto){
        return this.portfolioService.createItem(dto);
    }

    @Put(':id')
    updateItemById(@Param('id', ParseIntPipe) id, @Body() dto: UpdateItemDto){
        return this.portfolioService.updateItemById(id, dto);
    }

    @Delete(':id')
    deleteItemById(@Param('id', ParseIntPipe) id){
        return this.portfolioService.deleteItemById(id);
    }
}
