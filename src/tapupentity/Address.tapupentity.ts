import { Audit } from "./Audit.tapupentity";
export class Address extends Audit {
  addressline1: string;
  addressline2: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  get addressLine1() {
    return this.addressLine1;
  }
  set addressLine1(address_line1: string) {
    this.addressLine1 = address_line1;
  }

  get addressLine2() {
    return this.addressLine2;
  }
  set addressLine2(address_line2: string) {
    this.addressLine2 = address_line2;
  }

  get addressCity() {
    return this.city;
  }
  set addressCity(address_city: string) {
    this.city = address_city;
  }

  get addressState() {
    return this.state;
  }
  set addressState(address_state: string) {
    this.state = address_state;
  }

  get Addresscountry() {
    return this.country;
  }
  set Addresscountry(address_country: string) {
    this.country = address_country;
  }
  get AddressPincode() {
    return this.pincode;
  }
  set AddressPincode(address_pincode: string) {
    this.pincode = address_pincode;
  }

}
