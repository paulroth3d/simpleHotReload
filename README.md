# Overview

Uses the [Reload](https://www.npmjs.com/package/reload) package to provide hotreloads.

# How to run

	npm start
	
Note that this uses the start script under the package.json file.

	./node_modules/.bin/supervisor -k -e html -i .git/,node_modules/ -- src/index.js
	
If any files change then it reloads src/index.js

**All html files must include the line: `<script src="/reload/reload.js"></script>`

# Structure

* src/public/ - the public directory
* src/index.js - the server to run

