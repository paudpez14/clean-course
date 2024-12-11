(() => {
  type Gender = "M" | "F";
  // ! NO DRY
  class Person {
    // public name: string;
    // public gender: Gender;
    // public birthDate: Date;

    // constructor(name: string, gender: Gender, birthDate: Date) {
    //   this.name = name;
    //   this.gender = gender;
    //   this.birthDate = birthDate;
    // }

    constructor(
      public name: string,
      public gender: Gender,
      public birthDate: Date
    ) {}
  }
  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(name, gender, birthDate);
      this.lastAccess = new Date();
    }
    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(email, role, name, gender, birthDate);
    }
  }

  const newPerson = new Person("Fernando", "M", new Date("1995-10-21"));
  console.log({ newPerson });
})();
