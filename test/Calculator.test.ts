import {Calculator} from '../src/Calculator';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;

describe('My math library', () => {
  it('should be able to add things correctly' , () => {
    expect(new Calculator().add(3,4)).to.equal(7);
  });
  it('should be able to multiply things correctly' , () => {
    expect(new Calculator().multiply(3,4)).to.equal(12);
  });
});