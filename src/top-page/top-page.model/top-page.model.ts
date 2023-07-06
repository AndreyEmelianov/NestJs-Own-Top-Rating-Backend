import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}

export class HhData {
	@Prop()
	count: number;
	@Prop()
	juniorSalary: number;
	@Prop()
	middleSalary: number;
	@Prop()
	seniorSalary: number;
}

export class TopPageAdvantage {
	@Prop()
	title: string;
	@Prop()
	description: string;
}

export type TopPageDocument = HydratedDocument<TopPageModel>;

export class TopPageModel {
	@Prop()
	_id: string;
	@Prop({ enum: TopLevelCategory })
	firstCategory: TopLevelCategory;
	@Prop()
	secondCategory: string;
	@Prop()
	title: string;
	@Prop({ unique: true })
	alias: string;
	@Prop()
	category: string;
	@Prop({ type: () => HhData })
	hh?: HhData;
	@Prop({ type: () => [TopPageAdvantage] })
	advantages: TopPageAdvantage[];
	@Prop()
	seoText: string;
	@Prop()
	tagsTitle: string;
	@Prop({ type: () => [String] })
	tags: string[];
}

export const TopPageModelSchema = SchemaFactory.createForClass(TopPageModel);
