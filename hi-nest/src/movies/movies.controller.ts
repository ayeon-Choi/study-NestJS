import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    Param, 
    Patch, 
    Post,  
    Query 
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService){}
    
    @Get()
    getAll(): Movie[] {
        return this.moviesService;
    }

    @Get('/:id')
    getOne(@Param('id') movieId: string): Movie{
        return this.moviesService.getOne(movieId);
    }

    @Get("search")
    search(@Query("year") searchingYear:string){
        return `We are searching for a movie made after: ${searchingYear} `
    }

    @Post()
    create(@Body()movieData){
        return this.moviesService.create(movieData);
    }
    
    @Delete("/:id")
    remove(@Param('id')movieID:string){
        return `This will delete a movie with the id: ${movieID}`;
    }

    @Patch('/:id')
    patch(@Param('id')movieId:string, @Body() updateData){
        return {
            updatedMovie: movieId,
            ...updateData,
        };
    }

}
