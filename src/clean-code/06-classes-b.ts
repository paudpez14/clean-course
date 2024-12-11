(() => {
  type Gender = "M" | "F";
  interface PersonProps {
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthDate: Date;

    constructor({ name, gender, birthDate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }
  interface UserProps {
    email: string;
    role: string;
  }
  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;
    constructor({
      birthDate,
      gender,
      name,
      email,
      role,
    }: PersonProps & UserProps) {
      super({ birthDate, gender, name });
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }
    checkCredentials() {
      return true;
    }
  }
  interface UserSettingProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }
  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({
      birthDate,
      email,
      gender,
      name,
      role,
      workingDirectory,
      lastOpenFolder,
    }: UserSettingProps & UserProps & PersonProps) {
      super({ birthDate, email, gender, name, role });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }
  const userSettings = new UserSettings({
    birthDate: new Date("1995-10-21"),
    email: "a@prueba.com",
    gender: "M",
    lastOpenFolder: "/home",
    name: "Fernando",
    role: "QA",
    workingDirectory: "/etc",
  });
  //   class UserSettings extends User {
  //     public workingDirectory: string;
  //     public lastOpenFolder: string;
  //     constructor(
  //       { workingDirectory, lastOpenFolder }: UserSettingProps,
  //       userProps: UserProps,
  //       personProps: PersonProps
  //     ) {
  //       super(userProps, personProps);
  //       this.workingDirectory = workingDirectory;
  //       this.lastOpenFolder = lastOpenFolder;
  //     }
  //   }

  //   const userSetting = new UserSettings({
  //     workingDirectory: "/",
  //     lastOpenFolder: "/home",

  //   });
})();
