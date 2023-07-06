import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ReviewController } from './review.controller';
import { ReviewModel, ReviewModelSchema } from './review.model/review.model';
import { ReviewService } from './review.service';

@Module({
	controllers: [ReviewController],
	imports: [
		MongooseModule.forFeature([
			{
				name: ReviewModel.name,
				schema: ReviewModelSchema,
			},
		]),
	],
	providers: [ReviewService],
})
export class ReviewModule {}
