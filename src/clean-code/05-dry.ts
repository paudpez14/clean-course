type Size = "" | "S" | "M" | "XL";
class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}
  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if ((<string>(<unknown>this[key])).length <= 0)
            throw Error(`${key} is Empty`);
          break;
        case "number":
          if (<number>(<unknown>this[key]) <= 0) throw Error(`${key} is zero`);
          break;
        default:
          throw Error(`${typeof this[key]} is not valid`);
      }
    }
    return true;
  }
  toString() {
    // ! NO DRY
    // if (this.name.length <= 0) throw Error("name is Empty");

    // * DRY
    if (!this.isProductReady) return;
    return `${this.name} `;
  }
}
(() => {
  const bluePants = new Product("Blue Large Plants");
  console.log(bluePants.toString());
})();
