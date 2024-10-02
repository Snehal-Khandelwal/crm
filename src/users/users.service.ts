import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(user) {
    const newUser = await this.prisma.user.create(user);
    return newUser;
  }

  async getUser(id) {
    const requiredUser = await this.prisma.user.findUnique({
      where: { consumerNo: id },
    });
    return requiredUser;
  }

  async updateUser(id, data) {
    const updatedUser = await this.prisma.user.update({
      where: { consumerNo: id },
      data,
    });
    return updatedUser;
  }

  async deleteUser(id) {
    const deletedUser = await this.prisma.user.delete({
      where: { consumerNo: id },
    });
    return deletedUser;
  }
}
