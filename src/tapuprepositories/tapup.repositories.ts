import { DefaultCrudRepository } from '@loopback/repository';
import { Audit } from '../tapupentity/Audit.tapupentity';
import { MongodbDataSource } from '../datasources/mongodb.datasource';
import { inject } from '@loopback/core';
export class TapupRepository extends DefaultCrudRepository<Audit, typeof Audit.prototype.id> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Audit, dataSource);
  }
}
