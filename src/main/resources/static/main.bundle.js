webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var layout_component_1 = __webpack_require__("./src/app/layout/layout.component.ts");
var appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        component: layout_component_1.LayoutComponent
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                layout_component_1.LayoutComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(appRoutes, { useHash: true }),
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/layout/layout.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  margin-left: 300px;\n  -webkit-transition: margin-left 0.2s ease-in-out;\n  transition: margin-left 0.2s ease-in-out;\n\n  background: none;\n}\n\nmain, .container-fluid {\n  min-height: 94vh;\n}\n\n#hamburger-open {\n  display: none;\n}\n\n#hamburger-open, #hamburger-close {\n  background-color: #041D2D;\n  padding: 7px;\n  -webkit-box-shadow: inset 0 0 7px #000000;\n          box-shadow: inset 0 0 7px #000000;\n  border-radius: 3px;\n}\n\n.wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  /*ทำให้เวลา ยืด หด หน้าจอ จะทำให้ความสูงของ sidebar & content ยืดหด ได้อัตโนมัต*/\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n\n#nav-header-band {\n  min-width: 300px;\n  max-width: 300px;\n  -webkit-transition: margin-left 0.2s ease-in-out;\n  transition: margin-left 0.2s ease-in-out;\n}\n\n#sidebar {\n  min-width: 300px;\n  max-width: 300px;\n  min-height: 94vh;\n\n  background-color: #f8f9fa;\n  color: #163143;\n  -webkit-transition: margin-left 0.2s ease-in-out;\n  transition: margin-left 0.2s ease-in-out;\n  border-right: 1px solid #e2e3e5;\n  position: fixed;\n  z-index: 2000 !important;\n}\n\n#sidebar.active, #nav-header-band.active {\n  margin-left: -300px;\n}\n\n#nav-header {\n  padding: 5px 20px 5px 20px;\n  background-color: #163143;\n  color: white;\n  min-height: 6vh;\n}\n\n.logo {\n  width: 50px;\n  height: 50px;\n}\n\n.navbar-brand span:nth-child(1) {\n  display: block;\n  float: left;\n  width: 30%;\n}\n\n.navbar-brand span:nth-child(2) {\n  display: block;\n  float: left;\n  font-size: 0.8em;\n  width: 60%;\n}\n\n#nav-header-band {\n  width: 280px;\n}\n\n#hamburger {\n  font-size: 16px;\n}\n\na, a:hover, a:focus {\n  color: inherit;\n  text-decoration: none;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n\na[data-toggle=\"collapse\"] {\n  position: relative;\n}\n\na[aria-expanded=\"false\"]::after, a[aria-expanded=\"true\"]::after {\n  content: '\\f104';\n  /*display: block;*/\n  position: absolute;\n  /*right: 20px;*/\n  right: 10px;\n  font-family: FontAwesome;\n  font-weight: bold;\n  font-size: 0.8em;\n  padding-left: 3px;\n}\n\na[aria-expanded=\"true\"]::after {\n  content: '\\f107';\n  font-weight: bold;\n}\n\n#sidebar ul li a {\n  padding: 10px 10px 10px 15px;\n  font-size: 0.9em;\n  display: block;\n}\n\n#sidebar ul li a:hover {\n  color: #163143;\n  background: #E9E7D5;\n}\n\n#sidebar ul li.active > a, a[aria-expanded=\"true\"] {\n  color: #163143;\n  background: #E9E7D5;\n  border-left: 3px solid #D4273E;\n  font-weight: bolder;\n}\n\nul ul a {\n  font-size: 0.8em !important;\n  padding-left: 30px !important;\n  background: #f3f3f2;\n  overflow-wrap: break-word;\n}\n\n/*เมื่อหน้าจอย่อขนาดลงมาที่ width = 768px (Medium devices) ทำให้ sidebar หายไป (จริงๆ มัน margin ออกไป 300px)*/\n\n@media (max-width: 992px) {\n  #sidebar, #nav-header-band {\n    margin-left: -300px;\n  }\n\n  #sidebar.active, #sidebar.active {\n    margin-left: 0;\n  }\n\n  .container-fluid, .container {\n    margin-left: 0 !important;\n  }\n}\n"

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"nav-header\" class=\"navbar sticky-top navbar-expand-xs \">\n  <span id=\"nav-header-band\">\n    <a class=\"navbar-brand mr-auto\" href=\"#\">\n      <!--<span>-->\n        <!--<img class=\"logo\" src=\"assets/images/band.png\" alt=\"\">-->\n      <!--</span>-->\n      <!--<span>-->\n        <!--<strong>U</strong>niversal <strong>C</strong>overage<br>for <strong>E</strong>mergency <strong>P</strong>atients-->\n      <!--</span>-->\n      ABC\n    </a>\n  </span>\n  <span id=\"hamburger-open\" role=\"button\" class=\"fa fa-bars fa-2x mr-auto\"></span>\n  <span id=\"hamburger-close\" role=\"button\" class=\"fa fa-bars fa-2x mr-auto\"></span>\n  <ul class=\"navbar-nav px-2\" >\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\">Sign out</a>\n    </li>\n  </ul>\n</nav>\n<div class=\"wrapper\">\n  <nav id=\"sidebar\">\n    <ul class=\"list-unstyled components\">\n      <!--<li id=\"project-band\" class=\"border-bottom\">-->\n        <!--<a href=\"#\">-->\n          <!--<strong>U</strong>niversal <strong>C</strong>overage<br>for <strong>E</strong>mergency <strong>P</strong>atients-->\n        <!--</a>-->\n      <!--</li>-->\n      <li class=\"active border-bottom\"><a href=\"#\"><i class=\"fa fa-home\"></i> Home หน้าหลัก</a></li>\n      <li class=\"border-bottom\">\n        <a href=\"#submenu1\" data-toggle=\"collapse\" aria-expanded=\"false\">Pages</a>\n        <ul class=\"collapse list-unstyled\" id=\"submenu1\">\n          <li><a href=\"#\">Page</a></li>\n          <li><a href=\"#\">Page</a></li>\n          <li><a href=\"#\">Page</a></li>\n        </ul>\n      </li>\n      <li class=\"border-bottom\"><a href=\"#\">menu-เมนูทดสอบ1</a></li>\n      <li class=\"border-bottom\"><a href=\"#\">menu-เมนูทดสอบ2</a></li>\n      <li class=\"border-bottom\"><a href=\"#\">menu-เมนูทดสอบ3</a></li>\n      <li class=\"border-bottom\"><a href=\"#\">menu-เมนูทดสอบ4</a></li>\n      <li class=\"border-bottom\">\n        <a href=\"#pageSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\">รายการเมนูที่มีความยาวเกิน 1 บรรทัด ทดสอบทดสอบ</a>\n        <ul class=\"collapse list-unstyled\" id=\"pageSubmenu\">\n          <li><a href=\"#\">Page 1</a></li>\n          <li><a href=\"#\">Page 2</a></li>\n          <li><a href=\"#\">Page 3</a></li>\n        </ul>\n      </li>\n    </ul>\n  </nav>\n\n  <div class=\"container-fluid\">\n    <div class=\"d-flex justify-content-between flex-wrap align-items-center  border-bottom\">\n      <h5>/.../.../</h5>\n      <div class=\"btn-toolbar mb-2 mb-md-0\">\n        <div class=\"btn-group mr-2\">\n          <button class=\"btn btn-sm btn-outline-secondary\">Share</button>\n          <button class=\"btn btn-sm btn-outline-secondary\">Export</button>\n        </div>\n        <button class=\"btn btn-sm btn-outline-secondary dropdown-toggle\">\n          <span data-feather=\"calendar\"></span>\n          This week\n        </button>\n      </div>\n    </div>\n    <main role=\"main\">\n      <div class=\"col-xl-10 offset-xl-1\">\n        <div class=\"card-body\">\n          <h2>Collapsible Sidebar Using Bootstrap 3</h2>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n          <div class=\"line\"></div>\n\n          <h2>Lorem Ipsum Dolor</h2>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n          <div class=\"line\"></div>\n\n          <h2>Lorem Ipsum Dolor</h2>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n          <div class=\"line\"></div>\n\n          <h3>Lorem Ipsum Dolor</h3>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n        </div>\n\n        <h2>Section title</h2>\n        <div class=\"table-responsive\">\n          <table class=\"table table-striped table-sm\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Header</th>\n                <th>Header</th>\n                <th>Header</th>\n                <th>Header</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>1,001</td>\n                <td>Lorem</td>\n                <td>ipsum</td>\n                <td>dolor</td>\n                <td>sit</td>\n              </tr>\n              <tr>\n                <td>1,002</td>\n                <td>amet</td>\n                <td>consectetur</td>\n                <td>adipiscing</td>\n                <td>elit</td>\n              </tr>\n              <tr>\n                <td>1,003</td>\n                <td>Integer</td>\n                <td>nec</td>\n                <td>odio</td>\n                <td>Praesent</td>\n              </tr>\n              <tr>\n                <td>1,003</td>\n                <td>libero</td>\n                <td>Sed</td>\n                <td>cursus</td>\n                <td>ante</td>\n              </tr>\n              <tr>\n                <td>1,004</td>\n                <td>dapibus</td>\n                <td>diam</td>\n                <td>Sed</td>\n                <td>nisi</td>\n              </tr>\n              <tr>\n                <td>1,005</td>\n                <td>Nulla</td>\n                <td>quis</td>\n                <td>sem</td>\n                <td>at</td>\n              </tr>\n              <tr>\n                <td>1,006</td>\n                <td>nibh</td>\n                <td>elementum</td>\n                <td>imperdiet</td>\n                <td>Duis</td>\n              </tr>\n              <tr>\n                <td>1,007</td>\n                <td>sagittis</td>\n                <td>ipsum</td>\n                <td>Praesent</td>\n                <td>mauris</td>\n              </tr>\n              <tr>\n                <td>1,008</td>\n                <td>Fusce</td>\n                <td>nec</td>\n                <td>tellus</td>\n                <td>sed</td>\n              </tr>\n              <tr>\n                <td>1,009</td>\n                <td>augue</td>\n                <td>semper</td>\n                <td>porta</td>\n                <td>Mauris</td>\n              </tr>\n              <tr>\n                <td>1,010</td>\n                <td>massa</td>\n                <td>Vestibulum</td>\n                <td>lacinia</td>\n                <td>arcu</td>\n              </tr>\n              <tr>\n                <td>1,011</td>\n                <td>eget</td>\n                <td>nulla</td>\n                <td>Class</td>\n                <td>aptent</td>\n              </tr>\n              <tr>\n                <td>1,012</td>\n                <td>taciti</td>\n                <td>sociosqu</td>\n                <td>ad</td>\n                <td>litora</td>\n              </tr>\n              <tr>\n                <td>1,013</td>\n                <td>torquent</td>\n                <td>per</td>\n                <td>conubia</td>\n                <td>nostra</td>\n              </tr>\n              <tr>\n                <td>1,014</td>\n                <td>per</td>\n                <td>inceptos</td>\n                <td>himenaeos</td>\n                <td>Curabitur</td>\n              </tr>\n              <tr>\n                <td>1,015</td>\n                <td>sodales</td>\n                <td>ligula</td>\n                <td>in</td>\n                <td>libero</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </main>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
        console.log('.............');
    }
    LayoutComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("./src/app/layout/layout.component.html"),
            styles: [__webpack_require__("./src/app/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());
exports.LayoutComponent = LayoutComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map