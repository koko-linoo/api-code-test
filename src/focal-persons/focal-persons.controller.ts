import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, UseGuards, UseInterceptors } from '@nestjs/common';
import { FocalPersonsService } from './focal-persons.service';
import { CreateFocalPersonDto } from './dto/create-focal-person-dto';
import { FocalPersonEntity } from './entities/focal-person.entity';
import { JwtAuthGuard } from 'src/auth/auth-guards/jwt-auth.guard';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UpdateFocalPersonDto } from './dto/update-focal-person-dto';
import { TransformInterceptor } from 'src/interceptors/transform-interceptor';

@ApiTags('FocalPersons')
@ApiBearerAuth()
@Controller('focal-persons')
@UseGuards(JwtAuthGuard)
@UseInterceptors(new TransformInterceptor(FocalPersonEntity))
export class FocalPersonsController {
  constructor(private readonly service: FocalPersonsService) { }

  @Post()
  create(@Body() createFocalPersonDto: CreateFocalPersonDto): Promise<FocalPersonEntity> {
    return this.service.create(createFocalPersonDto);
  }

  @Get()
  @ApiQuery({
    name: "filter",
    required: false,
  })
  findAll(@Query('filter') filter: string) {
    return this.service.findAll(filter);
  }

  @Get(':id')
  @ApiOkResponse({ type: FocalPersonEntity })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<FocalPersonEntity> {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateFocalPersonDto })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFocalPersonDto: UpdateFocalPersonDto
  ): Promise<FocalPersonEntity> {
    return this.service.update(id, updateFocalPersonDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
