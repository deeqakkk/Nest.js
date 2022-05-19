import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
// this means that it will be able to use the dependencies
export class AuthService {


  constructor(private prisma: PrismaService) { }
  signin() {
    return { msg: "I am signing in" };
  }

  signup() {
    return { msg: "I am signing up" };
  }
}

