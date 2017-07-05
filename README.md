# eslint-plugin-no-pause

No pause property allowed

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-pause`:

```
$ npm install eslint-plugin-no-pause --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-pause` globally.

## Usage

Add `no-pause` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-pause"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-pause/no-pause": "error" 
    }
}
```

## Supported Rules

* Fill in provided rules here





