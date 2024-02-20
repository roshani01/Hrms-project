import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Employee extends Document {
  @Prop({ required: true })
  employeeNo: String;

  @Prop({ required: true })
  cardNo: String;

  @Prop({ required: true })
  fullName: String;

  @Prop({ required: true })
  fatherName: String;

  @Prop({ required: true })
  email: String;

  @Prop({ required: true })
  presentAddress: String;

  @Prop({ required: true })
  permanentAddress: String;

  @Prop({ required: true })
  city: String;

  @Prop({ required: true })
  pincode: String;

  @Prop({ required: true })
  companyName: String;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'EmployeeAwards' }] })
  awardIds: MongooseSchema.Types.ObjectId[];
}

export type EmployeeDocument = Employee & Document;
export const EmployeeSchema = SchemaFactory.createForClass(Employee);
