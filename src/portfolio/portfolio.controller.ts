import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { identity } from 'rxjs';
import { CreateItemDto, UpdateItemDto } from './dto';

@Controller('portfolio')
export class PortfolioController {
   
    @Get()
    getAllItems(){
        return "Salom";
    }

    @Get(':id')
    getItemByID(@Param('id')id){
        return `Salom ${id}`;
    }

    @Post()
    createItem(@Body() dto: CreateItemDto){
        return `Item is created ${dto.title}`;
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
