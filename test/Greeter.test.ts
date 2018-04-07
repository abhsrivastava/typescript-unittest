import {Greeter} from '../src/Greeter'

import * as mocha from 'mocha'
import * as chai from 'chai'

const expect = chai.expect

describe("should be able to greet people", () => {
  it("should be able to say Hello", () => {
    expect(new Greeter("abhi").sayHello()).to.equal("Hello abhi")
  });
})