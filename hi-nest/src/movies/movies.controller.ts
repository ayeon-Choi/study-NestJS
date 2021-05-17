import {
    Controller, 
    Get, 
    Param, 
    Post, 
    Delete,
    Patch, 
    Body,  
    Query 
} from '@nestjs/common';
import { type } from 'os';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService){}
    
    @Get()
    getAll() : Movie[]{
        return this. moviesService.getAll();
    }

    @Get("search")
    search(@Query("year") searchingYear:string){
        return `We are searching for a movie made after: ${searchingYear} `
    }

    @Get('/:id')
    getOne(@Param('id') movieId: number): Movie{
        console.log(typeof movieId);
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body()movieData: CreateMovieDto){
        return this.moviesService.create(movieData);
    }
    
    @Delete("/:id")
    remove(@Param('id')movieID:string){
        return this.moviesService.deleteOne(movieID);
    }

    @Patch('/:id')
    patch(@Param('id')movieId:string, @Body() updateData){
       return this.moviesService.update(movieId, updateData)
    }

}
