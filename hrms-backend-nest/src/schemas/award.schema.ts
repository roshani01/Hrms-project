import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Award extends Document {
  @Prop({ required: true })
  name: string;
}


export type AwardDocument = Award & Document;
export const AwardSchema = SchemaFactory.createForClass(Award);