import { Audit } from "./Audit.tapupentity";
export class ContactDetails extends Audit {
  phone: number;
  businessphone1: number;
  businessphone2: number;
  businessemail: string;
  fax: string;
  webpage: string;
  //setter getter method
  get contactPhone() {
    return this.phone;
  }
  set contactPhone(contact_phone: number) {
    this.phone = contact_phone;
  }

  get contactbusinessphone1() {
    return this.businessphone1;
  }
  set contactbusinessphone1(business_phone1: number) {
    this.businessphone1 = business_phone1;
  }
  get contactbusinessphon2() {
    return this.businessphone2;
  }
  set contactbusinessphone2(business_phone2: number) {
    this.businessphone2 = business_phone2;
  }
  get contactFax() {
    return this.fax;
  }
  set contactFax(contact_fax: string) {
    this.fax = contact_fax;
  }
  //webpage
  get contactWebpage() {
    return this.webpage;
  }
  set contactWebpage(contact_webpage: string) {
    this.webpage = contact_webpage;
  }
}

