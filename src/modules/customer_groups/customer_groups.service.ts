import { Injectable } from '@nestjs/common';
import { CreateCustomerGroupDto } from './dto/create-customer_group.dto';
import { UpdateCustomerGroupDto } from './dto/update-customer_group.dto';

@Injectable()
export class CustomerGroupsService {
  create(createCustomerGroupDto: CreateCustomerGroupDto) {
    return 'This action adds a new customerGroup';
  }

  findAll() {
    return `This action returns all customerGroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customerGroup`;
  }

  update(id: number, updateCustomerGroupDto: UpdateCustomerGroupDto) {
    return `This action updates a #${id} customerGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerGroup`;
  }
}
