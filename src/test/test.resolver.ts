import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { OtherEntity, TestEntity } from './test.dto';

@Resolver(() => TestEntity)
export class TestResolver {
  @ResolveField(() => OtherEntity)
  async test123(@Parent() unit: TestEntity): Promise<OtherEntity | null> {
    return null;
  }

  @Mutation(() => TestEntity) update(@Args('test') test: TestEntity) {
    return null;
  }

  @Query(() => TestEntity) get() {
    return null;
  }
}
