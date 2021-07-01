# Epiphany javascript code standards Eslint plugin

This is a eslint config plugin for Epiphany. More info [see following](https://www.notion.so/Epiphany-Code-Standards-eb8826264abe4e569f50c33528bc095e)

## Usage

Install Eslint version 7 on your project and Epiphany Javascript Eslint config package

```javascript
npm i eslint @epiphany-rbc/eslint-config-javascript --save-dev
```

create `.eslintrc` file

```bash
$ touch .eslintrc
```

Extend your eslint config from epiphany config.

```javascript
module.exports = {
    extends: [
        '@epiphany-rbc/eslint-config-javascript',
    ]
};
```
