// employee-awards.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class EmployeeAwards extends Document {
  
  @Prop({ required: true })
  awardName: string;

  @Prop({ required: true })
  gift: string;

  @Prop({ required: true })
  awardDate: Date;

}

export type EmployeeAwardsDocument = EmployeeAwards & Document;
export const EmployeeAwardsSchema = SchemaFactory.createForClass(EmployeeAwards);
