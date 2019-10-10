import { Audit } from "./Audit.tapupentity";
import { Address } from "./Address.tapupentity";
import { ContactDetails } from "./ContactDetails.tapupentity";
namespace myUser {
  class Profile extends Audit {
    bio: string;
    email: string;
    mobileno: number;
    prefix: string;//(Mr,Ms,Mrs)
    firstname: string;
    middlename: string;
    lastname: string;
    companyname: string;
    deptname: string;
    jobtitle: string;
    address: Address;
    contactdetails: ContactDetails;
    template: string;// (img source of particular template)
    profilepic: string;
    get ProfileBio() {
      return this.bio;
    }
    set profileBio(profilebio: string) {
      this.bio = profilebio;
    }

    get profileEmail() {
      return this.email;
    }
    set profileEmail(profileEmail: string) {
      this.email = profileEmail;
    }
    get profileMoblieNo() {
      return this.mobileno;
    }
    set profileMoblieNo(profileMobileNo: number) {
      this.mobileno = profileMobileNo;
    }
    get profileProfix() {
      return this.prefix;
    }
    set profilePrefix(profile_Prefix: string) {
      this.prefix = profile_Prefix;
    }
    get profileFirstName() {
      return this.firstname;
    }
    set profileFirstName(firstName: string) {
      this.firstname = firstName;
    }

    get profileMiddleName() {
      return this.middlename;
    }
    set profileMiddleName(middletName: string) {
      this.middlename = middletName;
    }
    get profileLastName() {
      return this.middlename;
    }
    set profileLastName(lastName: string) {
      this.lastname = lastName;
    }

    get companyName() {
      return this.middlename;
    }
    set companyName(compnyName: string) {
      this.companyname = compnyName;
    }

    get deptName() {
      return this.deptname;
    }
    set deptName(deptName: string) {
      this.deptname = deptName;
    }

    get jobTitle() {
      return this.jobtitle;
    }
    set jobTitle(newjobtitle: string) {
      this.jobtitle = newjobtitle;
    }
    //address
    get profileAddress() {
      return this.address;
    }
    set profileAddress(newAddress: Address) {
      this.address = newAddress;
    }
    //contactdetails
    get contactDetails() {
      return this.contactdetails;
      //return this.Address;
    }
    set contactDetails(newcontact: ContactDetails) {
      this.contactdetails = newcontact;
    }
    //profilepic
    get profilePic() {
      return this.profilepic;
    }
    set profilePic(profile_pic: string) {
      this.profilepic = profile_pic;
    }
  }
}

