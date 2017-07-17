# Node Package Manager
Create by [huang.xinghui](http://huang-x-h.github.io/) / [@Github](https://github.com/huang-x-h)

---

## Agenda

- What's npm ?
- How to use npm?
- How to create node module package?

---

# What's npm ?

---

- Java 有 maven
- Ruby 有 bundle
- Python 有 pip
- Perl 有 cpan
- JavaScript ？😖

---

<svg viewBox="0 0 18 7">
	<path fill="#CB3837" d="M0,0v6h5v1h4v-1h9v-6"></path>
	<path fill="#FFF" d="M1,1v4h2v-3h1v3h1v-4h1v5h2v-4h1v2h-1v1h2v-4h1v4h2v-3h1v3h1v-3h1v3h1v-4"></path>
</svg>

---

**npm (Node Package Mananger)** makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you're sharing.

---

# How to use npm?

---

## Install

下载安装 Node 即可 https://nodejs.org/en/download/

可通过 `npm install npm@latest -g` 更新 npm 到最新，目前版本是 [5](http://blog.npmjs.org/post/161081169345/v500)

---

## Install Packages in Global Mode

```
Regular: npm install <pkg-name> --global

Shorthand: npm i <pkg-name> -g
```

---

## Install Packages in Local Mode

```
Regular: npm install <pkg-name>

Shorthand: npm i <pkg-name>
```

---

## Listing Packages

```
Regular: npm list --global

Shorthand: npm ls --depth 0
```

---

## Maintenance 🔧

安装本地模块后，如何进行维护？

---

## package.json

[Sample](https://github.com/huang-x-h/Bean.js/blob/master/package.json)

---

## Creating a package.json

```
npm init
```

Sample Time 🕙

---

## Advance Creatie package.json

Automate npm init with defaults [npm-init](https://github.com/huang-x-h/npm-init)

---

## Managing Dependencies with package.json

```
Regular: npm install --save-dev <pkg-name> // 开发依赖

Shorthand: npm i -D <pkg-name>

Regular: npm install --save <pkg-name>

Shorthand: npm i -S <pkg-name>
```

Note:
Installing a package and save it as a devDependency (devDependencies are packages used for development purposes, for example for running tests or transpiling code.
)

---

## Uninstall Packages

```
Regular: npm uninstall <pkg-name> // uninstall local package

Shorthand: npm up <pkg-name>

Regular: npm uninstall --global <pkg-name> // uninstall global package

Shorthand: npm up -g <pkg-name>
```

---

## Updating Packages

```
npm update <pkg-name>

npm outdated
```

---

# npm version

---

## Install a Specific Version of a Package

`npm install <pkg-name>@version`

语义化版本 [semver](https://docs.npmjs.com/misc/semver)

```
[major, minor, patch]

- ^1.2.3 := >=1.2.3 <2.0.0
- ~1.2.3 := >=1.2.3 <1.(2+1).0 := >=1.2.3 <1.3.0
- 1.2.3 - 2.3.4 := >=1.2.3 <=2.3.4
...
```

---

# npm scope

---

## Working with scoped packages

Scopes are like namespaces for npm modules

`@scope/project-name`

---

## Private npm registry

(znpm(ZTEsoft npm))[http://npm.ztesoft.com/]

---

# npm cache

---

## Manipulates packages cache

When npm installs a package it keeps a copy, so the next time you want to install that package, it doesn’t need to hit the network. The copies are cached in the .npm directory in your home path.

`ls ~/.npm`

`npm cahce clean` 

[Detail](https://docs.npmjs.com/cli/cache)

---

# npm script

---

## Running locally-installed executables

npm does a little trick and adds an additional folder to our PATH, <project-directory>/node_modules/.bin.

`npm run env | grep "$PATH"`

---

## Run scripts before and after other scripts

- preinstall: Run BEFORE the package is installed
- install
- postinstall: Run AFTER the package is installed.
- pretest, test, posttest: Run by the npm test command.

[Detail](https://docs.npmjs.com/misc/scripts)

Sample Time 🕙 

---

# How to create node module package?

---

## Creating Node.js Module

Sample Time 🕙

---

## Publishing npm packages

`npm publish`

---

## znpm

http://npm.ztesoft.com/

---

## Bonus

- `npm outdated` Check for outdated packages
- `npm search <pkg-name>` search packages

---

## yarn vs npm



---

## Resources

- https://docs.npmjs.com/
- https://www.sitepoint.com/beginners-guide-node-package-manager/
- https://medium.freecodecamp.com/8-npm-tricks-you-can-use-to-impress-your-colleagues-dbdae1ef5f9e
- https://docs.npmjs.com/how-npm-works/npm3-dupe

---

# Any Question ❓

---

# Thanks 😊