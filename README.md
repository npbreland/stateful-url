# stateful-url
** Maintain application state in your URL **

## About
This tiny (~600 bytes) helper extends the [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) 
interface to update the URL with changes made to the parameters. This allows bookmarking and
sharing of your application in a given state. It can be particularly useful
in Single Page Applications (SPAs), where you don't want to navigate away from
the page but still want the ability to bookmark and share the app in its
current state.

Because it extends [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams), you can use any and all of the methods
on that interface. This package will just update the URL immediately with those
changes, using [History.replaceState()](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState).

## Usage

This source code is written as an ES module, so it can be imported into your
favorite front-end framework. Alternatively, you can import it on its own using
an inline script tag in your HTML.

## Example

```javascript
import StatefulURL from 'stateful-url';

// URL: https://example.com

const sURL = new StatefulURL();

sURL.set('foo', 'bar');
sURL.set('fizz', 'buzz');

// Immediately changes URL -> https://example.com?foo=bar&fizz=buzz

sURL.delete('foo');

// -> https://example.com?fizz=buzz

sURL.append('fizz', 'bar');

// -> https://example.com?fizz=buzz&fizz=bar

sURL.delete('fizz')

// -> https://example.com

sURL.set('coconut', '1');
sURL.set('apple', '1');
sURL.set('banana', '1');

// -> https://example.com?coconut=1&apple=1&banana=1

sURL.sort();
// -> https://example.com?apple=1&banana=1&coconut=1

```

## Testing

If you are interested in running the tests, open up test.html from the package
in your web browser (while running a server). Mocha tests will run and the results will be displayed.
