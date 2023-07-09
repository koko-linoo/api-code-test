import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, UseGuards, UseInterceptors } from '@nestjs/common';
import { TargetPersonsService } from './target-persons.service';
import { CreateTargetPersonDto } from './dto/create-target-person-dto';
import { TargetPersonEntity } from './entities/target-person.entity';
import { JwtAuthGuard } from 'src/auth/auth-guards/jwt-auth.guard';
import { ApiBearerAuth, ApiBody, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UpdateTargetPersonDto } from './dto/update-target-person-dto';
import { TransformInterceptor } from 'src/interceptors/transform-interceptor';

@ApiTags('TargetPersons')
@ApiBearerAuth()
@Controller('target-persons')
@UseGuards(JwtAuthGuard)
@UseInterceptors(new TransformInterceptor(TargetPersonEntity))
export class TargetPersonsController {
  constructor(private readonly service: TargetPersonsService) { }

  @Post()
  create(@Body() createTargetPersonDto: CreateTargetPersonDto): Promise<TargetPersonEntity> {
    return this.service.create(createTargetPersonDto);
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
  @ApiOkResponse({ type: TargetPersonEntity })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<TargetPersonEntity> {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateTargetPersonDto })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTargetPersonDto: UpdateTargetPersonDto
  ): Promise<TargetPersonEntity> {
    return this.service.update(id, updateTargetPersonDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
