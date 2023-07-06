import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { ReviewDocument, ReviewModel } from './review.model/review.model';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
	constructor(@InjectModel(ReviewModel.name) private readonly reviewModel: Model<ReviewDocument>) {}

	async create(dto: CreateReviewDto) {
		return this.reviewModel.create(dto);
	}

	async findByProductId(productId: string) {
		return this.reviewModel.find({ productId: new Types.ObjectId(productId) }).exec();
	}

	async delete(id: string) {
		return this.reviewModel.findByIdAndDelete(id).exec();
	}

	async deleteByProductId(productId: string) {
		return this.reviewModel.deleteMany({ productId: new Types.ObjectId(productId) }).exec();
	}
}
