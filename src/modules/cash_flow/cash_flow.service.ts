import { Injectable } from '@nestjs/common';
import { CreateCashFlowDto } from './dto/create-cash_flow.dto';
import { UpdateCashFlowDto } from './dto/update-cash_flow.dto';

@Injectable()
export class CashFlowService {
  create(createCashFlowDto: CreateCashFlowDto) {
    return 'This action adds a new cashFlow';
  }

  findAll() {
    return `This action returns all cashFlow`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cashFlow`;
  }

  update(id: number, updateCashFlowDto: UpdateCashFlowDto) {
    return `This action updates a #${id} cashFlow`;
  }

  remove(id: number) {
    return `This action removes a #${id} cashFlow`;
  }
}
