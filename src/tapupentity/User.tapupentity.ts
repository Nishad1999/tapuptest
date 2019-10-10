import { Audit } from "./Audit.tapupentity";
export class User extends Audit {
  id: number;
  username: string;
  password: string;
  roles: string[];
  active: boolean;
  get userId() {
    return this.id;
  }
  set userId(newId: number) {
    this.id = newId;
  }

  get userName() {
    return this.username;
  }
  set userName(newUsername: string) {
    this.username = newUsername;
  }


  get userPassword() {
    return this.password;
  }
  set userPassword(newpassword: string) {
    this.password = newpassword;
  }

  // for roles
  get userRoles() {
    return this.roles;
  }
  set userRoles(newroles: string[]) {
    this.roles = newroles;
  }

  get activeUser() {
    return this.active;
  }
  set activeUser(activeUser: boolean) {
    this.active = activeUser;
  }


}
