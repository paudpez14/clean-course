interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface RunningBird {
  run(): void;
}

class Tucan implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

class HumminBird implements Bird, FlyingBird, RunningBird {
  public fly() {}
  public eat() {}
  public run() {}
}

class Penguin implements Bird {
  public eat() {}
}
