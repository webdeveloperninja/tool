webpackJsonp([0,3],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
    function JobsService(_http) {
        this._http = _http;
    }
    JobsService.prototype.addJob = function (job) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.post('http://localhost:8080/jobs/add-job', job, { headers: headers }) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); }); //...
    };
    JobsService.prototype.getJobs = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.get('/api/v1/jobs', { headers: headers }).map(function (res) { return res.json(); });
        //  return this._http.get('http://localhost:8080/jobs', {headers: headers}).map((res: Response) => { return res.json()});
    };
    JobsService.prototype.getJobById = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(id);
        return this._http.get('http://localhost:8080/jobs/single/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    JobsService.prototype.updateJob = function (job) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/v1/job', job, { headers: headers }) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || 'Server error'); }); //...
    };
    JobsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], JobsService);
    return JobsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/jobs.js.map

/***/ }),

/***/ 428:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 428;


/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(545);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/main.js.map

/***/ }),

/***/ 544:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(718),
            styles: [__webpack_require__(716)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/app.component.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jobs_jobs_module__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__test_test_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__(546);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
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

/***/ 546:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'header',
            template: __webpack_require__(719),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/header.component.js.map

/***/ }),

/***/ 547:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-test',
            template: __webpack_require__(720),
            styles: [__webpack_require__(717)]
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/test.component.js.map

/***/ }),

/***/ 548:
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

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_jobs__ = __webpack_require__(119);
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
        this.jobFormGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            companyName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */](''),
            contactName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */](''),
            contactPhoneNumber: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */](''),
            contactEmail: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */](''),
            jobName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */](''),
            jobNumber: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */](''),
            jobDescription: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */](''),
            jobStatus: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('')
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], AddJobComponent.prototype, "job", void 0);
    AddJobComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'add-job',
            template: __webpack_require__(721),
            styles: [__webpack_require__(711)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_jobs__["a" /* JobsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_jobs__["a" /* JobsService */]) === 'function' && _d) || Object])
    ], AddJobComponent);
    return AddJobComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/add-job.component.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jobs__ = __webpack_require__(119);
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
    };
    JobComponent.prototype.changeProcess = function (processId) {
        var _this = this;
        var jobObjId = this.job._id;
        this.job.process = processId;
        this._jobsService.updateJob(this.job).subscribe(function (data) {
            _this.process = _this.job.process;
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], JobComponent.prototype, "job", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], JobComponent.prototype, "jobStatusText", void 0);
    JobComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'job',
            template: __webpack_require__(722),
            styles: [__webpack_require__(712)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_jobs__["a" /* JobsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_jobs__["a" /* JobsService */]) === 'function' && _a) || Object])
    ], JobComponent);
    return JobComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/job.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jobs__ = __webpack_require__(119);
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
    function JobsComponent(_jobsService) {
        this._jobsService = _jobsService;
        this.hideSidebar = true;
        this.jobStatus = {
            machining: true,
            staging: true,
            quality: true,
            shipping: true,
            waiting: true
        };
        this.jobs = [];
    }
    JobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._jobsService.getJobs().subscribe(function (jobs) {
            console.log(jobs.jobs);
            _this.jobs = jobs.jobs;
        });
    };
    JobsComponent.prototype.jobClicked = function () {
        console.log('working');
    };
    JobsComponent.prototype.changeSidebarState = function (event) {
        this.hideSidebar = event;
        if (this.hideSidebar) {
            this.globalHideSidebar = false;
        }
    };
    JobsComponent.prototype.changeJobStatus = function (jobStatusObj) {
        this.jobStatus = jobStatusObj;
    };
    JobsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-jobs',
            template: __webpack_require__(723),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_jobs__["a" /* JobsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_jobs__["a" /* JobsService */]) === 'function' && _a) || Object])
    ], JobsComponent);
    return JobsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/jobs.component.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    function SidebarComponent() {
        this.jobTracker = false;
        this.addJob = false;
        this.hide = false;
        this.hideShowText = 'Hide';
        this.jobStatus = {
            machining: true,
            quality: true,
            staging: true,
            waiting: true,
            shipping: true
        };
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.changeJobStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.jobTracker = true;
    };
    SidebarComponent.prototype.toggleHide = function () {
        if (this.jobTracker) {
            this.toggleAddJob();
        }
        if (this.addJob) {
            this.toggleAddJob();
        }
        if (this.hide) {
            this.hide = false;
            this.hideShowText = 'Hide';
            this.addJob = false;
            this.jobTracker = true;
            this.change.emit(true);
        }
        else {
            this.hide = true;
            this.hideShowText = 'Show';
            this.change.emit(false);
        }
    };
    SidebarComponent.prototype.toggleAddJob = function () {
        if (this.jobTracker) {
            this.toggleJobTracker();
        }
        if (this.addJob) {
            this.addJob = false;
        }
        else {
            this.addJob = true;
        }
    };
    SidebarComponent.prototype.toggleJobTracker = function () {
        if (this.addJob) {
            this.toggleAddJob();
        }
        if (this.jobTracker) {
            this.jobTracker = false;
        }
        else {
            this.jobTracker = true;
        }
    };
    SidebarComponent.prototype.updateJobStatus = function () {
        this.changeJobStatus.emit(this.jobStatus);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])('changeSidebarState'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], SidebarComponent.prototype, "change", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])('changeJobStatus'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _b) || Object)
    ], SidebarComponent.prototype, "changeJobStatus", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], SidebarComponent.prototype, "hideSidebar", void 0);
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__(724),
            styles: [__webpack_require__(714)]
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/sidebar.component.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jobs__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(356);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleJobComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingleJobComponent = (function () {
    function SingleJobComponent(_jobsService, _route, fb) {
        this._jobsService = _jobsService;
        this._route = _route;
        this.fb = fb;
        this.edit = false;
        this.editSaveText = 'Edit';
        this.form = this.fb.group({
            companyName: '',
            jobStatus: '',
            contactName: '',
            contactPhoneNumber: '',
            contactEmail: '',
            jobDescription: ''
        });
    }
    SingleJobComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobId = this._route.params.subscribe(function (params) {
            _this.jobId = params['id']; // (+) converts string 'id' to a number
            _this._jobsService.getJobById(_this.jobId).subscribe(function (data) {
                _this.job = data.job;
                console.log('aosdifjosdfaij');
                _this.form.patchValue({
                    companyName: _this.job.companyName,
                    jobStatus: _this.job.jobStatus,
                    contactName: _this.job.contactName,
                    contactPhoneNumber: _this.job.contactPhoneNumber,
                    contactEmail: _this.job.contactEmail,
                    jobDescription: _this.job.jobDescription
                });
            });
        });
    };
    SingleJobComponent.prototype.toggleEdit = function () {
        if (this.edit) {
            this.edit = false;
            this.saveJob();
            this.editSaveText = 'Edit';
        }
        else {
            this.edit = true;
            this.editSaveText = 'Save';
        }
    };
    SingleJobComponent.prototype.saveJob = function () {
        console.log('job saved');
    };
    SingleJobComponent.prototype.getCSSClasses = function (status) {
        if (status == 0) {
            return 'staging';
        }
        else if (status == 1) {
            return 'machining';
        }
        else if (status == 2) {
            return 'quality';
        }
        else if (status == 3) {
            return 'shipping';
        }
        else if (status == 4) {
            return 'waiting';
        }
        else if (status == 5) {
            return 'removed';
        }
    };
    SingleJobComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-single-job',
            template: __webpack_require__(725),
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_jobs__["a" /* JobsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_jobs__["a" /* JobsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]) === 'function' && _c) || Object])
    ], SingleJobComponent);
    return SingleJobComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/single-job.component.js.map

/***/ }),

/***/ 554:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({
            name: 'filter',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], FilterPipe);
    return FilterPipe;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/filter.pipe.js.map

/***/ }),

/***/ 555:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({
            name: 'jobStatus',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], JobStatusPipe);
    return JobStatusPipe;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/job-status.pipe.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_add_job_add_job_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_jobs_jobs_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_job_job_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_single_job_single_job_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__filter_pipe__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__job_status_pipe__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_jobs__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_sidebar_sidebar_component__ = __webpack_require__(552);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__components_single_job_single_job_component__["a" /* SingleJobComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_job_job_component__["a" /* JobComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_add_job_add_job_component__["a" /* AddJobComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_jobs_jobs_component__["a" /* JobsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_8__job_status_pipe__["a" /* JobStatusPipe */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_jobs__["a" /* JobsService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__components_jobs_jobs_component__["a" /* JobsComponent */], __WEBPACK_IMPORTED_MODULE_5__components_job_job_component__["a" /* JobComponent */], __WEBPACK_IMPORTED_MODULE_6__components_single_job_single_job_component__["a" /* SingleJobComponent */], __WEBPACK_IMPORTED_MODULE_10__components_sidebar_sidebar_component__["a" /* SidebarComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], JobsModule);
    return JobsModule;
}());
//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/jobs.module.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(990);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/Robert Smith/Documents/code/toolinginventory/views/JobApp/src/polyfills.js.map

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = ".header .hello {\n  float: left; }\n\n.header .mobile-nav-admin {\n  display: none; }\n\n.header .logo {\n  max-width: 352px; }\n\n.header .navbar-header {\n  height: 83px; }\n\n.header .navbar-right {\n  margin-top: 25px; }\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = ".job .card {\n  padding: 9px;\n  margin-top: -38px;\n  border-radius: 3px; }\n\n.job.alert-info {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 3px;\n  background: #fff;\n  border: none; }\n\n.job .sub-card {\n  background: linear-gradient(60deg, #66bb6a, #43a047);\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\n  margin: 0;\n  width: 100%; }\n\n.job .pull-right {\n  color: white; }\n\n.job .label-info {\n  background-color: white;\n  color: #51ab55;\n  padding-left: 0px;\n  font-weight: 100; }\n  .job .label-info .description {\n    color: #999999; }\n\n.job hr {\n  border-top-color: #efeaea; }\n\n.job .updated {\n  line-height: 22px;\n  color: #999999;\n  font-size: 12px; }\n\n.job .glyphicon-refresh {\n  margin-right: 8px; }\n\n.body {\n  background-color: #eeeeee !important; }\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "#right-nav {\n  position: fixed; }\n\n.job-wrapper {\n  cursor: pointer;\n  margin-top: 20px; }\n\n.caption {\n  position: relative; }\n  .caption .add-job {\n    position: absolute;\n    right: 10px; }\n\n.checkbox {\n  margin-top: 23px;\n  margin-bottom: 29px; }\n  .checkbox span {\n    font-size: 18px; }\n  .checkbox input {\n    margin-right: 20px;\n    display: block;\n    cursor: pointer; }\n\n.line-through {\n  text-decoration: line-through; }\n\n.body {\n  background-color: #eeeeee !important; }\n\n.jobs-wrapper {\n  margin-top: 15rem; }\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  position: fixed;\n  right: 0;\n  z-index: 3333;\n  border-top: 1px solid rgba(0, 0, 0, 0.45);\n  border-left: 1px solid rgba(0, 0, 0, 0.45);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.45); }\n  .sidebar.large {\n    width: 355px; }\n  .sidebar .btn-group {\n    float: right;\n    width: 100%; }\n    .sidebar .btn-group button {\n      width: 50%;\n      border-radius: 0px; }\n  .sidebar .body {\n    padding: 20px;\n    padding-top: 50px;\n    background-color: #f8f8f8; }\n  .sidebar .action {\n    width: 40% !important; }\n  .sidebar .show-hide {\n    width: 20% !important; }\n  .sidebar .full-width {\n    width: 100% !important; }\n  .sidebar .no-padding {\n    padding: 0 !important; }\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = ".alert {\n  position: relative; }\n  .alert .edit {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    z-index: 1; }\n    .alert .edit .glyphicon-edit {\n      margin-left: 10px; }\n  .alert.toggle-edit .form-control {\n    display: inline-block; }\n  .alert.toggle-edit .label-toggle {\n    display: none; }\n  .alert .form-control {\n    display: none; }\n  .alert .label-toggle {\n    display: inline-block; }\n  .alert .job-number-wrap {\n    width: 102px; }\n  .alert .content-row {\n    margin-top: 35px; }\n  .alert .user-bubble {\n    display: inline-block;\n    position: relative;\n    background-color: #44bea1;\n    color: white;\n    height: 200px;\n    position: relative;\n    width: 200px;\n    border-radius: 50%;\n    text-align: center; }\n    .alert .user-bubble input {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      top: 43%; }\n    .alert .user-bubble .name {\n      height: 50%;\n      overflow: auto;\n      font-size: 36px;\n      margin: auto;\n      position: absolute;\n      top: 25%;\n      left: 0;\n      bottom: 0;\n      right: 0; }\n    .alert .user-bubble .job-number-wrap {\n      position: absolute;\n      margin: auto;\n      height: 0;\n      top: 25%;\n      left: 0;\n      bottom: 0;\n      right: 0; }\n    .alert .user-bubble .job-status {\n      bottom: 0;\n      left: 0;\n      right: 0;\n      display: block;\n      margin-bottom: 20px; }\n      .alert .user-bubble .job-status.job-status-progress {\n        padding-top: 20px;\n        padding-bottom: 15px;\n        margin-top: 57px;\n        bottom: -37px; }\n  .alert .contact .form-control {\n    width: 40%; }\n  .alert .content-box {\n    background-color: white;\n    padding: 20px;\n    border-radius: 10px; }\n    .alert .content-box h3 {\n      margin-top: 0;\n      border-bottom: 1px solid black; }\n  .alert .job-description {\n    width: 100% !important; }\n  .alert .status-form {\n    display: inline;\n    float: right;\n    margin-bottom: 0;\n    width: 260px;\n    margin-top: -7px; }\n    .alert .status-form label {\n      margin-top: 7px; }\n    .alert .status-form .form-control {\n      width: 68%; }\n\n.user-bubble.machining {\n  background: linear-gradient(60deg, #66bb6a, #43a047);\n  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2); }\n\n.user-bubble.staging {\n  background: linear-gradient(60deg, #26c6da, #00acc1) !important;\n  box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2) !important; }\n\n.user-bubble.quality {\n  background: linear-gradient(60deg, #ffa726, #fb8c00) !important;\n  box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2) !important; }\n\n.user-bubble.shipping {\n  background: linear-gradient(60deg, #ab47bc, #8e24aa) !important;\n  box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2) !important; }\n\n.user-bubble.removed {\n  background: linear-gradient(60deg, #ef5350, #e53935) !important;\n  box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2) !important; }\n\n.panel-heading {\n  color: white;\n  height: 45px; }\n  .panel-heading.machining {\n    background: linear-gradient(60deg, #66bb6a, #43a047);\n    box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2); }\n  .panel-heading.staging {\n    background: linear-gradient(60deg, #26c6da, #00acc1) !important;\n    box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2) !important; }\n  .panel-heading.quality {\n    background: linear-gradient(60deg, #ffa726, #fb8c00) !important;\n    box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2) !important; }\n  .panel-heading.shipping {\n    background: linear-gradient(60deg, #ab47bc, #8e24aa) !important;\n    box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2) !important; }\n  .panel-heading.removed {\n    background: linear-gradient(60deg, #ef5350, #e53935) !important;\n    box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2) !important; }\n  .panel-heading .status-form {\n    width: 50%; }\n    .panel-heading .status-form .label-toggle {\n      margin-top: 10px;\n      float: right; }\n    .panel-heading .status-form select {\n      float: right; }\n"

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "<header></header>\r\n<app-jobs></app-jobs>"

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "<nav class=\"header navbar navbar-default navbar-fixed-top primary-nav  new-logo-app \">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"/\">\n        <!-- Logo here -->\n        <img src=\"./assets/long-logo.png\" class=\"img-responsive logo\">\n      </a>\n    </div>\n    <div id=\"bs-example-navbar-collapse-1\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n\n        <p class=\"hello\">Hello,\n          admin from\n          Web Developer Ninja\n        </p>\n        <a class=\"btn btn-sm btn-danger\" href=\"/logout\">Log Out</a>\n        <a class=\"btn btn-sm btn-primary\" href=\"/production\">Production</a>\n\n        <div class=\"row mobile-nav-admin\">\n          <div class=\"col-md-4 col-md-offset-4\">\n            <select class=\"form-control\" onchange=\"window.location.href=this.value\">\n              <option data-icon=\"glyphicon-heart\" value=\"/\">Tool List</option>\n              <option data-icon=\"glyphicon-heart\" value=\"/add-tool\">Add Tool</option>\n              <option data-icon=\"glyphicon-heart\" value=\"/view-checkouts\">View Checkouts</option>\n              <option data-icon=\"glyphicon-heart\" value=\"/view-operators\">View Operators</option>\n              <option data-icon=\"glyphicon-heart\" value=\"/view-jobs\">View Jobs</option>\n              <option data-icon=\"glyphicon-heart\" value=\"/my-account\">My Account</option>\n              <option data-icon=\"glyphicon-heart\" value=\"/toolsCSV\">Download Tool List\n              </option><option data-icon=\"glyphicon-heart\" value=\"/checkoutsCSV\">Download Tool Usage</option>\n            </select>\n          </div>\n        </div>\n\n      </ul>\n    </div>\n    <!--/.nav-collapse -->\n  </div>\n\n  <div class=\"container-fluid admin-fixed-header-nav\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <a href=\"/my-account\" class=\"btn btn-default table-btn user-nav-btn\">My Account</a>\n        <a href=\"/toolsCSV\" class=\"btn btn-default table-btn user-nav-btn\">Download Tool List</a>\n        <a href=\"/checkoutsCSV\" class=\"btn btn-default table-btn user-nav-btn\">Download Tool Usage</a>\n      </div>\n      <div class=\"col-sm-6\">\n        <a href=\"/add-tool\" class=\"btn btn-default table-btn pull-right view-checkouts-btn\">Add Tool</a>\n        <a href=\"/my-crib\" class=\"btn table-btn btn-default pull-right view-checkouts-btn\">My Crib</a>\n        <a href=\"/view-operators\" class=\"btn btn-default table-btn pull-right view-checkouts-btn\">View Operators</a>\n        <a href=\"/view-jobs\" class=\"btn btn-default  table-btn pull-right view-checkouts-btn active\">View Jobs</a>\n        <a href=\"/\" class=\"btn btn-default pull-right table-btn view-checkouts-btn\">Tool List</a>\n      </div>\n    </div>\n  </div>\n\n</nav>"

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 col-md-offset-4\">\r\n        <form [formGroup]=\"jobFormGroup\" (ngSubmit)=\"addJob(jobFormGroup)\">\r\n            <h3>Add Job</h3>\r\n            <div class=\"form-group\">\r\n                <label>Company Name</label>\r\n                <input class=\"form-control\" formControlName=\"companyName\" placeholder=\"Company Name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Contact Name</label>\r\n                <input class=\"form-control\" formControlName=\"contactName\" placeholder=\"Contact Name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Contact Phone Number</label>\r\n                <input class=\"form-control\" formControlName=\"contactPhoneNumber\" placeholder=\"Contact Phone Number\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Contact Email</label>\r\n                <input class=\"form-control\" formControlName=\"contactEmail\" placeholder=\"Contact Email\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Job Name</label>\r\n                <input class=\"form-control\" formControlName=\"jobName\" placeholder=\"Job Name\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Job Number</label>\r\n                <input class=\"form-control\" formControlName=\"jobNumber\" placeholder=\"Job Number\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Job Description</label>\r\n                <textarea class=\"form-control\" formControlName=\"jobDescription\" placeholder=\"Job Description\">\r\n\r\n                </textarea>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Job Status</label>\r\n                <select class=\"form-control\" formControlName=\"jobStatus\">\r\n                    <option></option>\r\n                    <option value=\"0\">Staging</option>\r\n                    <option value=\"1\">Machining</option>\r\n                    <option value=\"2\">Quality</option>\r\n                    <option value=\"3\">Shipping</option>\r\n                    <option value=\"4\">Complete</option>\r\n                    <option value=\"5\">Waiting</option>\r\n                </select>\r\n            </div>\r\n            <button class=\"btn btn-primary\" type=\"submit\">Add Job</button>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-info job\" (click)=\"selectJob(job.jobNumber)\">\r\n  <div class=\"row card\">\r\n    <div class=\"col-md-10 col-md-offset-1 sub-card\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12 h4\">\r\n          <a class=\"pull-right\">\r\n            <div style=\"margin: 0\" class=\"h4 ng-binding\">{{job.companyName}} - {{job.jobName}}</div>\r\n          </a>\r\n          <a class=\"label label-primary ng-binding\">\r\n            #{{ job.jobId }}\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-6 col-md-8 col-lg-7\">\r\n          <a>\r\n            <h4>\r\n              <p></p>\r\n              <div class=\"label label-primary\">\r\n                {{ jobStatusText }}\r\n                <span style=\"margin-left: 5px\" class=\"glyphicon glyphicon-remove-sign\" title=\"MERGE BLOCKED BY CONFLICT\"></span>\r\n              </div>\r\n            </h4>\r\n          </a>\r\n        </div>\r\n        <div class=\"blur col-xs-6 col-md-4 col-lg-5 open-pr-user text-center\">\r\n          <a class=\"thumbnail pull-right\">\r\n            <span class=\"label label-default\">{{ job.contactName }}</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr/>\r\n  <select class=\"form-control\" name=\"process\" (ngModelChange)=\"changeProcess($event)\" [(ngModel)]=\"process\">\r\n    <option [selected]=\"!process\">Select Stage</option>\r\n    <option  [ngValue]=\"1\" [attr.selected]=\"process == 1\">Machining</option>\r\n    <option  [ngValue]=\"2\" [attr.selected]=\"process == 2\">Quality</option>\r\n    <option  [ngValue]=\"0\" [attr.selected]=\"process == 0\">Staging</option>\r\n    <option  [ngValue]=\"5\" [attr.selected]=\"process == 5\">Waiting</option>\r\n    <option  [ngValue]=\"3\" [attr.selected]=\"process == 3\">Shipped</option>\r\n  </select>\r\n</div>"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"jobs-wrapper\">\r\n        <app-sidebar\r\n                (changeSidebarState)=\"changeSidebarState($event)\"\r\n                (changeJobStatus)=\"changeJobStatus($event)\"\r\n                hideSidebar=\"hideSidebar\">\r\n        </app-sidebar>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-9\" [ngClass]=\"{'col-md-9':hideSidebar == true, 'col-md-12': hideSidebar == false}\">\r\n            <div class=\"row\" *ngIf=\"jobStatus.machining\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Machining</h3>\r\n                </div>\r\n                <div class=\"col-xs-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"job-wrapper machining\"\r\n                             *ngFor=\"let job of jobs | filter: 1\"\r\n                             [ngClass]=\"{'col-md-4':hideSidebar == true, 'col-md-3': hideSidebar == false}\">\r\n                            <job\r\n                                [job]=\"job\"\r\n                                [jobStatusText]=\"'Machining'\">\r\n                            </job>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf=\"jobStatus.staging\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Staging</h3>\r\n                </div>\r\n                <div class=\"col-xs-12 col-lg-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"job-wrapper staging\"\r\n                             *ngFor=\"let job of jobs | filter: 0\"\r\n                             [ngClass]=\"{'col-md-4':hideSidebar == true, 'col-md-3': hideSidebar == false}\">\r\n                            <job\r\n                                [job]=\"job\"\r\n                                [jobStatusText]=\"'Staging'\">\r\n                            </job>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf=\"jobStatus.quality\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Quality</h3>\r\n                </div>\r\n                <div class=\"col-xs-12 col-lg-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"job-wrapper quality\"\r\n                             *ngFor=\"let job of jobs | filter: 2\"\r\n                             [ngClass]=\"{'col-md-4':hideSidebar == true, 'col-md-3': hideSidebar == false}\">\r\n                            <job\r\n                                [job]=\"job\"\r\n                                [jobStatusText]=\"'Quality'\"\r\n                            ></job>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf=\"jobStatus.shipping\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Shipping</h3>\r\n                </div>\r\n                <div class=\"col-xs-12 col-lg-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"job-wrapper shipping\"\r\n                             *ngFor=\"let job of jobs | filter: 3\"\r\n                             [ngClass]=\"{'col-md-4':hideSidebar == true, 'col-md-3': hideSidebar == false}\">\r\n                            <job\r\n                                [job]=\"job\"\r\n                                [jobStatusText]=\"'Shipping'\">\r\n                            </job>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf=\"jobStatus.waiting\">\r\n                <div class=\"col-md-12\">\r\n                    <h3>Waiting</h3>\r\n                </div>\r\n                <div class=\"col-xs-12 col-lg-12\">\r\n                    <div class=\"row\">\r\n                        <div class=\"job-wrapper waiting\"\r\n                             *ngFor=\"let job of jobs | filter: 5\"\r\n                             [ngClass]=\"{'col-md-4':hideSidebar == true, 'col-md-3': hideSidebar == false}\">\r\n                            <job\r\n                                [job]=\"job\"\r\n                                [jobStatusText]=\"'Waiting'\">\r\n                            </job>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"sidebar\"\n  [ngClass]=\"{'large': !hide}\">\n  <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n    <button\n      type=\"button\"\n      class=\"btn btn-default action\"\n      (click)=\"toggleJobTracker()\"\n      *ngIf=\"!hide\"\n      [ngClass]=\"{'active':jobTracker}\">\n        Job Tracker\n    </button>\n    <button\n      type=\"button\"\n      class=\"btn btn-default action\"\n      (click)=\"toggleAddJob()\"\n      *ngIf=\"!hide\"\n      [ngClass]=\"{'active':addJob}\">\n        Add Job\n    </button>\n    <button\n      type=\"button\"\n      class=\"btn btn-default show-hide\"\n      (click)=\"toggleHide()\"\n      [ngClass]=\"{'full-width': hide}\">\n      {{hideShowText}}\n    </button>\n  </div>\n  <div class=\"body\" [ngClass]=\"{'no-padding': hide}\">\n    <div *ngIf=\"jobTracker\">\n      <h3>Job Tracker</h3>\n      <form action=\"\">\n        <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"machining\" (ngModelChange)=\"updateJobStatus($event)\" [(ngModel)]=\"jobStatus.machining\">Machining</label>\n        <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"quality\" (ngModelChange)=\"updateJobStatus($event)\" [(ngModel)]=\"jobStatus.quality\">Quality</label>\n        <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"staging\" (ngModelChange)=\"updateJobStatus($event)\" [(ngModel)]=\"jobStatus.staging\">Staging</label>\n        <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"waiting\" (ngModelChange)=\"updateJobStatus($event)\" [(ngModel)]=\"jobStatus.waiting\">Waiting</label>\n        <label class=\"checkbox-inline\"><input type=\"checkbox\" name=\"shipping\" (ngModelChange)=\"updateJobStatus($event)\" [(ngModel)]=\"jobStatus.shipping\">Shipping</label>\n      </form>\n    </div>\n    <div *ngIf=\"addJob\">\n      <form action=\"/add-job\" method=\"POST\">\n        <div class=\"form-group\">\n          <label>Company Name: </label>\n          <input class=\"form-control\" name=\"companyName\" required=\"\">\n        </div>\n        <div class=\"form-group\">\n          <label>Job Name: </label>\n          <input class=\"form-control\" name=\"jobName\" required=\"\">\n        </div>\n        <div class=\"form-group\">\n          <label>Contact Name: </label>\n          <input class=\"form-control\" name=\"contactName\" required=\"\">\n        </div>\n        <div class=\"form-group\">\n          <label>Contact Email: </label>\n          <input class=\"form-control\" name=\"contactEmail\" required=\"\">\n        </div>\n        <div class=\"form-group\">\n          <label>Job Id: </label>\n          <input class=\"form-control\" type=\"number\" name=\"jobId\" required=\"\">\n        </div>\n        <div class=\"form-group\">\n          <label>Process</label>\n          <select name=\"process\" class=\"form-control\" required=\"\">\n            <option value=\"\">Select Stage</option>\n            <option value=\"1\">Machining</option>\n            <option value=\"2\">Quality</option>\n            <option value=\"0\">Staging</option>\n            <option value=\"5\">Waiting</option>\n            <option value=\"3\">Shipped</option>\n          </select>\n        </div>\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Update\">\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n      <div class=\"alert alert-default\" [ngClass]=\"{'toggle-edit': edit }\">\r\n        <button class=\"btn btn-default edit\" [ngClass]=\"(edit)?'btn-primary':'btn-default'\" (click)=\"toggleEdit()\">\r\n          {{ editSaveText }} <span class=\"glyphicon glyphicon-edit  pull-right\"></span>\r\n        </button>\r\n        <div class=\"row\">\r\n          <form [formGroup]=\"form\" #f=\"ngForm\">\r\n            <div class=\"col-md-2\">\r\n              <div class=\"user-bubble\" *ngIf=\"job\" [ngClass]=\"getCSSClasses(f.value.jobStatus)\">\r\n                <span class=\"name label-toggle\">{{ f.value.companyName }}</span>\r\n                <input class=\"form-control\" formControlName=\"companyName\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 contact\" *ngIf=\"job\">\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\" [ngClass]=\"getCSSClasses(f.value.jobStatus)\">\r\n                 <span class=\"pull-left\">Company Information</span>\r\n                  <div class=\"form-group status-form\">\r\n                    <span class=\"label-toggle\">{{ f.value.jobStatus | jobStatus: f.value.jobStatus }}</span>\r\n                    <select class=\"form-control\" formControlName=\"jobStatus\">\r\n                      <option></option>\r\n                      <option value=\"0\">Staging</option>\r\n                      <option value=\"1\">Machining</option>\r\n                      <option value=\"2\">Quality</option>\r\n                      <option value=\"3\">Finished</option>\r\n                      <option value=\"4\">Shipped</option>\r\n                      <option value=\"5\">Removed</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                  <div class=\"content-box\">\r\n                    <div class=\"form-group\">\r\n                      <label>Contact: </label>\r\n                      <span class=\"label-toggle\">{{ f.value.contactName }}</span>\r\n                      <input class=\"form-control\" formControlName=\"contactName\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Primary Phone: </label>\r\n                      <span class=\"label-toggle\">{{ f.value.contactPhoneNumber }}</span>\r\n                      <input class=\"form-control\" formControlName=\"contactPhoneNumber\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Primary Email: </label>\r\n                      <span class=\"label-toggle\">{{ f.value.contactEmail }}</span>\r\n                      <input class=\"form-control\" formControlName=\"contactEmail\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Job Description: </label>\r\n                      <span class=\"label-toggle\">{{ f.value.jobDescription }}</span>\r\n                      <textarea class=\"form-control job-description\" formControlName=\"jobDescription\"></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n\r\n          </div>\r\n          <div class=\"col-xs-12 h4 content-row\">\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\" [ngClass]=\"getCSSClasses(f.value.jobStatus)\">Tooling Usage</div>\r\n              <table class=\"table\">\r\n                <thead>\r\n                <tr>\r\n                  <th>#</th>\r\n                  <th>Job Name</th>\r\n                  <th>Parts Due</th>\r\n                  <th>Due Date</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr>\r\n                  <th scope=\"row\">1</th>\r\n                  <td>Mark</td>\r\n                  <td>Otto</td>\r\n                  <td>@mdo</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope=\"row\">2</th>\r\n                  <td>Jacob</td>\r\n                  <td>Thornton</td>\r\n                  <td>@fat</td>\r\n                </tr>\r\n                <tr>\r\n                  <th scope=\"row\">3</th>\r\n                  <td>Larry</td>\r\n                  <td>the Bird</td>\r\n                  <td>@twitter</td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-8\">\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(429);


/***/ })

},[991]);
//# sourceMappingURL=main.bundle.map