import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PointTransactionsService } from './point_transactions.service';
import { CreatePointTransactionDto } from './dto/create-point_transaction.dto';
import { UpdatePointTransactionDto } from './dto/update-point_transaction.dto';

@Controller('point-transactions')
export class PointTransactionsController {
  constructor(
    private readonly pointTransactionsService: PointTransactionsService,
  ) {}

  @Post()
  create(@Body() createPointTransactionDto: CreatePointTransactionDto) {
    return this.pointTransactionsService.create(createPointTransactionDto);
  }

  @Get()
  findAll() {
    return this.pointTransactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pointTransactionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePointTransactionDto: UpdatePointTransactionDto,
  ) {
    return this.pointTransactionsService.update(+id, updatePointTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pointTransactionsService.remove(+id);
  }
}
