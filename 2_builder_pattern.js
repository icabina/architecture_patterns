"use strict";

//===========================================
export class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

export class User {
  constructor(name /*  age, phone, address */) {
    this.name = name;
    /*   this.age = age;
    this.phone = phone;
    this.address = address; */
  }
}

//===============================================
//BUILDER
export class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }
  setAge(age) {
    this.user.age = age;
    return this; //return builder object to chain with next method
  }
  setPhone(phone) {
    this.user.phone = phone;
    return this; //return builder object to chain with next method
  }
  build() {
    return this.user;
  }
}

//===============================================
//JAVASCRIPT BUILDER
export class Usuario {
  constructor(name, { age, phone = "2800", address } = {}) {
    //second parameter is object w/ keys
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

//===============================================
console.log("================================");
