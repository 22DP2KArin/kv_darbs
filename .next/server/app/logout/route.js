/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/logout/route";
exports.ids = ["app/logout/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Flogout%2Froute&page=%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Flogout%2Froute.ts&appDir=C%3A%5CUsers%5C%D0%9A%D0%B0%D1%80%D0%B8%D0%BD%D0%B0%5CDesktop%5Ckv_darbs%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C%D0%9A%D0%B0%D1%80%D0%B8%D0%BD%D0%B0%5CDesktop%5Ckv_darbs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Flogout%2Froute&page=%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Flogout%2Froute.ts&appDir=C%3A%5CUsers%5C%D0%9A%D0%B0%D1%80%D0%B8%D0%BD%D0%B0%5CDesktop%5Ckv_darbs%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C%D0%9A%D0%B0%D1%80%D0%B8%D0%BD%D0%B0%5CDesktop%5Ckv_darbs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Desktop_kv_darbs_app_logout_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/logout/route.ts */ \"(rsc)/./app/logout/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/logout/route\",\n        pathname: \"/logout\",\n        filename: \"route\",\n        bundlePath: \"app/logout/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Карина\\\\Desktop\\\\kv_darbs\\\\app\\\\logout\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Desktop_kv_darbs_app_logout_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZsb2dvdXQlMkZyb3V0ZSZwYWdlPSUyRmxvZ291dCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmxvZ291dCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUMlRDAlOUElRDAlQjAlRDElODAlRDAlQjglRDAlQkQlRDAlQjAlNUNEZXNrdG9wJTVDa3ZfZGFyYnMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1QyVEMCU5QSVEMCVCMCVEMSU4MCVEMCVCOCVEMCVCRCVEMCVCMCU1Q0Rlc2t0b3AlNUNrdl9kYXJicyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDVztBQUN4RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9naWZ0LXdpc2hsaXN0Lz9mZmFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFzQmtCw0YDQuNC90LBcXFxcRGVza3RvcFxcXFxrdl9kYXJic1xcXFxhcHBcXFxcbG9nb3V0XFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2xvZ291dC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvbG9nb3V0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2xvZ291dC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXNCa0LDRgNC40L3QsFxcXFxEZXNrdG9wXFxcXGt2X2RhcmJzXFxcXGFwcFxcXFxsb2dvdXRcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Flogout%2Froute&page=%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Flogout%2Froute.ts&appDir=C%3A%5CUsers%5C%D0%9A%D0%B0%D1%80%D0%B8%D0%BD%D0%B0%5CDesktop%5Ckv_darbs%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C%D0%9A%D0%B0%D1%80%D0%B8%D0%BD%D0%B0%5CDesktop%5Ckv_darbs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/logout/route.ts":
/*!*****************************!*\
  !*** ./app/logout/route.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_supabase_server_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/supabase/server-actions */ \"(rsc)/./lib/supabase/server-actions.ts\");\n\n\nasync function POST() {\n    const supabase = await (0,_lib_supabase_server_actions__WEBPACK_IMPORTED_MODULE_1__.createServerSupabaseForActions)();\n    await supabase.auth.signOut();\n    const baseUrl = \"http://localhost:3000\" ?? 0;\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/\", baseUrl));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbG9nb3V0L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUNvQztBQUV4RSxlQUFlRTtJQUNwQixNQUFNQyxXQUFXLE1BQU1GLDRGQUE4QkE7SUFFckQsTUFBTUUsU0FBU0MsSUFBSSxDQUFDQyxPQUFPO0lBRTNCLE1BQU1DLFVBQ0pDLHVCQUFnQyxJQUFJLENBQXVCO0lBRTdELE9BQU9QLHFEQUFZQSxDQUFDVSxRQUFRLENBQUMsSUFBSUMsSUFBSSxLQUFLTDtBQUM1QyIsInNvdXJjZXMiOlsid2VicGFjazovL2dpZnQtd2lzaGxpc3QvLi9hcHAvbG9nb3V0L3JvdXRlLnRzPzJiNTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclN1cGFiYXNlRm9yQWN0aW9ucyB9IGZyb20gXCJAL2xpYi9zdXBhYmFzZS9zZXJ2ZXItYWN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QoKSB7XHJcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVTZXJ2ZXJTdXBhYmFzZUZvckFjdGlvbnMoKTtcclxuXHJcbiAgYXdhaXQgc3VwYWJhc2UuYXV0aC5zaWduT3V0KCk7XHJcblxyXG4gIGNvbnN0IGJhc2VVcmwgPVxyXG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0lURV9VUkwgPz8gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuXHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChuZXcgVVJMKFwiL1wiLCBiYXNlVXJsKSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImNyZWF0ZVNlcnZlclN1cGFiYXNlRm9yQWN0aW9ucyIsIlBPU1QiLCJzdXBhYmFzZSIsImF1dGgiLCJzaWduT3V0IiwiYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TSVRFX1VSTCIsInJlZGlyZWN0IiwiVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/logout/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/supabase/server-actions.ts":
/*!****************************************!*\
  !*** ./lib/supabase/server-actions.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createServerSupabaseForActions: () => (/* binding */ createServerSupabaseForActions)\n/* harmony export */ });\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var _supabase_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/ssr */ \"(rsc)/./node_modules/@supabase/ssr/dist/module/index.js\");\n// lib/supabase/server-actions.ts\n\n\nasync function createServerSupabaseForActions() {\n    const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)();\n    const supabase = (0,_supabase_ssr__WEBPACK_IMPORTED_MODULE_1__.createServerClient)(\"https://nxfxugqvaobwvqxbblrf.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54Znh1Z3F2YW9id3ZxeGJibHJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4MTIyODEsImV4cCI6MjA4MTM4ODI4MX0.PYuqA1qzem-KfekmiIIuTYrkqwwNbOYn35rJKKYqzU4\", {\n        cookies: {\n            get (name) {\n                return cookieStore.get(name)?.value ?? \"\";\n            },\n            set (name, value, options) {\n                cookieStore.set({\n                    name,\n                    value,\n                    ...options\n                });\n            },\n            remove (name, options) {\n                cookieStore.set({\n                    name,\n                    value: \"\",\n                    ...options\n                });\n            }\n        }\n    });\n    return supabase;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3VwYWJhc2Uvc2VydmVyLWFjdGlvbnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsaUNBQWlDO0FBQ007QUFDZ0M7QUFHaEUsZUFBZUU7SUFDcEIsTUFBTUMsY0FBYyxNQUFNSCxxREFBT0E7SUFFakMsTUFBTUksV0FBV0gsaUVBQWtCQSxDQUNqQ0ksMENBQW9DLEVBQ3BDQSxrTkFBeUMsRUFDekM7UUFDRUwsU0FBUztZQUNQUyxLQUFJQyxJQUFZO2dCQUNkLE9BQU9QLFlBQVlNLEdBQUcsQ0FBQ0MsT0FBT0MsU0FBUztZQUN6QztZQUNBQyxLQUFJRixJQUFZLEVBQUVDLEtBQWEsRUFBRUUsT0FBc0I7Z0JBQ3JEVixZQUFZUyxHQUFHLENBQUM7b0JBQUVGO29CQUFNQztvQkFBTyxHQUFHRSxPQUFPO2dCQUFDO1lBQzVDO1lBQ0FDLFFBQU9KLElBQVksRUFBRUcsT0FBc0I7Z0JBQ3pDVixZQUFZUyxHQUFHLENBQUM7b0JBQUVGO29CQUFNQyxPQUFPO29CQUFJLEdBQUdFLE9BQU87Z0JBQUM7WUFDaEQ7UUFDRjtJQUNGO0lBR0YsT0FBT1Q7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2dpZnQtd2lzaGxpc3QvLi9saWIvc3VwYWJhc2Uvc2VydmVyLWFjdGlvbnMudHM/YzhjYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvc3VwYWJhc2Uvc2VydmVyLWFjdGlvbnMudHNcclxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcclxuaW1wb3J0IHsgY3JlYXRlU2VydmVyQ2xpZW50LCB0eXBlIENvb2tpZU9wdGlvbnMgfSBmcm9tIFwiQHN1cGFiYXNlL3NzclwiO1xyXG5pbXBvcnQgdHlwZSB7IERhdGFiYXNlIH0gZnJvbSBcIkAvdHlwZXMvZGJcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTZXJ2ZXJTdXBhYmFzZUZvckFjdGlvbnMoKSB7XHJcbiAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcblxyXG4gIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlU2VydmVyQ2xpZW50PERhdGFiYXNlPihcclxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCEsXHJcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSEsXHJcbiAgICB7XHJcbiAgICAgIGNvb2tpZXM6IHtcclxuICAgICAgICBnZXQobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICByZXR1cm4gY29va2llU3RvcmUuZ2V0KG5hbWUpPy52YWx1ZSA/PyBcIlwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgb3B0aW9uczogQ29va2llT3B0aW9ucykge1xyXG4gICAgICAgICAgY29va2llU3RvcmUuc2V0KHsgbmFtZSwgdmFsdWUsIC4uLm9wdGlvbnMgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmUobmFtZTogc3RyaW5nLCBvcHRpb25zOiBDb29raWVPcHRpb25zKSB7XHJcbiAgICAgICAgICBjb29raWVTdG9yZS5zZXQoeyBuYW1lLCB2YWx1ZTogXCJcIiwgLi4ub3B0aW9ucyB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBzdXBhYmFzZTtcclxufVxyXG4iXSwibmFtZXMiOlsiY29va2llcyIsImNyZWF0ZVNlcnZlckNsaWVudCIsImNyZWF0ZVNlcnZlclN1cGFiYXNlRm9yQWN0aW9ucyIsImNvb2tpZVN0b3JlIiwic3VwYWJhc2UiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkiLCJnZXQiLCJuYW1lIiwidmFsdWUiLCJzZXQiLCJvcHRpb25zIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/supabase/server-actions.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tslib","vendor-chunks/iceberg-js","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Flogout%2Froute&page=%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Flogout%2Froute.ts&appDir=C%3A%5CUsers%5C%D0%9A%D0%B0%D1%80%D0%B8%D0%BD%D0%B0%5CDesktop%5Ckv_darbs%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C%D0%9A%D0%B0%D1%80%D0%B8%D0%BD%D0%B0%5CDesktop%5Ckv_darbs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();