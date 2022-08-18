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

  it('Sets the query parameter', () => {
    sURL.set('foo', 'bar');

    const qs = location.search;
    const answer = '?foo=bar'
    assert.strictEqual(location.search, answer, `query string ${qs} !== ${answer}`);
  });

  it('Gets the query parameter', () => {
    sURL.set('foo', 'bar');
    const test = sURL.get('foo');
    assert.strictEqual(test, 'bar', `test ${test} !== bar`);
  });

  it("Clears all query parameters", () => {
    sURL.set('foo', 'bar');
    sURL.set('ima', 'teapot');
    sURL.set('hello', 'world');

    sURL.clear();
    
    const qs = location.search;
    assert.equal(qs, '', `query string ${qs} is not empty`);
  });

  it("Sorts the query parameters by key", () => {
    sURL.set('coconut', '1');
    sURL.set('apple', '1');
    sURL.set('banana', '1');

    sURL.sort();
    
    const qs = location.search;
    const answer = '?apple=1&banana=1&coconut=1';
    assert.strictEqual(qs, answer, `query string ${qs} !== ${answer}`)
  });

  it("Appends array values to single key", () => {
    sURL.append('foo', 'bar1');
    sURL.append('foo', 'bar2');
    sURL.append('foo', 'bar3');
    
    const qs = location.search;
    const answer = '?foo=bar1&foo=bar2&foo=bar3';

    assert.strictEqual(qs, answer, `query string ${qs} !== ${answer}`);
  });

});

