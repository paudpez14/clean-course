(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  //? Idea para la nueva clase InputElement
  interface InputElementProps {
    id: string;
    type: HtmlType;
    value: string;
    placeholder: string;
  }
  class InputElement {
    public htmlElement: HtmlElement;
    public inputAttributes: InputAttributes;
    public inputEvents: InputEvents;
    constructor({ id, type, value, placeholder }: InputElementProps) {
      this.htmlElement = new HtmlElement(id, type);
      this.inputAttributes = new InputAttributes(value, placeholder);
      this.inputEvents = new InputEvents();
    }
  }

  const nameField = new InputElement({
    id: "name",
    type: "input",
    value: "",
    placeholder: "Nombre",
  });

  console.log({ nameField });
})();
