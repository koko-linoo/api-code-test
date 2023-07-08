import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, UseGuards, UseInterceptors } from '@nestjs/common';
import { StatesService } from './states.service';
import { CreateStateDto } from './dto/create-state-dto';
import { StateEntity } from './entities/state.entity';
import { JwtAuthGuard } from 'src/auth/auth-guards/jwt-auth.guard';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UpdateStateDto } from './dto/update-state-dto';
import { TransformInterceptor } from 'src/interceptors/transform-interceptor';

@ApiTags('States')
@ApiBearerAuth()
@Controller('states')
@UseGuards(JwtAuthGuard)
@UseInterceptors(new TransformInterceptor(StateEntity))
export class StatesController {
  constructor(private readonly service: StatesService) { }

  @Post()
  create(@Body() createStateDto: CreateStateDto): Promise<StateEntity> {
    return this.service.create(createStateDto);
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
  @ApiOkResponse({ type: StateEntity })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<StateEntity> {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateStateDto })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStateDto: UpdateStateDto
  ): Promise<StateEntity> {
    return this.service.update(id, updateStateDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
