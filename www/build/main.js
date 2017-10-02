webpackJsonp([0],{

/***/ 141:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 184;

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_create__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__new_list_new_list__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_list__ = __webpack_require__(254);
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
        this.posts = [];
        this.auth = false;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_6__list_list__["a" /* ListPage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_5__new_list_new_list__["a" /* NewListPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_4__create_create__["a" /* CreatePage */];
    }
    HomePage.prototype.openReg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.openCreate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__create_create__["a" /* CreatePage */]);
    };
    HomePage.prototype.doPulling = function (refresher) {
        console.log('DOPULLING', refresher.progress);
    };
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.initializeApp = function () {
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/dom/src/updootsmobile/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="lightpurple">\n      <button style="float:right;" (click)=\'openReg()\' ion-button icon-only color="lightpurple">\n        <ion-icon name="person"></ion-icon>\n      </button>\n    <ion-title><div class="title-text">updoots</div></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>  \n  <ion-tabs>\n    <ion-tab color="red" tabIcon="flame" tabTitle="Hot" [root]="tab1"></ion-tab>\n    <ion-tab tabs-ios-tab-text-color-active="red" tabIcon="time" tabTitle="New" [root]="tab2"></ion-tab>\n    <ion-tab tabs-ios-tab-text-color-active="red" tabIcon="add" tabTitle="Post" [root]="tab3"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"/Users/dom/src/updootsmobile/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_create__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api__ = __webpack_require__(78);
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
        this.http.get(__WEBPACK_IMPORTED_MODULE_5__api__["a" /* API */] + "/api/v1/message/new", options)
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
        this.http.post(__WEBPACK_IMPORTED_MODULE_5__api__["a" /* API */] + "/api/v1/doot", postParams, options)
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
        this.http.get(__WEBPACK_IMPORTED_MODULE_5__api__["a" /* API */] + "/api/v1/message/new", options)
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
            refresher.complete();
        });
    };
    NewListPage.prototype.doPulling = function (refresher) {
        console.log('DOPULLING', refresher.progress);
    };
    return NewListPage;
}());
NewListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-new-list',template:/*ion-inline-start:"/Users/dom/src/updootsmobile/src/pages/new-list/new-list.html"*/'<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingText="Pull to refresh..."\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list [virtualScroll]="posts" no-lines inset>\n    <ion-item *virtualItem="let p">\n      <div class="message">{{ p.message }}</div>\n      <div class="time">{{p.time}}</div>\n      <div class="button-container">\n        <button [ngClass]=\'{upvote : p.vote == 1, up: p.vote != 1}\' (click)="doot(p.id, 1)">🎺</button>\n        <div class="votes"><ng2-odometer [number]="p.updoots" [theme]="\'minimal\'"></ng2-odometer></div>\n        <button [ngClass]=\'{downvote : p.vote == -1, down: p.vote != -1}\'(click)="doot(p.id, 0)">💩</button>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/dom/src/updootsmobile/src/pages/new-list/new-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], NewListPage);

//# sourceMappingURL=new-list.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_create__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api__ = __webpack_require__(78);
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
    function ListPage(events, navCtrl, navParams, http, toastCtrl) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.posts = [];
        this.auth = false;
        this.events.subscribe('user:authenticated', function (eventData) {
            _this.postRequest();
        });
    }
    ListPage.prototype.postRequest = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'text/plain');
        headers.append('Authorization', '');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers, withCredentials: true });
        this.http.get(__WEBPACK_IMPORTED_MODULE_5__api__["a" /* API */] + "/api/v1/message/top", options)
            .subscribe(function (data) {
            _this.auth = true;
            _this.posts = JSON.parse(data['_body']);
            for (var i = 0; i < _this.posts.length; i++) {
                var posted = Date.parse(_this.posts[i].time);
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
            // We couldn't get posts so show an error toast
            var toast = _this.toastCtrl.create({
                message: 'There was an error retreving posts, are you logged in?',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                //this.login()
            });
            toast.present();
            _this.auth = true;
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
        this.http.post(__WEBPACK_IMPORTED_MODULE_5__api__["a" /* API */] + "/api/v1/doot", postParams, options)
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
    ListPage.prototype.openReg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
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
        this.http.get(__WEBPACK_IMPORTED_MODULE_5__api__["a" /* API */] + "/api/v1/message/top", options)
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
            var toast = _this.toastCtrl.create({
                message: 'There was an error retreving posts :(',
                duration: 3000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                //this.login()
            });
            toast.present();
            refresher.complete();
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/dom/src/updootsmobile/src/pages/list/list.html"*/'<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingText="Pull to refresh..."\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list [virtualScroll]="posts" no-lines inset>\n    <ion-item *virtualItem="let p">\n      <div class="message">{{ p.message }}</div>\n      <div class="time">{{p.time}}</div>\n      <div class="button-container">\n        <button [ngClass]=\'{upvote : p.vote == 1, up: p.vote != 1}\' (click)="doot(p.id, 1)">🎺</button>\n        <div class="votes"><ng2-odometer [number]="p.updoots" [theme]="\'minimal\'"></ng2-odometer></div>\n        <button [ngClass]=\'{downvote : p.vote == -1, down: p.vote != -1}\'(click)="doot(p.id, 0)">💩</button>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/dom/src/updootsmobile/src/pages/list/list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(260);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_odometer__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_odometer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_odometer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_create_create__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_new_list_new_list__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_list__ = __webpack_require__(254);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_create_create__["a" /* CreatePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_new_list_new_list__["a" /* NewListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_odometer__["Ng2OdometerModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_create_create__["a" /* CreatePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_new_list_new_list__["a" /* NewListPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(252);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/dom/src/updootsmobile/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/dom/src/updootsmobile/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(78);
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
    function RegisterPage(events, navCtrl, navParams, http, toastCtrl) {
        this.events = events;
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
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__api__["a" /* API */] + "/api/v1/register", postParams, options)
            .subscribe(function (data) {
            // Should now be authenticated
            _this.presentToast(null);
        }, function (error) {
            // Bad but ignore for now
            _this.presentToast(JSON.parse(error['_body']).message);
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
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__api__["a" /* API */] + "/api/v1/token", postParams, options)
            .subscribe(function (data) {
            // Tell everyone that we are now authenticated
            _this.events.publish('user:authenticated');
            _this.navCtrl.pop();
        }, function (error) {
            // Bad but ignore for now
            console.log(error);
        });
    };
    RegisterPage.prototype.presentToast = function (msg) {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: msg || 'User created... Now logging you in',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            if (!msg) {
                _this.login();
            }
        });
        toast.present();
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-register',template:/*ion-inline-start:"/Users/dom/src/updootsmobile/src/pages/register/register.html"*/'<ion-header>\n\n  <ion-navbar color="lightpurple">\n    <ion-title>login/register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>UserID (This is your pitt email)</ion-label>\n    <ion-input type="text" [(ngModel)]="userid"></ion-input>\n  </ion-item>\n\n  <div padding>\n    <button style="width:45%; float: right;" ion-button color="secondary" block (click)="register()">Register</button>\n    <button style="width:45%; position:fixed" ion-button color="secondary" block (click)="login()">Login</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dom/src/updootsmobile/src/pages/register/register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API; });
var API = 'https://updoot.us';
//# sourceMappingURL=api.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api__ = __webpack_require__(78);
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
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__api__["a" /* API */] + "/api/v1/message", postParams, options)
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-create',template:/*ion-inline-start:"/Users/dom/src/updootsmobile/src/pages/create/create.html"*/'<ion-content padding>\n  <ion-item style="background-color: white;">\n    <ion-textarea maxlength=250 cols="40" rows="6" type="text" [(ngModel)]="newpost"></ion-textarea>\n  </ion-item>\n\n  <div style="padding-top:10px;">\n    <button style="width: 40%; float:right;" ion-button color="baige" block (click)="create()">Post!</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/dom/src/updootsmobile/src/pages/create/create.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], CreatePage);

//# sourceMappingURL=create.js.map

/***/ })

},[255]);
//# sourceMappingURL=main.js.map