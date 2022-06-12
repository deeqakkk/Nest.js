import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async create(title: string, desc: string, price: number) {
    const newProduct = new this.productModel({
      title,
      description: desc,
      price,
    });
    const result = await newProduct.save();
    console.log(result);
    return result.id as string;
  }

  async getProducts() {
    const products = await this.productModel.find().exec();
    return products.map(prod => ({
      id: prod.id,
      title: prod.title,
      description: prod.description,
      price: prod.price,
    }));
  }

  findAll() {
    return `This action returns all products`;
  }

  getSingleProduct(id: string) {
    return `This action returns a #${id} product`;
  }

  updateProduct(
    id: string,
    prodTitle: string,
    prodDesc: string,
    prodPrice: number,
  ) {
    return `This action updates a #${id} product`;
  }

  deleteProduct(id: string) {
    return `This action removes a #${id} product`;
  }
}
