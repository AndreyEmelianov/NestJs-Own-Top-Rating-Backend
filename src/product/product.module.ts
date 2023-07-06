import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductController } from './product.controller';
import { ProductModelSchema } from './product.model/product.model';

@Module({
	controllers: [ProductController],
	imports: [
		MongooseModule.forFeature([
			{
				name: ProductModule.name,
				schema: ProductModelSchema,
			},
		]),
	],
})
export class ProductModule {}
