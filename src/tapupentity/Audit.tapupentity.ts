import { Entity } from "@loopback/repository";

export class Audit extends Entity {
  id: number;
  createdon: any;
  updatedon: any;
  createdby: string;
  updatredby: string;
  updatedondate: any;
  get createdid(): number {
    return this.id;
  }
  set createdid(newid: number) {
    this.id = newid;
  }
  //for createdon: any;
  get createdOn(): any {
    return this.createdon;
  }
  set createdOn(newCreatedon: any) {
    this.createdon = newCreatedon;
  }
  //for  updatedon: any;
  get updatedOn(): any {
    return this.updatedon;
  }

  set updatedOn(newUpdatedOn: any) {
    this.updatedOn = newUpdatedOn;
  }
  // for createdby: User.id;
  get createdBy() {
    return this.createdby;
  }
  set createdBy(newcreatedby: string) {
    this.createdby = newcreatedby;
  }
  //for updatredby: User.id;
  get updatedBy() {
    return this.createdby;
  }
  set updatedBy(newcreatedby: string) {
    this.updatredby = newcreatedby;
  }
  //for updatedondate: Date;
  get updatedOndate(): any {
    return this.updatedondate;
  }
  set updatedOndatedOn(newUpdatedOndate: any) {
    this.updatedondate = newUpdatedOndate;
  }

}
