webpackJsonp([0,3],{

/***/ 1001:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(434);


/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarService = (function () {
    function SidebarService(_http) {
        this._http = _http;
        this.sidebarHidden = false;
        this.activeJobVisible = false;
        this.addJobVisible = false;
        this.$sidebarHidden = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
    }
    SidebarService.prototype.shutSidebar = function () {
        this.$sidebarHidden.next(false);
    };
    SidebarService.prototype.openSidebar = function () {
        this.$sidebarHidden.next(true);
    };
    SidebarService.prototype.getSidebarHiddenState = function () {
        console.log('asdfoij');
        return this.$sidebarHidden;
    };
    SidebarService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SidebarService);
    return SidebarService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/sidebar.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsService = (function () {
    function SettingsService(_http) {
        this._http = _http;
        this.$jobsSettings = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]({});
    }
    SettingsService.prototype.getJobsStatusSettings = function () {
        return this.$jobsSettings;
    };
    SettingsService.prototype.setJobStatusSettings = function (jobsStatusSettingObj) {
        for (var prop in jobsStatusSettingObj) {
            if (jobsStatusSettingObj[prop] === '') {
                jobsStatusSettingObj[prop] = false;
                continue;
            }
        }
        this.$jobsSettings.next(jobsStatusSettingObj);
    };
    SettingsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SettingsService);
    return SettingsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/settings.js.map

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 433;


/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(551);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/main.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(725),
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/app.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jobs_jobs_module__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__test_test_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__(552);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__jobs_jobs_module__["a" /* JobsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/app.module.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header',
            template: __webpack_require__(726),
            styles: [__webpack_require__(717)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/header.component.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(727),
            styles: [__webpack_require__(716)]
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/test.component.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/environment.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_jobs__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddJobComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddJobComponent = (function () {
    function AddJobComponent(_activatedRoute, _router, _formBuilder, _jobsService) {
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._formBuilder = _formBuilder;
        this._jobsService = _jobsService;
    }
    AddJobComponent.prototype.ngOnInit = function () {
        console.log(this.job);
        this.jobFormGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({
            companyName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](''),
            contactName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](''),
            contactPhoneNumber: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](''),
            contactEmail: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](''),
            jobName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](''),
            jobNumber: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](''),
            jobDescription: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */](''),
            jobStatus: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormControl */]('')
        });
    };
    AddJobComponent.prototype.selectJob = function (jobId) {
        console.log('yay');
        console.log(jobId);
        this._router.navigate(['jobs/' + jobId]);
    };
    AddJobComponent.prototype.addJob = function (jobFormGroup) {
        var _this = this;
        console.log(this.jobFormGroup.controls['jobStatus'].value);
        var jobObj = {
            companyName: this.jobFormGroup.controls['companyName'].value,
            contactName: this.jobFormGroup.controls['contactName'].value,
            contactPhoneNumber: this.jobFormGroup.controls['contactPhoneNumber'].value,
            contactEmail: this.jobFormGroup.controls['contactEmail'].value,
            jobName: this.jobFormGroup.controls['jobName'].value,
            jobNumber: this.jobFormGroup.controls['jobNumber'].value,
            jobDescription: this.jobFormGroup.controls['jobDescription'].value,
            jobStatus: this.jobFormGroup.controls['jobStatus'].value
        };
        this._jobsService.addJob(jobObj).subscribe(function (job) {
            console.log(job);
            if (job.success) {
                _this.jobFormGroup.reset();
            }
            else {
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], AddJobComponent.prototype, "job", void 0);
    AddJobComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-job',
            template: __webpack_require__(728),
            styles: [__webpack_require__(718)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_jobs__["a" /* JobsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_jobs__["a" /* JobsService */]) === 'function' && _d) || Object])
    ], AddJobComponent);
    return AddJobComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/add-job.component.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settings__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_jobs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobTracker; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobTracker = (function () {
    function JobTracker(_settingsService, _jobsService, fb) {
        this._settingsService = _settingsService;
        this._jobsService = _jobsService;
        this.fb = fb;
        this.jobStatusSettings = {
            machining: true,
            quality: true,
            staging: true,
            waiting: true,
            shipping: true
        };
    }
    JobTracker.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this._settingsService.getJobsStatusSettings().subscribe(function (jobStatusSettings) {
            _this.jobStatusSettings = jobStatusSettings;
        });
        this._jobsService.getActiveJob().subscribe(function (activeJob) {
            _this.activeJob = activeJob;
        });
        this.jobStatusSettingsForm.valueChanges.subscribe(function (jobStatusSettings) {
            _this._settingsService.setJobStatusSettings(jobStatusSettings);
        });
        this.jobStatusSettingsForm.setValue({
            machining: this.jobStatusSettings.machining || true,
            quality: this.jobStatusSettings.quality || true,
            staging: this.jobStatusSettings.staging || true,
            waiting: this.jobStatusSettings.waiting || true,
            shipping: this.jobStatusSettings.shipping || true,
        });
    };
    JobTracker.prototype.createForm = function () {
        this.jobStatusSettingsForm = this.fb.group({
            machining: true,
            quality: true,
            staging: true,
            waiting: true,
            shipping: true
        });
    };
    JobTracker.prototype.removeActiveJob = function () {
        this._jobsService.removeActiveJob();
    };
    JobTracker = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'job-tracker',
            template: __webpack_require__(729),
            styles: [__webpack_require__(719)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_settings__["a" /* SettingsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_settings__["a" /* SettingsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_jobs__["a" /* JobsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_jobs__["a" /* JobsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */]) === 'function' && _c) || Object])
    ], JobTracker);
    return JobTracker;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/job-tracker.component.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jobs__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobComponent = (function () {
    function JobComponent(_jobsService) {
        this._jobsService = _jobsService;
    }
    JobComponent.prototype.ngOnInit = function () {
        this.process = this.job.process;
    };
    JobComponent.prototype.selectJob = function (jobId) {
        this._jobsService.setActiveJob(this.job);
    };
    JobComponent.prototype.changeProcess = function (processId) {
        var _this = this;
        var jobObjId = this.job._id;
        this.job.process = processId;
        this._jobsService.updateJob(this.job).subscribe(function (data) {
            _this.process = _this.job.process;
        });
        setTimeout(function () { document.getElementById('myTarget').scrollIntoView(false); }, 0);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], JobComponent.prototype, "job", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], JobComponent.prototype, "jobStatusText", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], JobComponent.prototype, "activeJob", void 0);
    JobComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'job',
            template: __webpack_require__(730),
            styles: [__webpack_require__(720)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_jobs__["a" /* JobsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_jobs__["a" /* JobsService */]) === 'function' && _a) || Object])
    ], JobComponent);
    return JobComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/job.component.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jobs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sidebar__ = __webpack_require__(175);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobsComponent = (function () {
    function JobsComponent(_jobsService, _settingsService, _sidebarService) {
        this._jobsService = _jobsService;
        this._settingsService = _settingsService;
        this._sidebarService = _sidebarService;
        this.sidebarHidden = false;
        this.jobs = [];
    }
    JobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._jobsService.getJobs().subscribe(function (jobs) {
            console.log(jobs.jobs);
            _this.jobs = jobs.jobs;
        });
        this._settingsService.getJobsStatusSettings().subscribe(function (jobStatusSettings) {
            _this.jobStatusSettings = jobStatusSettings;
        });
        this._jobsService.getActiveJob().subscribe(function (activeJob) {
            _this.activeJob = activeJob;
        });
        this._sidebarService.getSidebarHiddenState().subscribe(function (data) {
            _this.sidebarHidden = data;
        });
        this.sidebarHidden = false;
    };
    JobsComponent.prototype.changeJobStatus = function (jobStatusObj) {
        this.jobStatusSettings = jobStatusObj;
    };
    JobsComponent.prototype.setActiveJob = function (job) {
        this._jobsService.setActiveJob(job);
        setTimeout(function () { document.getElementById('myTarget').scrollIntoView(false); }, 0);
    };
    JobsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-jobs',
            template: __webpack_require__(731),
            styles: [__webpack_require__(721)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_jobs__["a" /* JobsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_jobs__["a" /* JobsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_settings__["a" /* SettingsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_settings__["a" /* SettingsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_sidebar__["a" /* SidebarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_sidebar__["a" /* SidebarService */]) === 'function' && _c) || Object])
    ], JobsComponent);
    return JobsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/jobs.component.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sidebar__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_jobs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = (function () {
    function SidebarComponent(_jobsService, _fb, _sidebarService) {
        this._jobsService = _jobsService;
        this._fb = _fb;
        this._sidebarService = _sidebarService;
        this._sidebarHidden = false;
        this.createForm();
    }
    Object.defineProperty(SidebarComponent.prototype, "sidebarHidden", {
        get: function () {
            return this._sidebarHidden;
        },
        set: function (val) {
            this._sidebarHidden = val;
        },
        enumerable: true,
        configurable: true
    });
    SidebarComponent.prototype.createForm = function () {
        this.jobForm = this._fb.group({
            companyName: '',
            jobName: '',
            contactName: '',
            contactEmail: '',
            jobId: '',
            process: ''
        });
    };
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._jobsService.getActiveJob().subscribe(function (job) {
            _this.activeJob = job;
            if (_this.activeJob) {
                _this.jobForm.setValue({
                    companyName: _this.activeJob.companyName || '',
                    jobName: _this.activeJob.jobName || '',
                    contactName: _this.activeJob.contactName || '',
                    contactEmail: _this.activeJob.contactEmail || '',
                    jobId: _this.activeJob.jobId || '',
                    process: _this.activeJob.process || ''
                });
            }
        });
        this._sidebarService.getSidebarHiddenState().subscribe(function (data) {
            _this.sidebarHidden = data;
        });
    };
    SidebarComponent.prototype.removeActiveJob = function () {
        this._jobsService.removeActiveJob();
    };
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(732),
            styles: [__webpack_require__(722)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_jobs__["a" /* JobsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_jobs__["a" /* JobsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_sidebar__["a" /* SidebarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_sidebar__["a" /* SidebarService */]) === 'function' && _c) || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/sidebar.component.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
 * pure: false makes stateful filter
 * */
var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (jobs, status) {
        if (status === undefined || jobs === undefined)
            return jobs;
        return jobs.filter(function (job) {
            return job.process == status;
        });
    };
    FilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], FilterPipe);
    return FilterPipe;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/filter.pipe.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobStatusPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
 * pure: false makes stateful filter
 * */
var JobStatusPipe = (function () {
    function JobStatusPipe() {
    }
    JobStatusPipe.prototype.transform = function (status) {
        if (status == 0) {
            return 'Staging';
        }
        else if (status == 1) {
            return 'Machining';
        }
        else if (status == 2) {
            return 'Quality';
        }
        else if (status == 3) {
            return 'Finished';
        }
        else if (status == 4) {
            return 'Shipped';
        }
        else if (status == 5) {
            return 'Removed';
        }
    };
    JobStatusPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'jobStatus',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], JobStatusPipe);
    return JobStatusPipe;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/job-status.pipe.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_scroll_to__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_scroll_to___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_scroll_to__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_add_job_add_job_component__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_jobs_jobs_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_job_job_component__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__filter_pipe__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__job_status_pipe__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_jobs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_settings__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_sidebar__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_sidebar_sidebar_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_job_tracker_job_tracker_component__ = __webpack_require__(556);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var JobsModule = (function () {
    function JobsModule() {
    }
    JobsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_scroll_to__["ScrollToModule"].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__components_job_job_component__["a" /* JobComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_add_job_add_job_component__["a" /* AddJobComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_jobs_jobs_component__["a" /* JobsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_job_tracker_job_tracker_component__["a" /* JobTracker */],
                __WEBPACK_IMPORTED_MODULE_7__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_8__job_status_pipe__["a" /* JobStatusPipe */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_jobs__["a" /* JobsService */],
                __WEBPACK_IMPORTED_MODULE_10__services_settings__["a" /* SettingsService */],
                __WEBPACK_IMPORTED_MODULE_11__services_sidebar__["a" /* SidebarService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__components_jobs_jobs_component__["a" /* JobsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_job_job_component__["a" /* JobComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_job_tracker_job_tracker_component__["a" /* JobTracker */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], JobsModule);
    return JobsModule;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/jobs.module.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1000);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/polyfills.js.map

/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, ".navbar-logo {\n  width: 250px;\n  margin-top: -10px; }\n\n.omni-search {\n  width: 40%;\n  display: inline-block;\n  float: left;\n  margin-top: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, ".active-job {\n  margin-top: 15px; }\n\n.danger {\n  color: #840000;\n  cursor: pointer; }\n\n.job-tracker {\n  margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, ".job.active {\n  background-color: #43bea1 !important;\n  border: black !important;\n  box-shadow: 3px 3px 5px 6px #ccc !important; }\n\n.job .more-info {\n  width: 100%;\n  margin-top: 20px; }\n\n.job .card {\n  padding: 9px;\n  margin-top: -38px;\n  border-radius: 3px; }\n\n.job.alert-info {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 3px;\n  background: #fff;\n  border: none; }\n\n.job .sub-card {\n  background: linear-gradient(60deg, #66bb6a, #43a047);\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n  margin: 0;\n  width: 100%; }\n\n.job .pull-right {\n  color: white; }\n\n.job .label-info {\n  background-color: white;\n  color: #51ab55;\n  padding-left: 0px;\n  font-weight: 100; }\n  .job .label-info .description {\n    color: #999999; }\n\n.job hr {\n  border-top-color: #efeaea; }\n\n.job .updated {\n  line-height: 22px;\n  color: #999999;\n  font-size: 12px; }\n\n.job .glyphicon-refresh {\n  margin-right: 8px; }\n\n.body {\n  background-color: #eeeeee !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, "#right-nav {\n  position: fixed; }\n\n.job-wrapper {\n  cursor: pointer;\n  margin-top: 20px; }\n\n.caption {\n  position: relative; }\n  .caption .add-job {\n    position: absolute;\n    right: 10px; }\n\n.checkbox {\n  margin-top: 23px;\n  margin-bottom: 29px; }\n  .checkbox span {\n    font-size: 18px; }\n  .checkbox input {\n    margin-right: 20px;\n    display: block;\n    cursor: pointer; }\n\n.line-through {\n  text-decoration: line-through; }\n\n.body {\n  background-color: #eeeeee !important; }\n\n.row.machining {\n  background-color: rgba(82, 172, 86, 0.16);\n  border: 1px solid grey; }\n\n.row.staging {\n  background-color: rgba(11, 179, 200, 0.18);\n  border: 1px solid grey; }\n\n.row.quality {\n  background-color: rgba(158, 55, 180, 0.22);\n  border: 1px solid grey; }\n\n.row.shipping {\n  background-color: rgba(253, 154, 20, 0.15);\n  border: 1px solid grey; }\n\n.row.waiting {\n  background-color: rgba(234, 70, 66, 0.12);\n  border: 1px solid grey; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// imports


// module
exports.push([module.i, ".sidebar {\n  position: fixed;\n  right: 0;\n  height: 100%;\n  width: 365px;\n  padding: 20px;\n  background-color: #f8f8f8;\n  border: 1px solid #3d3d3f;\n  border-top: 0;\n  border-right: 0;\n  margin-top: -2px; }\n  .sidebar .btn-group {\n    float: right;\n    width: 100%; }\n    .sidebar .btn-group button {\n      width: 50%;\n      border-radius: 0px; }\n  .sidebar .body {\n    background-color: #f8f8f8; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "<header></header>\r\n<app-jobs></app-jobs>"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"./assets/long-logo.png\" class=\"img-responsive navbar-logo\">\r\n      </a>\r\n    </div>\r\n    <input class=\"form-control omni-search\" placeholder=\"Search\">\r\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"active\"><a href=\"/\">Tool List</a></li>\r\n        <li><a href=\"/add-tool\">Add Tool</a></li>\r\n        <li><a href=\"/my-crib\">My Crib</a></li>\r\n        <li><a href=\"/view-operators\">View Operators</a></li>\r\n        <li><a href=\"/my-account\">My Account</a></li>\r\n\r\n        <li>\r\n          <a href=\"/job-app\">View Jobs</a>\r\n        </li>\r\n      </ul>\r\n    </div><!--/.nav-collapse -->\r\n  </div><!--/.container-fluid -->\r\n</nav>"

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n"

/***/ }),

/***/ 728:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 col-md-offset-4\">\r\n        <form [formGroup]=\"jobFormGroup\" (ngSubmit)=\"addJob(jobFormGroup)\">\r\n            <h3>Add Job</h3>\r\n            <div class=\"form-group\">\r\n                <label>Company Name</label>\r\n                <input class=\"form-control\" formControlName=\"companyName\" placeholder=\"Company Name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Contact Name</label>\r\n                <input class=\"form-control\" formControlName=\"contactName\" placeholder=\"Contact Name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Contact Phone Number</label>\r\n                <input class=\"form-control\" formControlName=\"contactPhoneNumber\" placeholder=\"Contact Phone Number\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Contact Email</label>\r\n                <input class=\"form-control\" formControlName=\"contactEmail\" placeholder=\"Contact Email\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Job Name</label>\r\n                <input class=\"form-control\" formControlName=\"jobName\" placeholder=\"Job Name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Job Number</label>\r\n                <input class=\"form-control\" formControlName=\"jobNumber\" placeholder=\"Job Number\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Job Description</label>\r\n                <textarea class=\"form-control\" formControlName=\"jobDescription\" placeholder=\"Job Description\">\r\n\r\n                </textarea>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Job Status</label>\r\n                <select class=\"form-control\" formControlName=\"jobStatus\">\r\n                    <option></option>\r\n                    <option value=\"0\">Staging</option>\r\n                    <option value=\"1\">Machining</option>\r\n                    <option value=\"2\">Quality</option>\r\n                    <option value=\"3\">Shipping</option>\r\n                    <option value=\"4\">Complete</option>\r\n                    <option value=\"5\">Waiting</option>\r\n                </select>\r\n            </div>\r\n            <button class=\"btn btn-primary\" type=\"submit\">Add Job</button>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

module.exports = "<div class=\"row job-tracker\">\r\n    <div class=\"col-md-6\">\r\n        <form [formGroup]=\"jobStatusSettingsForm\" novalidate>\r\n            <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"machining\" formControlName=\"machining\">Machining</label>\r\n            <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"quality\" formControlName=\"quality\">Quality</label>\r\n            <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"staging\" formControlName=\"staging\">Staging</label>\r\n            <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"waiting\" formControlName=\"waiting\">Waiting</label>\r\n            <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"shipping\" formControlName=\"shipping\">Shipping</label>\r\n        </form>\r\n    </div>\r\n    <div class=\"col-md-6\" *ngIf=\"activeJob\">\r\n        <div class=\"alert alert-success active-job\" role=\"alert\">\r\n            <span class=\"sr-only\">Active Tool:</span>\r\n            <span\r\n                class=\"glyphicon glyphicon-remove pull-left danger\"\r\n                (click)=\"removeActiveJob()\">\r\n                </span>\r\n         {{activeJob.companyName}}\r\n            <span class=\"glyphicon glyphicon-arrow-right pull-right\"></span>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 730:
/***/ (function(module, exports) {

module.exports = "<div \r\n  class=\"alert alert-info job\" \r\n  (click)=\"selectJob(job.jobNumber)\"\r\n  [ngClass]=\"{'active': job == activeJob}\"\r\n  [attr.id]=\"job == activeJob ? 'myTarget' : null\">\r\n  <div class=\"row card\">\r\n    <div class=\"col-md-10 col-md-offset-1 sub-card\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 h4\">\r\n          <a class=\"pull-right\">\r\n            <div style=\"margin: 0\" class=\"h4 ng-binding\">{{job.companyName}} - {{job.jobName}}</div>\r\n          </a>\r\n          <a class=\"label label-primary ng-binding\">\r\n            #{{ job.jobId }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-6 col-md-8 col-lg-7\">\r\n          <a>\r\n            <h4>\r\n              <p></p>\r\n              <div class=\"label label-primary\">\r\n                {{ jobStatusText }}\r\n                <span style=\"margin-left: 5px\" class=\"glyphicon glyphicon-remove-sign\" title=\"MERGE BLOCKED BY CONFLICT\"></span>\r\n              </div>\r\n            </h4>\r\n          </a>\r\n        </div>\r\n        <div class=\"blur col-xs-6 col-md-4 col-lg-5 open-pr-user text-center\">\r\n          <a class=\"thumbnail pull-right\">\r\n            <span class=\"label label-default\">{{ job.contactName }}</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr/>\r\n  <select class=\"form-control\" name=\"process\" (ngModelChange)=\"changeProcess($event)\" [(ngModel)]=\"process\" scrollTo >\r\n    <option [selected]=\"!process\">Select Stage</option>\r\n    <option  [ngValue]=\"1\" [attr.selected]=\"process == 1\">Machining</option>\r\n    <option  [ngValue]=\"2\" [attr.selected]=\"process == 2\">Quality</option>\r\n    <option  [ngValue]=\"0\" [attr.selected]=\"process == 0\">Staging</option>\r\n    <option  [ngValue]=\"5\" [attr.selected]=\"process == 5\">Waiting</option>\r\n    <option  [ngValue]=\"3\" [attr.selected]=\"process == 3\">Shipped</option>\r\n  </select>\r\n  <a [href]=\"'/view-job-tooling/?jobId=' + job.jobId\" class=\"btn btn-default more-info\">More Info</a>\r\n</div>\r\n"

/***/ }),

/***/ 731:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"jobs-wrapper\">\r\n        <app-sidebar></app-sidebar>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div [ngClass]=\"{'col-md-9':sidebarHidden == true, 'col-md-12': sidebarHidden == false}\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <job-tracker></job-tracker>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"jobStatusSettings.machining\">\r\n                <div class=\"col-md-12\">\r\n                </div>\r\n                <div class=\"col-xs-12\">\r\n                    <div class=\"row machining\">\r\n                        <div class=\"job-wrapper machining\"\r\n                             *ngFor=\"let job of jobs | filter: 1\"\r\n                             [ngClass]=\"{'col-md-4':sidebarHidden == true, 'col-md-3': sidebarHidden == false}\">\r\n                            <job\r\n                                [job]=\"job\"\r\n                                [activeJob]=\"activeJob\"\r\n                                [jobStatusText]=\"'Machining'\">\r\n                            </job>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf=\"jobStatusSettings.staging\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Staging</h3>\r\n                </div>\r\n                <div class=\"col-xs-12 col-lg-12\">\r\n                    <div class=\"row staging\">\r\n                        <div class=\"job-wrapper staging\"\r\n                             *ngFor=\"let job of jobs | filter: 0\"\r\n                             [ngClass]=\"{'col-md-4':sidebarHidden == true, 'col-md-3': sidebarHidden == false}\">\r\n                            <job\r\n                                [job]=\"job\"\r\n                                [jobStatusText]=\"'Staging'\"\r\n                                [activeJob]=\"activeJob\">\r\n                            </job>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf=\"jobStatusSettings.quality\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Quality</h3>\r\n                </div>\r\n                <div class=\"col-xs-12 col-lg-12\">\r\n                    <div class=\"row quality\">\r\n                        <div class=\"job-wrapper quality\"\r\n                             *ngFor=\"let job of jobs | filter: 2\"\r\n                             [ngClass]=\"{'col-md-4':sidebarHidden == true, 'col-md-3': sidebarHidden == false}\">\r\n                            <job\r\n                                [job]=\"job\"\r\n                                [jobStatusText]=\"'Quality'\"\r\n                                [activeJob]=\"activeJob\">\r\n                            </job>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf=\"jobStatusSettings.shipping\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Shipping</h3>\r\n                </div>\r\n                <div class=\"col-xs-12 col-lg-12\">\r\n                    <div class=\"row shipping\">\r\n                        <div class=\"job-wrapper shipping\"\r\n                             *ngFor=\"let job of jobs | filter: 3\"\r\n                             [ngClass]=\"{'col-md-4':sidebarHidden == true, 'col-md-3': sidebarHidden == false}\">\r\n                            <job\r\n                                [job]=\"job\"\r\n                                [jobStatusText]=\"'Shipping'\"\r\n                                [activeJob]=\"activeJob\">\r\n                            </job>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf=\"jobStatusSettings.waiting\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Waiting</h3>\r\n                </div>\r\n                <div class=\"col-xs-12 col-lg-12\">\r\n                    <div class=\"row waiting\">\r\n                        <div class=\"job-wrapper waiting\"\r\n                             *ngFor=\"let job of jobs | filter: 5\"\r\n                             [ngClass]=\"{'col-md-4':sidebarHidden == true, 'col-md-3': sidebarHidden == false}\">\r\n                            <job\r\n                                [job]=\"job\"\r\n                                [jobStatusText]=\"'Waiting'\"\r\n                                [activeJob]=\"activeJob\">\r\n                            </job>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ 732:
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\" [ngClass]=\"{'large': !hide}\" *ngIf=\"sidebarHidden\">\r\n  <div class=\"body\" [ngClass]=\"{'no-padding': hide}\">\r\n    <div class=\"wrapper\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"alert alert-success active-job\">\r\n            <button (click)=\"removeActiveJob()\" class=\"btn btn-danger\">Close</button>\r\n            <span>\r\n                {{ activeJob.companyName}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <form [formGroup]=\"jobForm\" novalidate>\r\n        <div class=\"form-group\">\r\n          <label>Company Name: </label>\r\n          <input class=\"form-control\" name=\"companyName\" formControlName=\"companyName\" disabled>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Job Name: </label>\r\n          <input class=\"form-control\" name=\"jobName\" formControlName=\"jobName\" disabled>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Contact Name: </label>\r\n          <input class=\"form-control\" name=\"contactName\" formControlName=\"contactName\" disabled>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Contact Email: </label>\r\n          <input class=\"form-control\" name=\"contactEmail\" formControlName=\"contactEmail\" disabled>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Job Id: </label>\r\n          <input class=\"form-control\" type=\"number\" name=\"jobId\" formControlName=\"jobId\" disabled>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Process</label>\r\n          <select name=\"process\" class=\"form-control\" formControlName=\"process\" disabled>\r\n              <option value=\"\">Select Stage</option>\r\n              <option value=\"1\">Machining</option>\r\n              <option value=\"2\">Quality</option>\r\n              <option value=\"0\">Staging</option>\r\n              <option value=\"5\">Waiting</option>\r\n              <option value=\"3\">Shipped</option>\r\n            </select>\r\n        </div>\r\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Update\" disabled>\r\n      </form>\r\n</div>\r\n</div>"

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobsService = (function () {
    function JobsService(_http, _sidebarService) {
        this._http = _http;
        this._sidebarService = _sidebarService;
        this.$currentJob = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"]("");
    }
    JobsService.prototype.addJob = function (job) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/jobs/add-job', job, { headers: headers }) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json().error || 'Server error'); }); //...
    };
    JobsService.prototype.getJobs = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.get('/api/v1/jobs', { headers: headers, withCredentials: true }).map(function (res) { return res.json(); });
        //  return this._http.get('http://localhost:8080/jobs', {headers: headers}).map((res: Response) => { return res.json()});
    };
    JobsService.prototype.updateJob = function (job) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/v1/job', job, { headers: headers }) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json().error || 'Server error'); }); //...
    };
    JobsService.prototype.setActiveJob = function (job) {
        this.currentJob = job;
        this._sidebarService.openSidebar();
        this.$currentJob.next(job);
    };
    JobsService.prototype.getActiveJob = function () {
        return this.$currentJob;
    };
    JobsService.prototype.removeActiveJob = function () {
        this.currentJob = null;
        this.$currentJob.next(this.currentJob);
        this._sidebarService.shutSidebar();
    };
    JobsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__sidebar__["a" /* SidebarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__sidebar__["a" /* SidebarService */]) === 'function' && _b) || Object])
    ], JobsService);
    return JobsService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/jobs.js.map

/***/ })

},[1001]);
//# sourceMappingURL=main.bundle.js.map