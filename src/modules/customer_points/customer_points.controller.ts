import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomerPointsService } from './customer_points.service';
import { CreateCustomerPointDto } from './dto/create-customer_point.dto';
import { UpdateCustomerPointDto } from './dto/update-customer_point.dto';

@Controller('customer-points')
export class CustomerPointsController {
  constructor(private readonly customerPointsService: CustomerPointsService) {}

  @Post()
  create(@Body() createCustomerPointDto: CreateCustomerPointDto) {
    return this.customerPointsService.create(createCustomerPointDto);
  }

  @Get()
  findAll() {
    return this.customerPointsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerPointsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerPointDto: UpdateCustomerPointDto,
  ) {
    return this.customerPointsService.update(+id, updateCustomerPointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerPointsService.remove(+id);
  }
}
