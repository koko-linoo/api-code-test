import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, UseGuards, UseInterceptors } from '@nestjs/common';
import { TownshipsService } from './townships.service';
import { CreateTownshipDto } from './dto/create-township-dto';
import { TownshipEntity } from './entities/township.entity';
import { JwtAuthGuard } from 'src/auth/auth-guards/jwt-auth.guard';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UpdateTownshipDto } from './dto/update-township-dto';
import { TransformInterceptor } from 'src/interceptors/transform-interceptor';

@ApiTags('Townships')
@ApiBearerAuth()
@Controller('townships')
@UseGuards(JwtAuthGuard)
@UseInterceptors(new TransformInterceptor(TownshipEntity))
export class TownshipsController {
  constructor(private readonly service: TownshipsService) { }

  @Post()
  create(@Body() createTownshipDto: CreateTownshipDto): Promise<TownshipEntity> {
    return this.service.create(createTownshipDto);
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
  @ApiOkResponse({ type: TownshipEntity })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<TownshipEntity> {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateTownshipDto })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTownshipDto: UpdateTownshipDto
  ): Promise<TownshipEntity> {
    return this.service.update(id, updateTownshipDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
