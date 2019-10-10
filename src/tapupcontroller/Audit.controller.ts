import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
  AnyType,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
}
  from '@loopback/rest';
import { Audit } from '../tapupentity/Audit.tapupentity';
import { TapupRepository } from '../tapuprepositories/tapup.repositories';
import { AuditService } from '../tapupservices/tapup.services';
import { rejects } from 'assert';
import { promises } from 'fs';
import { resolve } from 'dns';
export class AuditController {
  auditService: AuditService;
  constructor(@repository(TapupRepository) public auditRepository: TapupRepository) {
    this.auditService = new AuditService(this.auditRepository);
  }
  //fir creating Audit
  @post('/addAudit')
  async addAudit(@requestBody({
    content: {
      'application/json': {
        schema: getModelSchemaRef(Audit, {
          title: 'Audit',
        }),
      },
    },
  }) audit: Audit): Promise<Audit> {
    return this.auditService.createAudit(audit);
  }
}

