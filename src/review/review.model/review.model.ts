import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ReviewDocument = HydratedDocument<ReviewModel>;
export class ReviewModel {
	@Prop()
	_id: string;
	@Prop()
	name: string;
	@Prop()
	title: string;
	@Prop()
	description: string;
	@Prop()
	rating: number;
	@Prop()
	createdAt: Date;
	@Prop()
	productId: Types.ObjectId;
}

export const ReviewModelSchema = SchemaFactory.createForClass(ReviewModel);
