webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_standings_standings_component__ = __webpack_require__("../../../../../src/app/components/standings/standings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_teams_teams_component__ = __webpack_require__("../../../../../src/app/components/teams/teams.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_teampage_teampage_component__ = __webpack_require__("../../../../../src/app/components/teampage/teampage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: 'standings', pathMatch: 'full' },
    { path: 'standings', component: __WEBPACK_IMPORTED_MODULE_2__components_standings_standings_component__["a" /* StandingsComponent */] },
    { path: 'teams', component: __WEBPACK_IMPORTED_MODULE_3__components_teams_teams_component__["a" /* TeamsComponent */] },
    { path: 'teams/:team', component: __WEBPACK_IMPORTED_MODULE_4__components_teampage_teampage_component__["a" /* TeampageComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bodyContainer{\n    background-color: #eee;\n    width:100%;\n    /* padding:2.5%; */\n    margin:0;\n    padding:0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid bodyContainer\">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_layout_header_header_component__ = __webpack_require__("../../../../../src/app/components/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_layout_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_standings_standings_component__ = __webpack_require__("../../../../../src/app/components/standings/standings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_teams_teams_component__ = __webpack_require__("../../../../../src/app/components/teams/teams.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_teams_service__ = __webpack_require__("../../../../../src/app/shared/teams.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_teams_club_pipe__ = __webpack_require__("../../../../../src/app/components/teams/club.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_layout_search_search_component__ = __webpack_require__("../../../../../src/app/components/layout/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_teampage_teampage_component__ = __webpack_require__("../../../../../src/app/components/teampage/teampage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_game_game_component__ = __webpack_require__("../../../../../src/app/components/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_games_service__ = __webpack_require__("../../../../../src/app/shared/games.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_layout_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_layout_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_standings_standings_component__["a" /* StandingsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_teams_teams_component__["a" /* TeamsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_teams_club_pipe__["a" /* ClubPipe */],
                __WEBPACK_IMPORTED_MODULE_12__components_layout_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_teampage_teampage_component__["a" /* TeampageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_game_game_component__["a" /* GameComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__shared_teams_service__["a" /* TeamsService */], __WEBPACK_IMPORTED_MODULE_15__shared_games_service__["a" /* GamesService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/game/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".game{\n    display:inline-block;\n    border:1px solid #aaa;\n    width: 300px;\n    text-align: left;\n    /* height: 150px; */\n    margin:20px;\n    /* margin:auto; */\n    /* margin-bottom: 20px; */\n    background-color: white;\n}\n\n.infoLine{\n    border-bottom:1px solid #aaa;\n    height:25px;\n    padding:3px 5px 3px 5px;\n    font-size: 12px;\n}\n\n.swim{\n    float:right;\n}\n\n.teamLine{\n    padding:5px;\n    font-weight: bold;\n    height:50px;\n}\n\n.rank{\n    width:40px;\n    /* text-align: right; */\n}\n\n.teamName{\n    width:208px;\n}\n\n.score{\n    width:60px;\n    text-align: right;\n}\n\n.tableContainer{\n    padding:5px;\n}\n\n.loser{\n    color:#aaa;\n}\n.snitch{\n    float:right;\n}\n\nh3{\n    color: #777;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let event of events\">\n    <h2>{{event.event}}</h2>\n    <h3>{{event.gameDate | date}}</h3>\n    <span *ngFor = \"let game of games\">\n        <div class=\"game\" *ngIf=\"game.event === event.event\">\n            <div class=\"infoLine\">\n                <span class=\"time\">\n                    {{game.gameTime}}\n                </span>\n                <span class=\"swim\">\n                    {{game.swim}}\n                </span>\n            </div>\n            <div class=\"tableContainer\">\n                <table>\n                    <tr class=\"teamLine\" [ngClass]=\"{loser:game.score2 > game.score1}\">\n                        <td class=\"rank\">\n                            {{game.rank1}}\n                        </td>\n                        <td class=\"teamName\">\n                            {{game.team1}}\n                        </td>\n                        <td class=\"score\">\n                            {{game.score1}}\n                            <span *ngIf=\"game.doubleOvertimeSnitch === 1\" class=\"snitch\">!</span>\n                            <span *ngIf=\"game.overtimeSnitch === 1\" class=\"snitch\">^</span>\n                            <span *ngIf=\"game.snitch === 1\" class=\"snitch\">*</span>\n                        </td>\n                    </tr>\n                    <tr class=\"teamLine\" [ngClass]=\"{loser:game.score2 < game.score1}\">\n                        <td class=\"rank\">\n                            {{game.rank2}}\n                        </td>\n                        <td class=\"teamName\">\n                            {{game.team2}}\n                        </td>\n                        <td class=\"score\">\n                            {{game.score2}}\n                            <span *ngIf=\"game.doubleOvertimeSnitch === 2\" class=\"snitch\">!</span>\n                            <span *ngIf=\"game.overtimeSnitch === 2\" class=\"snitch\">^</span>\n                            <span *ngIf=\"game.snitch === 2\" class=\"snitch\">*</span>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n    </span>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_games_service__ = __webpack_require__("../../../../../src/app/shared/games.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameComponent = (function () {
    function GameComponent(gamesService, route, location) {
        this.gamesService = gamesService;
        this.route = route;
        this.location = location;
        this.teamName = this.route.snapshot.paramMap.get('team');
    }
    GameComponent.prototype.ngOnInit = function () {
        this.getEvents();
        this.getGames();
    };
    GameComponent.prototype.getEvents = function () {
        var _this = this;
        var teamName = this.route.snapshot.paramMap.get('team');
        this.gamesService.getEvents(teamName)
            .subscribe(function (arg) { return _this.events = arg; });
    };
    GameComponent.prototype.getGames = function () {
        var _this = this;
        var teamName = this.route.snapshot.paramMap.get('team');
        this.gamesService.getGames(teamName)
            .subscribe(function (arg) { return _this.games = arg; });
    };
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__("../../../../../src/app/components/game/game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_games_service__["a" /* GamesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/layout/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer{\n    color:#aaa; \n    text-align:center;\n    background-color:#eee;\n    padding-bottom: 10px;\n}\n\np{\n    margin:0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div>\n    <p>©2018 QuidStats</p>\n    <p>Michael Li</p>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/layout/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/layout/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/layout/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n    padding-left:5%;\n    padding-right:5%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" href=\"#\">QuidStats</a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-md-0\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/standings\">Standings</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/teams\">Teams</a>\n      </li>\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/events\">Events</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/games\">Games</a>\n      </li> -->\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <app-search></app-search>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/layout/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/layout/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* HeroSearch private styles */\n.search-result li {\n    border-bottom: 1px solid gray;\n    border-left: 1px solid gray;\n    border-right: 1px solid gray;\n    width:215px;\n    /* height: 30px; */\n    padding: 5px;\n    background-color: white;\n    list-style-type: none;\n    z-index: 1000;\n    }\n    \n.search-result li:hover {\n    background-color: #607D8B;\n}\n    \n.search-result li a {\n    color: #888;\n    display: block;\n    text-decoration: none;\n}\n    \n.search-result li a:hover {\n    color: white;\n}\n.search-result li a:active {\n    color: white;\n}\n    \nul.search-result {\n    margin-top: 0;\n    padding-left: 0;\n    position: absolute;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/layout/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n   \n  <input input class=\"form-control mr-sm-2\" type=\"search\" \n  placeholder=\"Search\" #searchBox id=\"search-box\" \n  (keyup)=\"search(searchBox.value)\" />\n  \n  <ul class=\"search-result\">\n    <li *ngFor=\"let team of teams$ | async\" >\n      <a href=\"/teams/{{team.name}}\">\n        {{team.name}}\n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/layout/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_teams_service__ = __webpack_require__("../../../../../src/app/shared/teams.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = (function () {
    function SearchComponent(teamsService) {
        this.teamsService = teamsService;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    // Push a search term into the observable stream.
    SearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teams$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* debounceTime */])(300), 
        // ignore new term if same as previous term
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* distinctUntilChanged */])(), 
        // switch to new search observable each time the term changes
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* switchMap */])(function (term) { return _this.teamsService.searchTeams(term); }));
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/components/layout/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/layout/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_teams_service__["a" /* TeamsService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/standings/standings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tableContainer{\n    width: 95%;\n    background-color: white;\n    margin:auto;\n    /* margin-top: 2.5%; */\n    font-size: 12px;\n    padding-top:20px;\n    padding-left:2.5%;\n    padding-right:2.5%;\n    padding-bottom: 20px;\n}\n\ntable{\n    margin:auto;\n    font-size: 12px;\n    margin-top: 20px;\n}\n\nh1{\n    margin-bottom: 20px;\n}\n\ntd, th{\n    text-align: right;\n    border:none;\n    border-bottom: none;\n}\n\n.rank{\n    font-weight: bold;\n    width:30px\n}\n\n.name{\n    text-align: left;\n    width:230px;\n    font-weight:bold;\n}\n\n.record{\n    text-align: center;\n    white-space: nowrap ;\n}\n\ntd:nth-child(1), td:nth-child(2), td:nth-child(4), \ntd:nth-child(7), td:nth-child(8){\n    border-right:2px solid #ddd;\n}\n\n.paginationContainer{\n    text-align: right;\n    /* margin-right:5%; */\n}\n\nbutton, .btn-group{\n    margin-top:10px;\n    color: black;\n}\n\n.cactive{\n    color: white !important;\n    background-color: #868E96;\n}\n\n.cutoff{\n    border-bottom: 3px solid black;\n}\n\n.glossary{\n    border:2px solid #ddd;\n    border-radius: 3px;\n    padding:10px;\n    overflow-x: scroll;\n}\n\n.container-fluid{\n    padding:2.5%;\n}\n\nth {\n    cursor: row-resize;\n    white-space: nowrap;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/standings/standings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container-fluid\">\n  <div class=\"tableContainer\">\n    <!-- HEADER -->\n    <h1>Standings</h1>\n\n    <!-- BUTTONS -->\n    <div class=\"btn-group btn-group-sm\">\n      <a (click)=\"onClickDiv('All')\" class=\"btn btn-outline-secondary\" \n      [ngClass]=\"{'cactive' : division === 'All','disabled' : alb === 'atlarge'}\" \n      >All</a>\n      <a (click)=\"onClickDiv('College')\" class=\"btn btn-outline-secondary\" [ngClass]=\"{'cactive' : division === 'College'}\">College</a>\n      <a (click)=\"onClickDiv('Adult Community')\" class=\"btn btn-outline-secondary\" [ngClass]=\"{'cactive' : division === 'Adult Community'}\">Club</a>\n    </div>\n\n    <div class=\"btn-group btn-group-sm\">\n      <a (click)=\"onClickAlb('general')\" class=\"btn btn-outline-secondary\" [ngClass]=\"{'cactive' : alb === 'general'}\">General</a>\n      <a (click)=\"onClickAlb('atlarge')\" class=\"btn btn-outline-secondary\" [ngClass]=\"{'cactive' : alb === 'atlarge'}\">At Large</a>\n    </div>\n\n    <!-- REGION DROPDOWN -->\n    <button class=\"btn btn-sm btn-outline-secondary dropdown-toggle\" type=\"button\" \n    id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" \n    aria-expanded=\"false\" [ngClass]=\"{'disabled' : alb === 'atlarge'}\">\n      <span *ngIf = \"region === 'All'\">Region</span>\n      <span *ngIf = \"region !== 'All'\">{{region}}</span>\n    </button>\n\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n      <a (click)=\"onClickReg('All')\" class=\"dropdown-item\">All</a>\n      <a (click)=\"onClickReg('Great Lakes')\" class=\"dropdown-item\">Great Lakes</a>\n      <a (click)=\"onClickReg('Mid-Atlantic')\" class=\"dropdown-item\">Mid-Atlantic</a>\n      <a (click)=\"onClickReg('Midwest')\" class=\"dropdown-item\">Midwest</a>\n      <a (click)=\"onClickReg('Northeast')\" class=\"dropdown-item\">Northeast</a>\n      <a (click)=\"onClickReg('Northwest')\" class=\"dropdown-item\">Northwest</a>\n      <a (click)=\"onClickReg('South')\" class=\"dropdown-item\">South</a>\n      <a (click)=\"onClickReg('Southwest')\" class=\"dropdown-item\">Southwest</a>\n      <a (click)=\"onClickReg('West')\" class=\"dropdown-item\">West</a>\n    </div>\n\n    <!-- Glossary -->\n    <button class=\"btn btn-sm btn-outline-secondary\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n      Glossary\n    </button>\n    <div class=\"collapse\" id=\"collapseExample\">\n      <div class=\"glossary\">\n        <p>W = Wins</p>\n        <p>L = Losses</p>\n        <p>PCT = Win Percentage</p>\n        <p>QPPG = Average Quaffle Points Per Game</p>\n        <p>OQPPG = Average Opponents Quaffle Points Per Game</p>\n        <p>QPDIFF = Average Quaffle Point Differential</p>\n        <p>CatchPCT = Snitch Catch Percentage (includes catches leading to overtime and double overtime)</p>\n        <img src=\"../../assets/images/SOS.png\" /><br />\n        <img style=\"padding-top:10px; padding-bottom:10px;\"src=\"~/../../assets/images/SWIM.png\" /><br />\n        <img src=\"~../../assets/images/PERF.png\" />\n      </div>\n    </div>\n\n\n    <!-- TABLE HEADERS -->\n    <table class = \"table table-sm table-responsive-md table-striped table-hover\">\n      <thead>\n        <th (click)=\"onClickSort('perf')\">#<i class=\"fas fa-sort\"></i></th>\n        <th (click)=\"onClickSort('teamName')\"></th>\n        <th class=\"record\"><span (click)=\"onClickSort('w')\">W</span>-<span (click)=\"onClickSort('l')\">L</span><i class=\"fas fa-sort\"></i></th>\n        <th (click)=\"onClickSort('wpct')\">PCT <i class=\"fas fa-sort\"></i></th>\n        <th (click)=\"onClickSort('qppg')\">QPPG<i class=\"fas fa-sort\"></i></th>\n        <th (click)=\"onClickSort('oqppg')\">OQPPG<i class=\"fas fa-sort\"></i></th>\n        <th (click)=\"onClickSort('avgdiff')\">QPDiff<i class=\"fas fa-sort\"></i></th>\n        <th (click)=\"onClickSort('catchpct')\">SnPCT<i class=\"fas fa-sort\"></i></th>\n        <th (click)=\"onClickSort('swim')\">SWIM<i class=\"fas fa-sort\"></i></th>\n        <th (click)=\"onClickSort('sos')\">SOS<i class=\"fas fa-sort\"></i></th>\n        <th (click)=\"onClickSort('perf')\">Perf<i class=\"fas fa-sort\"></i></th>\n      </thead>\n\n      <!-- STANDINGS BODY -->\n      <tbody>\n        <tr [ngClass] = \"{'cutoff': alb ==='atlarge' && ((team.albRank === 16 && team.division === 'College') \n        || (team.albRank === 11 && team.division === 'Adult Community'))}\" \n        *ngFor=\"let team of teams | paginate: { itemsPerPage: 25, currentPage: p }; let i = index\">\n          <td class=\"rank\">{{i+1}}</td>\n          <td class=\"name\">\n            <a href = 'teams/{{team.teamName}}'>{{team.teamName}}</a>\n          </td>\n\n          <td class=\"record\">{{team.w}}-{{team.l}}</td>\n          <td>{{team.wpct | number:'1.2-2'}}</td>\n          <td>{{team.qppg | number:'1.2-2'}}</td>\n          <td>{{team.oqppg | number:'1.2-2'}}</td>\n          <td>{{team.avgdiff | number:'1.2-2'}}</td>\n          <td>{{team.catchpct | number:'1.2-2'}}</td>\n          <td>{{team.swim | number:'1.2-2'}}</td>\n          <td>{{team.sos | number:'1.2-2'}}</td>\n          <td>{{team.perf | number:'1.2-2'}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"paginationContainer\">\n      <pagination-controls (pageChange)=\"p = $event\" maxSize=\"5\" autohide=\"true\"></pagination-controls>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/standings/standings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_teams_service__ = __webpack_require__("../../../../../src/app/shared/teams.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StandingsComponent = (function () {
    function StandingsComponent(teamsService) {
        this.teamsService = teamsService;
        this.division = 'All';
        this.region = 'All';
        this.alb = 'general';
        this.sort = 'perf';
        this.cend = 'DESC';
    }
    StandingsComponent.prototype.ngOnInit = function () {
        this.getTeams();
    };
    StandingsComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamsService.getStandings(this.alb, this.division, this.region, this.sort, this.cend)
            .subscribe(function (teams) { return _this.teams = teams; });
    };
    StandingsComponent.prototype.onClickDiv = function (division) {
        this.division = division;
        this.getTeams();
    };
    StandingsComponent.prototype.onClickReg = function (region) {
        this.region = region;
        this.getTeams();
    };
    StandingsComponent.prototype.onClickAlb = function (alb) {
        this.alb = alb;
        this.region = 'All';
        if (this.alb === 'atlarge' && this.division === 'All') {
            this.division = 'College';
        }
        this.getTeams();
    };
    StandingsComponent.prototype.onClickSort = function (sort) {
        if (sort === this.sort) {
            this.switchCend();
        }
        this.sort = sort;
        this.getTeams();
    };
    StandingsComponent.prototype.switchCend = function () {
        if (this.cend === 'ASC') {
            this.cend = 'DESC';
        }
        else {
            this.cend = 'ASC';
        }
    };
    StandingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-standings',
            template: __webpack_require__("../../../../../src/app/components/standings/standings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/standings/standings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_teams_service__["a" /* TeamsService */]])
    ], StandingsComponent);
    return StandingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/teampage/teampage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table{\n    text-align: left;\n    display:inline-block;\n    width:165px;\n    margin-right:20px;\n    margin-left:20px;\n}\n\ntr, th, td{\n    border:none;\n}\n\ntd {\n    text-align: right;\n}\n\nth{\n    /* border-right: 1px solid #aaa; */\n}\n\n.stats{\n    text-align: center;\n    background-color:white;\n}\n\n.rank{\n    margin-right:40px;\n    margin-left:40px;\n    width: 125px;\n}\n\nh1 {\n    font-size:300%;\n}\n\n.teaminfo{\n    width:100% !important;\n}\n\n.teamname{\n    margin: 20px;\n    /* margin-bottom: 50px; */\n}\n\n.statsContainer{\n    margin:20px;\n    margin-bottom:0px;\n}\n\n.games{\n    background-color: #eee;\n    width: 100%;\n    padding: 2.5%;\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/teampage/teampage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"teamInfo\" *ngFor=\"let data of team\">\n\n  <div class=\"stats\">\n\n    <h1 class=\"teamname\">{{data.teamName}}</h1>\n      <!-- RECORD -->\n    <div class=\"statsContainer\">\n    <!-- RANKING -->\n      <div class=\"align-top rank\" style=\"display:inline-block\">\n        <h3><b>Rank</b></h3>\n        <h1>#{{data.genRank}}</h1>\n      </div>\n      <div class=\"align-top rank\" style=\"display:inline-block\">\n        <h3><b>Div-Rank</b></h3>\n        <h1>#{{data.divRank}}</h1>\n      </div>\n      <table class=\"table table-sm\">  \n        <tr>\n          <th>Record</th>\n          <td>{{data.w}}-{{data.l}}</td>\n        </tr>\n        <tr>\n          <th>PCT</th>\n          <td>{{data.wpct | number: '1.2-2'}}</td>\n        </tr>\n        <tr>\n          <th>SR Record</th>\n          <td>{{data.srW}}-{{data.srL}}</td>\n        </tr>\n        <tr>\n          <th>SR PCT</th>\n          <td>{{data.srPCT | number: '1.2-2'}}</td>\n        </tr>\n      </table>\n\n      <!-- STATS -->\n      <table class=\"table table-sm\">\n        <tr>\n          <th>QPPG</th>\n          <td>{{data.qppg | number: '1.2-2'}}</td>\n        </tr>\n        <tr>\n          <th>OQPPG</th>\n          <td>{{data.oqppg | number: '1.2-2'}}</td>\n        </tr>\n        <tr>\n          <th>QP Diff</th>\n          <td>{{data.avgdiff | number: '1.2-2'}}</td>\n        </tr>\n        <tr>\n          <th>Catch PCT</th>\n          <td>{{data.catchpct | number: '1.2-2'}}</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n\n<div class=\"games\">\n    <app-game></app-game>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/teampage/teampage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeampageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_teams_service__ = __webpack_require__("../../../../../src/app/shared/teams.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeampageComponent = (function () {
    function TeampageComponent(route, location, teamsService) {
        this.route = route;
        this.location = location;
        this.teamsService = teamsService;
    }
    TeampageComponent.prototype.ngOnInit = function () {
        this.getTeam();
    };
    TeampageComponent.prototype.getTeam = function () {
        var _this = this;
        var teamName = this.route.snapshot.paramMap.get('team');
        this.teamsService.getTeam(teamName)
            .subscribe(function (team) { return _this.team = team; });
    };
    TeampageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-teampage',
            template: __webpack_require__("../../../../../src/app/components/teampage/teampage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/teampage/teampage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_3__shared_teams_service__["a" /* TeamsService */]])
    ], TeampageComponent);
    return TeampageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/teams/club.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ClubPipe = (function () {
    function ClubPipe() {
    }
    ClubPipe.prototype.transform = function (value, args) {
        if (value === 'Adult Community') {
            return 'Club';
        }
        return value;
    };
    ClubPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'club'
        })
    ], ClubPipe);
    return ClubPipe;
}());



/***/ }),

/***/ "../../../../../src/app/components/teams/teams.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tableContainer{\n    width: 95%;\n    background-color: white;\n    margin:auto;\n    font-size: 12px;\n    padding-top:20px;\n    padding-left:2.5%;\n    padding-right:2.5%;\n    padding-bottom: 20px;\n}\n\ntable{\n    margin:auto;\n    font-size: 12px;\n    margin-top: 20px;\n}\n\n.name{\n    /* width:200px; */\n    font-weight: bold;\n}\n\n.paginationContainer{\n    text-align: right;\n}\n\ntr, th, td {\n    border:none;\n}\n\n.container-fluid{\n    padding:2.5%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/teams/teams.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=container-fluid>\n  <div class=\"tableContainer\">\n    <h2>Teams</h2>\n    <table class=\"table table-striped table-hover table-sm table-responsive-sm\">\n      <thead>\n        <th>Team</th>\n        <th>Region</th>\n        <th>Division</th>\n        <th>Location</th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let team of teams| paginate: { itemsPerPage: 25, currentPage: p }\">\n          <td class=\"name\"><a href = \"teams/{{team.name}}\">{{team.name}}</a></td>\n          <td>{{team.region}}</td>\n          <td>{{team.division | club}}</td>\n          <td>{{team.location}}</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div class=\"paginationContainer\">\n        <pagination-controls (pageChange)=\"p = $event\" maxSize=\"5\" autohide=\"true\"></pagination-controls>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/teams/teams.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_teams_service__ = __webpack_require__("../../../../../src/app/shared/teams.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamsComponent = (function () {
    function TeamsComponent(teamsService) {
        this.teamsService = teamsService;
    }
    TeamsComponent.prototype.ngOnInit = function () {
        this.getTeams();
    };
    TeamsComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamsService.getTeams()
            .subscribe(function (teams) { return _this.teams = teams; });
    };
    TeamsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-teams',
            template: __webpack_require__("../../../../../src/app/components/teams/teams.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/teams/teams.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_teams_service__["a" /* TeamsService */]])
    ], TeamsComponent);
    return TeamsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/games.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GamesService = (function () {
    function GamesService(http) {
        this.http = http;
        this.baseUrl = 'http://quidstatsjs-env.us-west-2.elasticbeanstalk.com/quid/';
    }
    GamesService.prototype.getGames = function (team) {
        return this.http.get(this.baseUrl + 'teams/' + team + '/games');
    };
    GamesService.prototype.getEvents = function (team) {
        return this.http.get(this.baseUrl + 'teams/' + team + '/events');
    };
    GamesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GamesService);
    return GamesService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/teams.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeamsService = (function () {
    function TeamsService(http) {
        this.http = http;
        // getStandings(atLarge: string, division: string, region: string): Observable<Team[]> {
        //   return this.http.get<Team[]>('http://localhost:8080/standings/' + atLarge + '/' + division + '/' + region );
        // }
        this.baseUrl = 'http://quidstatsjs-env.us-west-2.elasticbeanstalk.com/quid/';
    }
    TeamsService.prototype.getStandings = function (atLarge, division, region, sort, cend) {
        return this.http.get(this.baseUrl + 'standings/' + atLarge + '/' + division + '/' + region + '/' + sort + '/' + cend);
    };
    TeamsService.prototype.getTeams = function () {
        return this.http.get(this.baseUrl + 'teams');
    };
    TeamsService.prototype.getTeam = function (team) {
        return this.http.get(this.baseUrl + 'teams/' + team);
    };
    TeamsService.prototype.searchTeams = function (term) {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])([]);
        }
        return this.http.get(this.baseUrl + '/teams/search/' + term);
    };
    TeamsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TeamsService);
    return TeamsService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map