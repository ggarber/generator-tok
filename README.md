# generator-tok

This is a Yeoman generator for apps that follow the Tokbox style guidelines and best practises.

### Prerequisites

This generator is built using [Yeoman](http://yeoman.io/), you'll need to install that first.

```
npm install -g yo
```


### Installation

Eventually I will push this to npm. But for you can install it using:

```
git clone https://github.com/luma/generator-tok.git
cd generator-tok
npm link
```

After that the `yo tok` generator should be available.

### Usage

```
mkdir appName
cd appName
yo tok appName
```

This will generate a private module by default. Use `yo tok appName --private=false` to generate a public project.

By default it will also initialise a local Git repo for you. If you don't want one, or you wish to set it up yourself, then use the `git` flag (e.g. `yo tok appName --git=false`).

To see what tasks your new app has you can run `gulp help`.


### What does it do for me?

It will generate apps with the following:
* es6 support via Babel
* create a new (local) git repo in the cwd
* linting and code style checking via [ESLint](http://eslint.org/)
* a task to generate TODO.md and todo.json files
* tasks via [Gulp](http://gulpjs.com/)
* testing via [Jasmine](http://jasmine.github.io/)
* code coverage via [Istanbul](https://gotwarlost.github.io/istanbul/)
* code doc generation via [JSDoc](http://usejsdoc.org/)
* Browser dependency management via [Browserify](http://browserify.org/)
* Browser test running via [Karma](http://karma-runner.github.io)
* a default *empty* LICENSE file
* a default [.editorconfig](http://editorconfig.org) and [.gitignore](https://help.github.com/articles/ignoring-files/)
* a mostly empty index.js that uses [Bunyan](https://github.com/trentm/node-bunyan) for logging
* a [package.json](https://docs.npmjs.com/files/package.json) file containing all the common essentials


### What it doesn't do (yet)

* it doesn't have strong guidelines for how you build your final package, except that you should use Gulp as your task system


### TODOs

* there should be a yeoman option for generating a library that targets browser, node, or both
* adding the ability to generate a browser app (Browserify and karma support)
* tests!
