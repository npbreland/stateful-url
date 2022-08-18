import StatefulURL from './stateful-url.js';

const assert = chai.assert;

describe('Stateful URL tests', () => {
let sURL;

  beforeEach(() => {
    sURL = new StatefulURL();
  });

  afterEach(() => {
    sURL.clear();
  });

  it('foo equals bar', () => {
    sURL.set('foo', 'bar');

    const test = sURL.get('foo');
    assert.strictEqual(test, 'bar', `test ${test} !== bar`);
  });

  it('foo equals bar', () => {
    sURL.set('foo', 'bar');
    const test = sURL.get('foo');
    assert.strictEqual(test, 'bar', `test ${test} !== bar`);
  });

  it("Clears all query parameters", () => {
    sURL.set('foo', 'bar');
    sURL.set('ima', 'teapot');
    sURL.set('hello', 'world');

    sURL.clear();
    
    const qs = sURL.toString();
    assert.equal(qs, '', `query string ${qs} is not empty`);
  });


  it("Appends array values to single key", () => {

    sURL.append('foo', 'bar1');
    sURL.append('foo', 'bar2');
    sURL.append('foo', 'bar3');

    const test = sURL.getAll('foo');
    assert.deepEqual(test, [ 'bar1', 'bar2', 'bar3' ], 'Result not equal to expected array');
  });

});

