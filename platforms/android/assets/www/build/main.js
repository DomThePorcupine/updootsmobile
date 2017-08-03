webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_create__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_list_new_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_list__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, http, platform) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.platform = platform;
        this.splash = true;
        this.posts = [];
        this.auth = false;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_6__list_list__["a" /* ListPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_5__new_list_new_list__["a" /* NewListPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_4__create_create__["a" /* CreatePage */];
        //this.tabBarElement = document.querySelector('.tabbar');
    }
    HomePage.prototype.openReg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
        console.log("asdfasdfasdfasdfsdf");
    };
    HomePage.prototype.openCreate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__create_create__["a" /* CreatePage */]);
    };
    HomePage.prototype.doPulling = function (refresher) {
        console.log('DOPULLING', refresher.progress);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //this.tabBarElement.style.display = 'none';
        setTimeout(function () {
            _this.splash = false;
            //this.tabBarElement.style.display = 'flex';
        }, 2000);
    };
    HomePage.prototype.initializeApp = function () {
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/dom/src/updootsmobile/src/pages/home/home.html"*/'<div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n  <div class="first-text">\n      updoots\n  </div>\n</div>\n\n<ion-header>\n  <ion-navbar color="lightpurple">\n\n    <ion-buttons start>\n      <button (click)=\'openReg()\' ion-button icon-only color="royal">\n        <ion-icon name="person"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <img src="assets/imgs/trumpet.png" height="30" width="30" style="float:left;">\n    <ion-title style="font-family: \'Lobster\', cursive;">updoots</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>  \n  <ion-tabs>\n    <ion-tab color="red" tabIcon="flame" tabTitle="Hot" [root]="tab1"></ion-tab>\n    <ion-tab tabs-ios-tab-text-color-active="red" tabIcon="time" tabTitle="New" [root]="tab2"></ion-tab>\n    <ion-tab tabs-ios-tab-text-color-active="red" tabIcon="add" tabTitle="Post" [root]="tab3"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"/Users/dom/src/updootsmobile/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Platform */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_create__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewListPage = (function () {
    function NewListPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.posts = [];
        this.auth = false;
    }
    NewListPage.prototype.postRequest = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'text/plain');
        headers.append('Authorization', '');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        this.http.get("https://updoot.us/api/v1/message/new", options)
            .subscribe(function (data) {
            _this.posts = JSON.parse(data['_body']);
            for (var i = 0; i < _this.posts.length; i++) {
                var posted = Date.parse(_this.posts[i].time);
                console.log(posted);
                var curr = Date.now();
                var numHours = (Math.abs(posted - curr) / 36e5);
                if (numHours < 1) {
                    // min
                    _this.posts[i].time = (numHours * 60).toFixed(0).toString() + " min";
                }
                else if (numHours > 24) {
                    // days
                    _this.posts[i].time = (numHours / 24.0).toFixed(0).toString() + " days";
                }
                else {
                    // hours
                    _this.posts[i].time = (numHours).toFixed(0).toString() + " hrs";
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    NewListPage.prototype.doot = function (id, doot) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'text/plain');
        headers.append('Authorization', '');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        var postParams = {
            message: id,
            doot: doot
        };
        this.http.post("https://updoot.us/api/v1/doot", postParams, options)
            .subscribe(function (data) {
            // Should now be authenticated
            console.log(data['_body']);
            for (var i = 0; i < _this.posts.length; i++) {
                if (_this.posts[i].id === id) {
                    _this.posts[i].updoots = JSON.parse(data['_body']).Updoots;
                    if (doot == 1) {
                        _this.posts[i].vote = 1;
                    }
                    else {
                        _this.posts[i].vote = -1;
                    }
                }
            }
        }, function (error) {
            // Bad but ignore for now
        });
    };
    NewListPage.prototype.ionViewWillEnter = function () {
        this.postRequest();
    };
    NewListPage.prototype.openReg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
        console.log("asdfasdfasdfasdfsdf");
    };
    NewListPage.prototype.openCreate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__create_create__["a" /* CreatePage */]);
    };
    NewListPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'text/plain');
        headers.append('Authorization', '');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        this.http.get("https://updoot.us/api/v1/message/new", options)
            .subscribe(function (data) {
            _this.posts = JSON.parse(data['_body']);
            for (var i = 0; i < _this.posts.length; i++) {
                var posted = Date.parse(_this.posts[i].time);
                console.log(posted);
                var curr = Date.now();
                var numHours = (Math.abs(posted - curr) / 36e5);
                if (numHours < 1) {
                    // min
                    _this.posts[i].time = (numHours * 60).toFixed(0).toString() + " min";
                }
                else if (numHours > 24) {
                    // days
                    _this.posts[i].time = (numHours / 24.0).toFixed(0).toString() + " days";
                }
                else {
                    // hours
                    _this.posts[i].time = (numHours).toFixed(0).toString() + " hrs";
                }
            }
            refresher.complete();
        }, function (error) {
            console.log(error);
        });
    };
    NewListPage.prototype.doPulling = function (refresher) {
        console.log('DOPULLING', refresher.progress);
    };
    return NewListPage;
}());
NewListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-new-list',template:/*ion-inline-start:"/Users/dom/src/updootsmobile/src/pages/new-list/new-list.html"*/'<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingText="Pull to refresh..."\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n    <ion-list [virtualScroll]="posts" no-lines inset>\n      <ion-item *virtualItem="let p">\n        <div style="width: 80%; height:80%; float:left;">{{ p.message }}</div>\n        <div class="time">{{p.time}}</div>\n        <div class="button-container">\n          <!-- <div class="row"> -->\n          <button [ngClass]=\'{upvote : p.vote == 1, up: p.vote != 1}\'><i class="material-icons" (click)="doot(p.id, 1)">🎺</i></button>\n            <div class="votes">{{p.updoots}}</div>\n            <button [ngClass]=\'{downvote : p.vote == -1, down: p.vote != -1}\'><i class="material-icons" (click)="doot(p.id, 0)">💩</i></button>\n          <!-- </div> -->\n        </div>\n      </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/dom/src/updootsmobile/src/pages/new-list/new-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], NewListPage);

//# sourceMappingURL=new-list.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_create__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListPage = (function () {
    function ListPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.posts = [];
        this.auth = false;
    }
    ListPage.prototype.postRequest = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'text/plain');
        headers.append('Authorization', '');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        this.http.get("https://updoot.us/api/v1/message/top", options)
            .subscribe(function (data) {
            _this.posts = JSON.parse(data['_body']);
            for (var i = 0; i < _this.posts.length; i++) {
                var posted = Date.parse(_this.posts[i].time);
                console.log(posted);
                var curr = Date.now();
                var numHours = (Math.abs(posted - curr) / 36e5);
                if (numHours < 1) {
                    // min
                    _this.posts[i].time = (numHours * 60).toFixed(0).toString() + " min";
                }
                else if (numHours > 24) {
                    // days
                    _this.posts[i].time = (numHours / 24.0).toFixed(0).toString() + " days";
                }
                else {
                    // hours
                    _this.posts[i].time = (numHours).toFixed(0).toString() + " hrs";
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    ListPage.prototype.doot = function (id, doot) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'text/plain');
        headers.append('Authorization', '');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        var postParams = {
            message: id,
            doot: doot
        };
        this.http.post("https://updoot.us/api/v1/doot", postParams, options)
            .subscribe(function (data) {
            // Should now be authenticated
            console.log(data['_body']);
            for (var i = 0; i < _this.posts.length; i++) {
                if (_this.posts[i].id === id) {
                    _this.posts[i].updoots = JSON.parse(data['_body']).Updoots;
                    if (doot == 1) {
                        _this.posts[i].vote = 1;
                    }
                    else {
                        _this.posts[i].vote = -1;
                    }
                }
            }
        }, function (error) {
            // Bad but ignore for now
        });
    };
    ListPage.prototype.ionViewWillEnter = function () {
        this.postRequest();
    };
    ListPage.prototype.openReg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
        console.log("asdfasdfasdfasdfsdf");
    };
    ListPage.prototype.openCreate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__create_create__["a" /* CreatePage */]);
    };
    ListPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'text/plain');
        headers.append('Authorization', '');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        this.http.get("https://updoot.us/api/v1/message/top", options)
            .subscribe(function (data) {
            _this.posts = JSON.parse(data['_body']);
            for (var i = 0; i < _this.posts.length; i++) {
                var posted = Date.parse(_this.posts[i].time);
                console.log(posted);
                var curr = Date.now();
                var numHours = (Math.abs(posted - curr) / 36e5);
                if (numHours < 1) {
                    // min
                    _this.posts[i].time = (numHours * 60).toFixed(0).toString() + " min";
                }
                else if (numHours > 24) {
                    // days
                    _this.posts[i].time = (numHours / 24.0).toFixed(0).toString() + " days";
                }
                else {
                    // hours
                    _this.posts[i].time = (numHours).toFixed(0).toString() + " hrs";
                }
            }
            refresher.complete();
        }, function (error) {
            console.log(error);
        });
    };
    ListPage.prototype.ionViewDidLoad = function () {
        this.postRequest();
    };
    ListPage.prototype.doPulling = function (refresher) {
        console.log('DOPULLING', refresher.progress);
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/dom/src/updootsmobile/src/pages/list/list.html"*/'\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingText="Pull to refresh..."\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  \n    <ion-list [virtualScroll]="posts" no-lines inset>\n      <ion-item *virtualItem="let p">\n        <div style="width: 80%; height:80%; float:left;">{{ p.message }}</div>\n        <div class="time">{{p.time}}</div>\n        <div class="button-container">\n          <!-- <div class="row"> -->\n          <button [ngClass]=\'{upvote : p.vote == 1, up: p.vote != 1}\' (click)="doot(p.id, 1)">🎺</button>\n            <div class="votes">{{p.updoots}}</div>\n            <button [ngClass]=\'{downvote : p.vote == -1, down: p.vote != -1}\'(click)="doot(p.id, 0)">💩</button>\n          <!-- </div> -->\n        </div>\n      </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/dom/src/updootsmobile/src/pages/list/list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_create_create__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_new_list_new_list__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_list__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_create_create__["a" /* CreatePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_new_list_new_list__["a" /* NewListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_create_create__["a" /* CreatePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_new_list_new_list__["a" /* NewListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/dom/src/updootsmobile/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/dom/src/updootsmobile/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, http, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.userid = '';
        this.token = '';
    }
    RegisterPage.prototype.register = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'text/plain');
        headers.append('Authorization', '');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        var postParams = {
            userid: this.userid
        };
        this.http.post("https://updoot.us/api/v1/register", postParams, options)
            .subscribe(function (data) {
            // Should now be authenticated
            console.log(data);
            _this.presentToast();
            //this.login()
        }, function (error) {
            // Bad but ignore for now
        });
    };
    RegisterPage.prototype.login = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'text/plain');
        headers.append('Authorization', '');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        var postParams = {
            userid: this.userid
        };
        this.http.post("https://updoot.us/api/v1/token", postParams, options)
            .subscribe(function (data) {
            // Should now be 
            _this.token = JSON.parse(data['_body']).message;
            _this.navCtrl.pop();
        }, function (error) {
            // Bad but ignore for now
            console.log(error);
        });
    };
    RegisterPage.prototype.presentToast = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'User created... Now logging you in',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            _this.login();
        });
        toast.present();
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/dom/src/updootsmobile/src/pages/register/register.html"*/'<ion-header>\n\n  <ion-navbar color="lightpurple">\n    <ion-title>login/register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>UserID</ion-label>\n    <ion-input type="text" [(ngModel)]="userid"></ion-input>\n  </ion-item>\n\n  <div padding>\n    <button style="width:45%; float: right;" ion-button color="secondary" block (click)="register()">Register</button>\n    <button style="width:45%; position:fixed" ion-button color="secondary" block (click)="login()">Login</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dom/src/updootsmobile/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ToastController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreatePage = (function () {
    function CreatePage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.newpost = '';
    }
    CreatePage.prototype.create = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'text/plain');
        headers.append('Authorization', '');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        var postParams = {
            message: this.newpost
        };
        this.http.post("https://updoot.us/api/v1/message", postParams, options)
            .subscribe(function (data) {
            // Should now be authenticated
            _this.tab = _this.navCtrl.parent;
            _this.tab.select(0);
        }, function (error) {
            // Bad but ignore for now
        });
    };
    CreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreatePage');
    };
    return CreatePage;
}());
CreatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create',template:/*ion-inline-start:"/Users/dom/src/updootsmobile/src/pages/create/create.html"*/'<ion-content padding>\n  <ion-item style="background-color: white;">\n    <ion-label floating>Your awesome post</ion-label>\n    <ion-textarea maxlength=250 cols="40" rows="6" type="text" [(ngModel)]="newpost"></ion-textarea>\n  </ion-item>\n\n  <div style="padding-top:10px;">\n    <button style="width: 40%; float:right;" ion-button color="baige" block (click)="create()">Post!</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dom/src/updootsmobile/src/pages/create/create.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], CreatePage);

//# sourceMappingURL=create.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map