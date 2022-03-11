**********************************
The result is in the "dist" folder
**********************************

Terminal commands:

===============================================================================
1. Project installation: npm i

2. Run in developer mode (with browsersync): npm run dev

3. Run a project build (no browsersync): npm run build

4. Run a project build and upload to FTP (no browsersync): npm run deploy
   (configuration path: config/gulp-settings.js)

5. Run a project build and creating a .zip file (no browsersync): npm run zip
===============================================================================

===============================================================================
Path aliases:
@img = src/img
@scss = src/scss
@js = src/js

Plugin for VS Code - "Path Autocomplete"
Settings JSON:
"path-autocomplete.pathMappings": {
	"@img": "${folder}/src/img", // alias for img folder
	"@scss": "${folder}/src/scss", // alias for scss folder
	"@js": "${folder}/src/js", //  alias for js folder
}
===============================================================================

===============================================================================
Description:
1. Use only the latest version of "Node.js"
2. Open terminal with admin rights
3. Do not use symbols: # or !
4. No cyrillic font
5. The "img" tag is on one line.
===============================================================================

===============================================================================
Errors and Solutions:
--------------------------------------
error: "node-sass"
solution: "npm rebuild node-sass" or "npm install sass gulp-sass --save-dev"
--------------------------------------
error: "python"
solution: "npm install --global windows-build-tools"
--------------------------------------