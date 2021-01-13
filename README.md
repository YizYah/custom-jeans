
[//]: # ( ns__file unit: standard, comp: README.md )

[//]: # ( ns__custom_start beginning )

[//]: # ( ns__custom_end beginning )

[//]: # ( ns__start_section intro )

[//]: # ( ns__custom_start description )
custom-jeans
======
manages custom code for geenee templates

[//]: # ( ns__custom_end description )

[//]: # ( ns__custom_start afterDescription )

[//]: # ( ns__custom_end afterDescription )

[//]: # ( ns__custom_start badges )

[//]: # ( ns__start_section usageSection )

[![Version](https://img.shields.io/npm/v/custom-jeans.svg)](https://npmjs.org/package/custom-jeans)
[![Downloads/week](https://img.shields.io/npm/dw/custom-jeans.svg)](https://npmjs.org/package/custom-jeans)
[![License](https://img.shields.io/npm/l/custom-jeans.svg)](https://github.com/YizYah/custom-jeans/blob/master/package.json)


This package is used in connection with [geenee](https://www.npmjs.com/package/geenee) templates.  If you want to generate a template, you can call the geenee cli.  Or, you can use the [geenee-spell](https://www.npmjs.com/package/geenee-spell) package to handle a complete regeneration within node.

[//]: # ( ns__custom_end badges )

[//]: # ( ns__end_section intro )


[//]: # ( ns__start_replacement api )

# Usage
Include the package:
```
npm i custom-jeans
```
Normally, you call `storeCustomCode` before making programmatic changes, and then `insertCustomCode` afterward.

```
const {storeCustomCode, insertCustomCode} = require('custom-jeans')

(async () => {
	const customCode = await storeCustomCode(
      codeDir, config
    )
    
    // more code...

    const customCodeDoc = `${codeDir}/meta/customCode.json`

	await insertCustomCode(
      codeDir, customCodeDoc, config
    )

})();
```


[//]: # ( ns__start_replacement constants-storeCustomCode )

### StoreCustomCode
An async function that takes a rootDir `ROOT_DIR` and a config Configuration (a type exposed in [magicalstrings](https://www.npmjs.com/package/magicalstrings)) and returns a customCode json.  Further, the function stores the custom code json in the file `ROOT_DIR/meta/customCode.json`.

[//]: # ( ns__end_replacement constants-storeCustomCode )



[//]: # ( ns__start_section constants-insertCustomCode )

### InsertCustomCode
An async function that takes a rootDir `ROOT_DIR`, an addedCodeDoc `ADDED_CODE_DOC` and a config Configuration (a type exposed in [magicalstrings](https://www.npmjs.com/package/magicalstrings)) and will insert the custom changes where they belong within `ROOT_DIR`.

The value of `customCodeDoc` is normally `ROOT_DIR/meta/customCode.json`, but of course can be replaced if you want to manipulate a copy or generate it directly.

[//]: # ( ns__end_section constants-insertCustomCode )

[//]: # ( ns__end_replacement api )

