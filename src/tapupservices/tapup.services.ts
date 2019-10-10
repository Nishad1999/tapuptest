import { repository } from "@loopback/repository";
import { TapupRepository } from "../tapuprepositories/tapup.repositories";
import { Audit } from '../tapupentity/Audit.tapupentity';
import { param } from "@loopback/rest";
import { promises } from "dns";
export class AuditService {
  constructor(@repository(TapupRepository) public tapupRepository: TapupRepository) {
  }
  async createAudit(audit: Audit) {
  return this.tapupRepository.create(audit);
  }
}
