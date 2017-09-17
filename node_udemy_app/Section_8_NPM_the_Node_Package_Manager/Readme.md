- Package :CODE...
...managed and maintained with a package management system.

- Package Management system: software that automates installing and update packages.

- Dependency : code that another set of code depends on to function
if you use that code in your app, it is a dependency. Your app depends on it

- versioning : specifying what version of a set of code this is so other can track if a new version has come out this allows to watch for a new fuatures, or to watch for 'breacking chanes'.
The word 'semantic' implies that some thing conveys meaning.

#### Semantic มาตรฐานการตั้งเลข Version ของ Software
http://meewebfree.com/site/start-website-builder/417-standard-versioning-software-semantic


#### NPM
```
https://www.npmjs.com/
- express https://www.npmjs.com/package/express
- monent (formant time date) https://www.npmjs.com/package/moment
- jasmine-node (lib for test code) ttp://www.siamhtml.com/tdd-using-jasmine/
- -g nodemon (auto restart page)

 ```

#### init npm package.json
```
- npm init --yes or npm init
- npm install monent --save
- npm install (will check file package.json and installed all dependencys)


--save : kepp dependencys in package.json 
--save-dev : keep dependencys for dev to package.json it's not use in server
-g : install package in local computer (- npm config get prefix)

```
#### npm Global Installation
https://docs.npmjs.com/getting-started/fixing-npm-permissions

- npm config get prefix