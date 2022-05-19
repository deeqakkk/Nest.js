import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from "argon2";
@Injectable()
// this means that it will be able to use the dependencies
export class AuthService {


  constructor(private prisma: PrismaService) { }
  signin() {
    return { msg: "I am signing in" };
  }

  async signup(dto: AuthDto) {
    // generate the password hash
    const hash = await argon.hash(dto.password);
    // save the new user in the db
    
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
 hash,
        },

      });

      // it will delete the password from the user object while printing
    return user;
  }
}

