import { Field, InputType, InterfaceType, ObjectType } from '@nestjs/graphql';

@InterfaceType('TestBase')
@InputType('TestInput')
export class TestEntity {
  @Field()
  clubId!: string;
}

@ObjectType()
export class OtherEntity {
  @Field()
  name!: string;
}
