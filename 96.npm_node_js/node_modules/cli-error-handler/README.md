# cli-error-handler
   Error handler for nodeJs.

<br>

[![📟](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/install.png)](./../../)

## Install

```sh
npm install cli-error-handler
```

<br>

[![⚙️](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/usage.png)](./../../)

## Usage

```js
const handleError = require('cli-error-handler');

// Let's say we get an error message from a custom command.
const [err, res] = await somePromise();

// Use the function. It will print the error and exit if there is an error.
handleError(`Failed while building on step #1`, err);
```

<br />

[![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/options.png)](./../../)

## API

### handleError(heading, err, displayError?, exit?)

#### ❯ heading

Type: `string`<br>

Heading of the error message.

#### ❯ err

Type: `error/object`<br>

#### ❯ displayError

Type: `boolean`<br>
Default: `true` (optional)

Display the error message or not.

#### ❯ exit

Type: `boolean`<br>
Default: `true` (optional)

Exit the CLI on error or not?

<br>

## Connect

<div align="left">
    <p><a href="https://github.com/tawseefnabi/"><img alt="GitHub @tawseefnabi" align="center" src="https://img.shields.io/badge/GITHUB-gray.svg?colorB=6cc644&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> To stay up to date on free & open-source software</small></p>
    <p><a href="https://twitter.com/NabiTowseef/"><img alt="Twitter @NabiTowseef" align="center" src="https://img.shields.io/badge/TWITTER-gray.svg?colorB=1da1f2&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> To get tech updates/small></p>
    <p><a href="https://www.linkedin.com/in/tawseef-ahmad-bhat-61830385/"><img alt="LinkedIn @MrAhmadAwais" align="center" src="https://img.shields.io/badge/LINKEDIN-gray.svg?colorB=0077b5&style=flat" /></a>&nbsp;<small><strong>(connect)</strong> On the LinkedIn profile y'all</small></p>
</div>

<br>


[n]: https://nodecli.com/?utm_source=FOSS&utm_medium=FOSS&utm_campaign=create-node-app
[repo]: https://github.com/AhmadAwais/create-node-app
