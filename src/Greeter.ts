export class Greeter {
  greeted: string
  constructor(name: string) {
    this.greeted = name
  }
  sayHello() {
    return "Hello " + this.greeted
  }
}