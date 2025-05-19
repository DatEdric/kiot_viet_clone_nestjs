import { Injectable } from '@nestjs/common';
import { CreateCustomerPointDto } from './dto/create-customer_point.dto';
import { UpdateCustomerPointDto } from './dto/update-customer_point.dto';

@Injectable()
export class CustomerPointsService {
  create(createCustomerPointDto: CreateCustomerPointDto) {
    return 'This action adds a new customerPoint';
  }

  findAll() {
    return `This action returns all customerPoints`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customerPoint`;
  }

  update(id: number, updateCustomerPointDto: UpdateCustomerPointDto) {
    return `This action updates a #${id} customerPoint`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerPoint`;
  }
}
