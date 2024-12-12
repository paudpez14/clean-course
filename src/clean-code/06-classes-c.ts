(() => {
  // ! APLICANDO DRY
  // Aplicar la composicion en lugar de la herencia
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
  class User {
    public lastAccess: Date;
    public email: string;
    public role: string;
    constructor({ email, role }: UserProps) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }
    checkCredentials() {
      return true;
    }
  }
  interface SettingProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }
  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({ workingDirectory, lastOpenFolder }: SettingProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps {
    birthDate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public setting: Settings;
    constructor({
      birthDate,
      gender,
      name,
      email,
      role,
      lastOpenFolder,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthDate });
      this.user = new User({ email, role });
      this.setting = new Settings({ workingDirectory, lastOpenFolder });
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
