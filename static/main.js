(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row\" style=\"height:90px\"></div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/entry-form/entry-form.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/entry-form/entry-form.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>\n        <div>\n            <h1>New Entry</h1>\n            <p></p>\n        </div>\n        <form>\n            <mat-form-field>\n                <mat-label>Select a Category</mat-label>\n                <mat-select [(ngModel)]=\"selectedCategory\" name=\"category\">\n                    <mat-option *ngFor=\"let category of categories\" [value]=\"category\" (click)=\"filterActivities()\">{{category}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <mat-label>Select a Activity</mat-label>\n                <mat-select [(ngModel)]=\"selectedActivity\" name=\"activity\">\n                    <mat-option *ngFor=\"let activity of filteredActivities\" [value]=\"activity.name\"\n                        (click)=\"renderProperties()\">{{activity.name}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <mat-label>Date</mat-label>\n                <input matInput placeholder=\"Date of Activity\" [formControl]=\"entryDate\" [matDatepicker] = \"picker\">\n                <mat-datepicker-toggle mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n                <mat-error *ngIf=\"entryDate.invalid\">{{ getErrorMessage(\"entryDate\") }}</mat-error>\n            </mat-form-field>\n            <mat-form-field *ngIf=\"showMembers\">\n                <mat-label>Members</mat-label>\n                <input matInput placeholder=\"Number of Members\" [formControl]=\"members\">\n                <mat-error *ngIf=\"members.invalid\">{{ getErrorMessage(\"members\") }}</mat-error>\n            </mat-form-field>\n            <br>\n            <mat-form-field *ngIf=\"showHours\">\n                <mat-label>Hours</mat-label>\n                <input matInput placeholder=\"Number of Hours\" [formControl]=\"hours\">\n                <mat-error *ngIf=\"hours.invalid\">{{ getErrorMessage(\"hours\") }}</mat-error>\n            </mat-form-field>\n            <br>\n            <mat-form-field *ngIf=\"showDescription\">\n                <textarea matInput style=\"width:100%\" placeholder=\"Description\" [formControl]=\"description\"></textarea>\n            </mat-form-field>\n\n        </form>\n    </mat-card-content>\n    <mat-card-actions>\n\n        <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Submit</button>\n        <br>\n        <button mat-button style=\"width: 90%\" (click)=\"onClear()\">Clear</button>\n    </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"CURE-toolbar\">\n\n  <span>CURE</span>\n  <button *ngIf=\"user\" [routerLink]=\"['/entry']\" routerLinkActive=\"active\" mat-button>New Entry</button>\n\n  <span class=\"CURE-toolbar-divider\"></span>\n  <!-- Middle Divider -->\n  <span *ngIf=\"user\" style=\"margin-right: 2%\">{{user.displayName}}</span>\n  \n  <button mat-icon-button [matMenuTriggerFor]=\"appMenu\" style=\"width:3%\">\n    <mat-icon>account_box</mat-icon>\n    <mat-icon>expand_more</mat-icon>\n\n    <mat-menu #appMenu=\"matMenu\" yPosition=\"below\">\n      <button *ngIf=\"!user\" mat-menu-item [routerLink]=\"['/']\" routerLinkActive=\"active\" >Login</button>\n      <button *ngIf=\"user\" mat-menu-item [routerLink]=\"['/userProfile']\" routerLinkActive=\"active\" >My Profile</button>\n      <button *ngIf=\"user\" mat-menu-item [routerLink]=\"['/manageUsers']\" routerLinkActive=\"active\" >Manage Users</button>\n      <button *ngIf=\"user\" mat-menu-item [routerLink]=\"['/newUser']\" routerLinkActive=\"active\" >Create New User</button>\n      <button *ngIf=\"user\" mat-menu-item [routerLink]=\"['/editUser']\" routerLinkActive=\"active\" >Edit User</button>\n      <button *ngIf=\"user\" (click)='onLogoutClick()' mat-menu-item >Logout</button>\n    </mat-menu>\n  </button>\n\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/signin/signin.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/signin/signin.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>\n        <div>\n            <h1>Welcome to CURE</h1>\n            <p>Sign In with your CURE account</p>\n        </div>\n        <form>\n            <mat-form-field>\n                <input matInput placeholder=\"Username\" [formControl]=\"username\" required>\n                <mat-error *ngIf=\"username.invalid\">{{getErrorMessage(\"username\")}}</mat-error>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <input matInput placeholder=\"password\" type=\"password\" [formControl]=\"password\" required>\n                <mat-error *ngIf=\"password.invalid\">{{getErrorMessage(\"password\")}}</mat-error>\n            </mat-form-field>\n        </form>\n\n    </mat-card-content>\n    <mat-card-actions>\n\n        <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\" style=\"margin-bottom: 5%\">Login</button>\n    </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/unauthorized/unauthorized.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/unauthorized/unauthorized.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align: center\">You don't have access to this function... :(</h1>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user-edit-form/user-edit-form.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user-edit-form/user-edit-form.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <div>\n      <h1>Edit User</h1>\n    </div>\n    <form>\n      <mat-form-field>\n        <mat-label>User ID</mat-label>\n        <input matInput placeholder=\"User ID\" [formControl]=\"userID\" required>\n        <mat-error *ngIf=\"userID.invalid\">{{getErrorMessage(\"userID\")}}</mat-error>\n      </mat-form-field>\n      <br>\n      <mat-form-field *ngIf=\"userLoaded\">\n        <mat-label>first Name</mat-label>\n        <input matInput placeholder=\"First Name\" [formControl]=\"firstName\" required>\n        <mat-error *ngIf=\"firstName.invalid\">{{getErrorMessage(\"firstName\")}}</mat-error>\n      </mat-form-field>\n      <br>\n      <mat-form-field *ngIf=\"userLoaded\">\n        <mat-label>Last Name</mat-label>\n        <input matInput placeholder=\"Last Name\" [formControl]=\"lastName\" required>\n        <mat-error *ngIf=\"lastName.invalid\">{{getErrorMessage(\"lastName\")}}</mat-error>\n      </mat-form-field>\n      <br>\n      <mat-form-field *ngIf=\"userLoaded\">\n        <mat-label>username</mat-label>\n        <input matInput placeholder=\"Username\" [formControl]=\"username\" required>\n        <mat-error *ngIf=\"username.invalid\">{{getErrorMessage(\"username\")}}</mat-error>\n      </mat-form-field>\n      <br>\n      <mat-form-field *ngIf=\"userLoaded\">\n        <mat-label>Site</mat-label>\n        <mat-select [(ngModel)]=\"selectedSite\" name=\"site\">\n          <mat-option *ngFor=\"let site of sites\" [value]=\"site.name\">{{site.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <br>\n      <mat-form-field *ngIf=\"userLoaded\">\n        <mat-label>Clinic</mat-label>\n        <mat-select [(ngModel)]=\"selectedClinic\" name=\"clinic\">\n          <mat-option *ngFor=\"let clinic of clinics\" [value]=\"clinic\">{{clinic}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field *ngIf=\"userLoaded\">\n        <mat-label>User Status</mat-label>\n        <mat-select [(ngModel)]=\"selectedStatus\" name=\"status\">\n          <mat-option *ngFor=\"let status of statuses\" [value]=\"status\">{{status}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </form>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\" style=\"margin-bottom: 5%\">Save</button>\n    <button mat-raised-button color=\"warn\" (click)=\"onDelete()\" style=\"margin-bottom: 5%\">Delete User</button>\n  </mat-card-actions>\n\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user-management/user-management.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user-management/user-management.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:85%; margin-left:auto; margin-right: auto\">\n  <mat-form-field style=\"width:50%\">\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n  <br>\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" style=\"width: 100%\">\n\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef>ID</th>\n      <td mat-cell *matCellDef=\"let element\">{{element._id}}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"firstName\">\n      <th mat-header-cell *matHeaderCellDef>First Name</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.firstName}}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"lastName\">\n      <th mat-header-cell *matHeaderCellDef>Last Name</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.lastName}}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"username\">\n      <th mat-header-cell *matHeaderCellDef>Username</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.username}}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"displayName\">\n      <th mat-header-cell *matHeaderCellDef>Display Name</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.displayName}}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"site\">\n      <th mat-header-cell *matHeaderCellDef>Site</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.site}}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"clinic\">\n      <th mat-header-cell *matHeaderCellDef>Clinic</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.clinic}}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef>Status</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.status}}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayColumns\"></tr>\n  </table>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user-profile/changePasswordDialog.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user-profile/changePasswordDialog.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form>\n    <h1>Change Password</h1>\n    <p>Password must contain at least 1 of the following:</p>\n    <ul>\n        <li>Lower Case Letter</li>\n        <li>Upper Case Letter</li>\n        <li>Number</li>\n        <li>Special Character</li>\n    </ul>\n    <mat-form-field>\n        <input matInput placeholder=\"Password\" type=\"password\" [formControl]=\"password\" required>\n        <mat-error *ngIf=\"password.invalid\">{{getErrorMessage(\"password\")}}</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n        <input matInput placeholder=\"Confirm Password\" type=\"password\" [formControl]=\"passwordConfirm\" required>\n        <mat-error *ngIf=\"passwordConfirm.invalid\">{{getErrorMessage(\"passwordConfirm\")}}</mat-error>\n    </mat-form-field>\n    <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\" style=\"margin-bottom: 5%\">Save</button>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user-profile/user-profile.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user-profile/user-profile.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-content>\n      <div>\n        <h1>Edit My Information</h1>\n      </div>\n      <form>\n        <mat-form-field>\n          <mat-label>first Name</mat-label>\n          <input matInput placeholder=\"First Name\" [formControl]=\"firstName\" required>\n          <mat-error *ngIf=\"firstName.invalid\">{{getErrorMessage(\"firstName\")}}</mat-error>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <mat-label>Last Name</mat-label>\n          <input matInput placeholder=\"Last Name\" [formControl]=\"lastName\" required>\n          <mat-error *ngIf=\"lastName.invalid\">{{getErrorMessage(\"lastName\")}}</mat-error>\n        </mat-form-field>\n        <br>\n        <mat-form-field>\n          <mat-label>Display Name</mat-label>\n          <input matInput placeholder=\"Display Name\" [formControl]=\"displayName\" required>\n          <mat-error *ngIf=\"displayName.invalid\">{{getErrorMessage(\"displayName\")}}</mat-error>\n        </mat-form-field>\n      </form>\n    </mat-card-content> \n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\" style=\"margin-bottom: 2%\">Save</button>\n      <button mat-button color=\"accent\" (click)=\"onResetPassword()\">Click here to change password</button>\n    </mat-card-actions>\n  </mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user-registration/user-registration.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user-registration/user-registration.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <div>\n      <h1>Register a New User</h1>\n      <p></p>\n    </div>\n    <form>\n      <mat-form-field>\n        <mat-label>First Name</mat-label>\n        <input matInput placeholder=\"First Name\" [formControl]=\"firstName\">\n        <mat-error *ngIf=\"firstName.invalid\">{{ getErrorMessage(\"firstName\") }}</mat-error>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <mat-label>Last Name</mat-label>\n        <input matInput placeholder=\"Last Name\" [formControl]=\"lastName\">\n        <mat-error *ngIf=\"lastName.invalid\">{{ getErrorMessage(\"lastName\") }}</mat-error>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <mat-label>Username</mat-label>\n        <input matInput placeholder=\"Username\" [formControl]=\"username\">\n        <mat-error *ngIf=\"username.invalid\">{{ getErrorMessage(\"username\") }}</mat-error>\n      </mat-form-field>\n      <br>\n    </form>\n  </mat-card-content>\n  <mat-card-actions>\n\n    <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Submit</button>\n    <br>\n    <button mat-button style=\"width: 90%\" (click)=\"onClear()\">Clear</button>\n  </mat-card-actions>\n</mat-card>\n\n<!-- User Creatation Card -->\n\n<mat-card *ngIf=\"createdUsername\">\n  <mat-card-content>\n    <h1>Temporary User Information</h1>\n    <p>Please Instruct the User to change their password Immediately!!</p>\n    <br>\n    <h2>Username: {{createdUsername}}</h2>\n    <h2>Password: {{tempPassword}}</h2>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin.guard.ts":
/*!********************************!*\
  !*** ./src/app/admin.guard.ts ***!
  \********************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");




var AdminGuard = /** @class */ (function () {
    function AdminGuard(router, usersService) {
        this.router = router;
        this.usersService = usersService;
    }
    AdminGuard.prototype.canActivate = function () {
        // If the token is good and the logged in user is admin, return true
        if (this.usersService.goodToken) {
            if (this.usersService.mainUser.status == 'admin') {
                return true;
            }
        }
        this.router.navigate(['/unauthorized']);
        return false;
    };
    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]])
    ], AdminGuard);
    return AdminGuard;
}());

/*
TODO:
- Check the user for admin privilages
- Create Admin account for testing
*/


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _components_entry_form_entry_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/entry-form/entry-form.component */ "./src/app/components/entry-form/entry-form.component.ts");
/* harmony import */ var _components_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user-registration/user-registration.component */ "./src/app/components/user-registration/user-registration.component.ts");
/* harmony import */ var _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user-management/user-management.component */ "./src/app/components/user-management/user-management.component.ts");
/* harmony import */ var _components_user_edit_form_user_edit_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user-edit-form/user-edit-form.component */ "./src/app/components/user-edit-form/user-edit-form.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/unauthorized/unauthorized.component */ "./src/app/components/unauthorized/unauthorized.component.ts");
/* harmony import */ var _authentication_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authentication.guard */ "./src/app/authentication.guard.ts");
/* harmony import */ var _admin_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin.guard */ "./src/app/admin.guard.ts");












var routes = [
    { path: '', component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"] },
    { path: 'entry', component: _components_entry_form_entry_form_component__WEBPACK_IMPORTED_MODULE_4__["EntryFormComponent"], canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_10__["AuthenticationGuard"]] },
    { path: 'newUser', component: _components_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_5__["UserRegistrationComponent"], canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]] },
    { path: 'manageUsers', component: _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_6__["UserManagementComponent"], canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]] },
    { path: 'editUser', component: _components_user_edit_form_user_edit_form_component__WEBPACK_IMPORTED_MODULE_7__["UserEditFormComponent"], canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]] },
    { path: 'userProfile', component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileComponent"], canActivate: [_authentication_guard__WEBPACK_IMPORTED_MODULE_10__["AuthenticationGuard"]] },
    { path: 'unauthorized', component: _components_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_9__["UnauthorizedComponent"] },
    { path: '**', redirectTo: 'entry' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  justify-content: start;\n  width: 40%;\n  margin: auto;\n  text-align: center;\n}\n\n.mat-form-field {\n  width: 90%;\n}\n\n.borderON {\n  border-style: solid;\n  border-width: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmJvcmRlck9OIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(usersService, router, snackBar) {
        this.usersService = usersService;
        this.router = router;
        this.snackBar = snackBar;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.usersService.goodToken) {
            this.usersService.getUser(localStorage.getItem('token'));
            this.router.navigate(['entry']);
        }
        else {
            this.router.navigate(['']);
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_entry_form_entry_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/entry-form/entry-form.component */ "./src/app/components/entry-form/entry-form.component.ts");
/* harmony import */ var _components_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/user-registration/user-registration.component */ "./src/app/components/user-registration/user-registration.component.ts");
/* harmony import */ var _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/user-management/user-management.component */ "./src/app/components/user-management/user-management.component.ts");
/* harmony import */ var _components_user_edit_form_user_edit_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/user-edit-form/user-edit-form.component */ "./src/app/components/user-edit-form/user-edit-form.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/unauthorized/unauthorized.component */ "./src/app/components/unauthorized/unauthorized.component.ts");








//Material Design Stuff
















//Components









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"],
                _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_23__["SigninComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_25__["NavbarComponent"],
                _components_entry_form_entry_form_component__WEBPACK_IMPORTED_MODULE_26__["EntryFormComponent"],
                _components_user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_27__["UserRegistrationComponent"],
                _components_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_28__["UserManagementComponent"],
                _components_user_edit_form_user_edit_form_component__WEBPACK_IMPORTED_MODULE_29__["UserEditFormComponent"],
                _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_30__["UserProfileComponent"],
                _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_30__["ChangePasswordDialog"],
                _components_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_31__["UnauthorizedComponent"]
            ],
            entryComponents: [
                _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_30__["ChangePasswordDialog"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBarModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_24__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_5__["platformBrowserDynamic"])().bootstrapModule(AppModule);


/***/ }),

/***/ "./src/app/authentication.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/authentication.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(usersService, router) {
        this.usersService = usersService;
        this.router = router;
    }
    AuthenticationGuard.prototype.canActivate = function () {
        // Check for a good token and load the user into the global space
        if (this.usersService.goodToken) {
            this.usersService.getUser(localStorage.getItem('token'));
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "./src/app/components/entry-form/entry-form.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/entry-form/entry-form.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50cnktZm9ybS9lbnRyeS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/entry-form/entry-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/entry-form/entry-form.component.ts ***!
  \***************************************************************/
/*! exports provided: EntryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryFormComponent", function() { return EntryFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);







var EntryFormComponent = /** @class */ (function () {
    function EntryFormComponent(snackBar, dataService, usersService) {
        this.snackBar = snackBar;
        this.dataService = dataService;
        this.usersService = usersService;
        // show or hide fields based on properties
        this.showMembers = false;
        this.showHours = false;
        this.showDescription = false;
        // form control bindings
        this.members = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')]);
        this.description = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.hours = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')]);
        this.entryDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
    }
    EntryFormComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // Get all of the activities from the Database
                        _a = this;
                        return [4 /*yield*/, this.dataService.getActivities()];
                    case 1:
                        // Get all of the activities from the Database
                        _a.activities = _b.sent();
                        // Filter through the activities to get the unique category names
                        this.categories = this.activities.map(function (item) { return item.category; })
                            // Remove Duplicates after maping (get only the category for each array item)
                            .filter(function (item, i, ar) { return ar.indexOf(item) === i; });
                        return [2 /*return*/];
                }
            });
        });
    };
    EntryFormComponent.prototype.resetFields = function () {
        this.members.reset();
        this.hours.reset();
        this.description.reset();
    };
    // Filter the activities based on category
    EntryFormComponent.prototype.filterActivities = function () {
        var _this = this;
        this.filteredActivities = this.activities.filter(function (item) { return item.category == _this.selectedCategory; });
        this.resetFields();
    };
    // show or hide the text boxes based on the properties list
    EntryFormComponent.prototype.renderProperties = function () {
        var _this = this;
        // Filter based on the selected activity to get the properties
        var properties = this.activities
            .filter(function (item) { return item.name == _this.selectedActivity; })
            .map(function (item) { return item.properties; });
        properties = properties[0];
        // If the activity has one of the properties, display it
        properties.includes('members') ? this.showMembers = true : this.showMembers = false;
        properties.includes('hours') ? this.showHours = true : this.showHours = false;
        properties.includes('description') ? this.showDescription = true : this.showDescription = false;
        this.resetFields();
    };
    // show the red error messages under the text boxes
    EntryFormComponent.prototype.getErrorMessage = function (field) {
        switch (field) {
            case 'members':
                return this.members.hasError('required') ? 'This field cannot be left blank' :
                    this.members.hasError('pattern') ? 'this field must be a number' : '';
            case 'hours':
                return this.hours.hasError('required') ? 'This field cannot be left blank' :
                    this.hours.hasError('pattern') ? 'this field must be a number' : '';
            case 'entryDate':
                return this.entryDate.hasError('required') ? 'This field cannot be left blank' : '';
        }
    };
    // Check if fields are visible and then check if they are validated correctly
    EntryFormComponent.prototype.validateForm = function () {
        if (this.showDescription) {
            if (this.description.invalid) {
                return false;
            }
        }
        if (this.showHours) {
            if (this.hours.invalid) {
                return false;
            }
        }
        if (this.showMembers) {
            if (this.description.invalid) {
                return false;
            }
        }
        if (this.entryDate.invalid || Object(util__WEBPACK_IMPORTED_MODULE_6__["isDate"])(this.entryDate.value) == false) {
            return false;
        }
        return true;
    };
    EntryFormComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var selectedActivityObj, entry, submitEntryRequest;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Validate the form and submit
                        if (!this.validateForm()) {
                            this.snackBar.open('you forgot something...', 'dismiss', { duration: 2000 });
                            return [2 /*return*/, false];
                        }
                        selectedActivityObj = this.activities.filter(function (item) { return item.name == _this.selectedActivity; })[0];
                        entry = {
                            activityID: selectedActivityObj._id,
                            activity: selectedActivityObj.name,
                            category: selectedActivityObj.category,
                            creator: this.usersService.mainUser.username,
                            dateEntered: new Date(),
                            dateCreated: new Date(),
                            site: this.usersService.mainUser.site,
                            clinic: this.usersService.mainUser.clinic,
                            userStatus: this.usersService.mainUser.status,
                            hours: this.hours.value || null,
                            members: this.members.value || null,
                            description: this.description.value || null
                        };
                        return [4 /*yield*/, this.dataService.addEntry(entry)];
                    case 1:
                        submitEntryRequest = _a.sent();
                        if (submitEntryRequest) {
                            this.snackBar.open('Thank you!', 'dimiss', { duration: 2000 });
                        }
                        else {
                            this.snackBar.open('Something went wrong while attempting to submit entry..', 'dismiss', { duration: 3000 });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EntryFormComponent.prototype.onClear = function () {
        this.resetFields();
    };
    EntryFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entry-form',
            template: __webpack_require__(/*! raw-loader!./entry-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/entry-form/entry-form.component.html"),
            styles: [__webpack_require__(/*! ./entry-form.component.css */ "./src/app/components/entry-form/entry-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]])
    ], EntryFormComponent);
    return EntryFormComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".CURE-toolbar-divider {\n    flex: 1 1 auto;\n}\n.CURE-toolbar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 998;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkNVUkUtdG9vbGJhci1kaXZpZGVyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cbi5DVVJFLXRvb2xiYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiA5OTg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, snackBar, usersService) {
        this.router = router;
        this.snackBar = snackBar;
        this.usersService = usersService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        // When ever a log in or out event is trigger, this will change the user
        this.usersService.userLoggedIn.subscribe(function (userLoggedIn) {
            if (userLoggedIn) {
                _this.user = _this.usersService.mainUser;
            }
            else {
                _this.user = null;
            }
        }, function (err) {
            if (err)
                throw err;
        });
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.usersService.logout();
        this.snackBar.open('See you next time!', 'dismiss', { duration: 4000 });
        this.router.navigate(['/']);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/signin/signin.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signin/signin.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/signin/signin.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signin/signin.component.ts ***!
  \*******************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SigninComponent = /** @class */ (function () {
    function SigninComponent(snackBar, usersService, router) {
        this.snackBar = snackBar;
        this.usersService = usersService;
        this.router = router;
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
    }
    SigninComponent.prototype.ngOnInit = function () {
        if (this.usersService.goodToken) {
            this.usersService.getUser(localStorage.getItem('token'));
        }
    };
    SigninComponent.prototype.getErrorMessage = function (field) {
        if (field == "username") {
            // if there is an error, return the message, if not return blank
            return this.username.hasError("required")
                ? "This field cannot be blank"
                : "";
        }
        else if (field == "password") {
            return this.password.hasError("required")
                ? "This field cannot be blank"
                : "";
        }
    };
    SigninComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var signInResponse;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.username.valid && this.password.valid)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.usersService.signIn({
                                username: this.username.value,
                                password: this.password.value
                            })];
                    case 1:
                        signInResponse = _a.sent();
                        if (signInResponse.errorMessage) {
                            this.snackBar.open(signInResponse.errorMessage, "dismiss", {
                                duration: 2000
                            });
                        }
                        else {
                            // Load the user into the global space (userservice mainUser)
                            this.usersService.getUser(signInResponse.accessToken);
                            this.snackBar.open("Welcome Back!", "dismiss", { duration: 2000 });
                            this.router.navigate(["/entry"]);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        this.snackBar.open("You missed something...", "dismiss", {
                            duration: 2000
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-signin",
            template: __webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/components/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/components/unauthorized/unauthorized.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/unauthorized/unauthorized.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdW5hdXRob3JpemVkL3VuYXV0aG9yaXplZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/unauthorized/unauthorized.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/unauthorized/unauthorized.component.ts ***!
  \*******************************************************************/
/*! exports provided: UnauthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedComponent", function() { return UnauthorizedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UnauthorizedComponent = /** @class */ (function () {
    function UnauthorizedComponent() {
    }
    UnauthorizedComponent.prototype.ngOnInit = function () {
    };
    UnauthorizedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unauthorized',
            template: __webpack_require__(/*! raw-loader!./unauthorized.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/unauthorized/unauthorized.component.html"),
            styles: [__webpack_require__(/*! ./unauthorized.component.css */ "./src/app/components/unauthorized/unauthorized.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UnauthorizedComponent);
    return UnauthorizedComponent;
}());



/***/ }),

/***/ "./src/app/components/user-edit-form/user-edit-form.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/user-edit-form/user-edit-form.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".radio-group {\n  display: flex;\n  margin-top: 5%;\n}\n\n.radio-button {\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWVkaXQtZm9ybS91c2VyLWVkaXQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLWVkaXQtZm9ybS91c2VyLWVkaXQtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5yYWRpby1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/user-edit-form/user-edit-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/user-edit-form/user-edit-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserEditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditFormComponent", function() { return UserEditFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_admin_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/admin-users.service */ "./src/app/services/admin-users.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");








var UserEditFormComponent = /** @class */ (function () {
    function UserEditFormComponent(router, adminUsersService, snackBar, dataService) {
        this.router = router;
        this.adminUsersService = adminUsersService;
        this.snackBar = snackBar;
        this.dataService = dataService;
        this.userID = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.site = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.sites = this.dataService.getSites();
        this.clinics = ['Mental Health', 'Physical Medicine'];
        this.statuses = ['standard', 'admin'];
        // Used to set the input fields as visible or not
        this.userLoaded = false;
        this.attemptedValue = '';
    }
    UserEditFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Watch the userID field, if it hits length 24 then load a user
        this.userID.valueChanges.subscribe(function (value) {
            if (value.length == 24 && _this.attemptedValue != value) {
                _this.attemptedValue = value;
                _this.userID.disable();
                _this.loadUser(value);
            }
        });
    };
    UserEditFormComponent.prototype.loadUser = function (userID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var user;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.adminUsersService.getUser(userID)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            this.userLoaded = false;
                            this.snackBar.open("User not found... Check ID", "dismiss", {
                                duration: 3000
                            });
                            this.userID.enable();
                        }
                        else {
                            this.firstName.setValue(user.firstName);
                            this.lastName.setValue(user.lastName);
                            this.username.setValue(user.username);
                            this.selectedClinic = user.clinic || '';
                            this.selectedSite = user.site || '';
                            this.selectedStatus = user.status || '';
                            // Show the other fields on the form
                            this.userLoaded = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserEditFormComponent.prototype.getErrorMessage = function (field) {
        var blankMessage = "this field cannot be left blank";
        switch (field) {
            case "userID":
                return this.userID.hasError("required") ? blankMessage : "";
            case "firstName":
                return this.firstName.hasError("required") ? blankMessage : "";
            case "lastName":
                return this.lastName.hasError("required") ? blankMessage : "";
            case "username":
                return this.username.hasError("required") ? blankMessage : "";
        }
    };
    // TODO: fix site and clinic generation after loading id
    UserEditFormComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userEditInfo, updateRequest;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.userID.invalid || this.firstName.invalid || this.lastName.invalid || this.username.invalid) {
                            this.snackBar.open('You forgot something...', 'dismiss', { duration: 3000 });
                            return [2 /*return*/, false];
                        }
                        ;
                        userEditInfo = {
                            id: this.userID.value,
                            firstName: this.firstName.value,
                            lastName: this.lastName.value,
                            username: this.username.value,
                            site: this.selectedSite,
                            clinic: this.selectedClinic,
                            status: this.selectedStatus
                        };
                        return [4 /*yield*/, this.adminUsersService.updateUserInfo(userEditInfo)];
                    case 1:
                        updateRequest = _a.sent();
                        if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isUndefined"])(updateRequest.username)) {
                            this.snackBar.open('Something went wrong...', 'dismiss', { duration: 3000 });
                        }
                        else {
                            this.snackBar.open('Successful Update!', 'dismiss', { duration: 2000 });
                            this.router.navigate(['/manageUsers']);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserEditFormComponent.prototype.onDelete = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var confirmation, deleteRequest;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        confirmation = confirm("Are you sure you want to delete this user?");
                        if (!confirmation) {
                            return [2 /*return*/, false];
                        }
                        ;
                        return [4 /*yield*/, this.adminUsersService.deleteUser(this.userID.value)];
                    case 1:
                        deleteRequest = _a.sent();
                        this.snackBar.open('User Successfully Deleted', 'dismiss', { duration: 3000 });
                        this.router.navigate(['manageUsers']);
                        return [2 /*return*/];
                }
            });
        });
    };
    UserEditFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-user-edit-form",
            template: __webpack_require__(/*! raw-loader!./user-edit-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user-edit-form/user-edit-form.component.html"),
            styles: [__webpack_require__(/*! ./user-edit-form.component.css */ "./src/app/components/user-edit-form/user-edit-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_admin_users_service__WEBPACK_IMPORTED_MODULE_3__["AdminUsersService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]])
    ], UserEditFormComponent);
    return UserEditFormComponent;
}());



/***/ }),

/***/ "./src/app/components/user-management/user-management.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/user-management/user-management.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1tYW5hZ2VtZW50L3VzZXItbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user-management/user-management.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/user-management/user-management.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_admin_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/admin-users.service */ "./src/app/services/admin-users.service.ts");




var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent(adminUsersService) {
        this.adminUsersService = adminUsersService;
        this.displayColumns = ['id', 'firstName', 'lastName', 'username', 'displayName', 'site', 'clinic', 'status'];
    }
    UserManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminUsersService.getAllUsers()
            .then(function (results) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](results);
        });
    };
    UserManagementComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-management',
            template: __webpack_require__(/*! raw-loader!./user-management.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user-management/user-management.component.html"),
            styles: [__webpack_require__(/*! ./user-management.component.css */ "./src/app/components/user-management/user-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_admin_users_service__WEBPACK_IMPORTED_MODULE_3__["AdminUsersService"]])
    ], UserManagementComponent);
    return UserManagementComponent;
}());



/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserProfileComponent, ChangePasswordDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordDialog", function() { return ChangePasswordDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");







var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(usersService, snackBar, dialog) {
        this.usersService = usersService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        // Create new form controls
        this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.displayName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        // Pull the existing values from logged in user
        this.firstName.setValue(this.usersService.mainUser.firstName);
        this.lastName.setValue(this.usersService.mainUser.lastName);
        this.displayName.setValue(this.usersService.mainUser.displayName);
    };
    UserProfileComponent.prototype.getErrorMessage = function (field) {
        var blankMessage = 'this field cannot be left blank';
        switch (field) {
            case 'firstName':
                return this.firstName.hasError('required') ? blankMessage : '';
            case 'lastName':
                return this.lastName.hasError('required') ? blankMessage : '';
            case 'displayName':
                return this.displayName.hasError('required') ? blankMessage : '';
        }
        ;
    };
    ;
    UserProfileComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var updateRequest;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.firstName.valid && this.lastName.valid && this.displayName.valid)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.usersService.updateUserInfo({
                                firstName: this.firstName.value,
                                lastName: this.lastName.value,
                                displayName: this.displayName.value
                            })];
                    case 1:
                        updateRequest = _a.sent();
                        // The return should be the updated user. If there's no username, something went wrong
                        if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isUndefined"])(updateRequest.username)) {
                            this.snackBar.open('Something went wrong...', 'dismiss', { duration: 3000 });
                        }
                        else {
                            this.usersService.getUser(this.usersService.mainUser.token);
                            this.snackBar.open('Successful update!', 'dismiss', { duration: 3000 });
                        }
                        ;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    UserProfileComponent.prototype.onResetPassword = function () {
        this.dialog.open(ChangePasswordDialog);
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/components/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());

var ChangePasswordDialog = /** @class */ (function () {
    function ChangePasswordDialog(dialogRef, usersService, snackBar) {
        this.dialogRef = dialogRef;
        this.usersService = usersService;
        this.snackBar = snackBar;
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])([^\\s]){6,25}$')]);
        this.passwordConfirm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])([^\\s]){6,25}$')]);
    }
    ChangePasswordDialog.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var updateRequest;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.password.value !== this.passwordConfirm.value) {
                            this.snackBar.open('Your passwords do not match!', 'dismiss', { duration: 3000 });
                            return [2 /*return*/, false];
                        }
                        ;
                        if (this.password.hasError('pattern') || this.passwordConfirm.hasError('pattern')) {
                            this.snackBar.open('Your password is missing a required character or is not long enough!', 'dismiss', { duration: 3000 });
                            return [2 /*return*/, false];
                        }
                        ;
                        return [4 /*yield*/, this.usersService.updateUserInfo(null, { password: this.password.value })];
                    case 1:
                        updateRequest = _a.sent();
                        // The return should be the updated user. If there's no username, something went wrong
                        if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isUndefined"])(updateRequest.username)) {
                            this.snackBar.open('Something went wrong...', 'dismiss', { duration: 3000 });
                        }
                        else {
                            this.usersService.getUser(this.usersService.mainUser.token);
                            this.snackBar.open('Successful update!', 'dismiss', { duration: 3000 });
                        }
                        ;
                        this.snackBar.open('Your password has been changed!', 'dismiss', { duration: 3000 });
                        this.dialogRef.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChangePasswordDialog.prototype.getErrorMessage = function (field) {
        switch (field) {
            case "password":
                return this.password.hasError('pattern') ? 'Password is missing something' : '';
            case "passwordConfirm":
                return this.passwordConfirm.hasError('pattern') ? 'This password is missing something' : '';
        }
    };
    ChangePasswordDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ChangePasswordDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'changePasswordDialog',
            template: __webpack_require__(/*! raw-loader!./changePasswordDialog.html */ "./node_modules/raw-loader/index.js!./src/app/components/user-profile/changePasswordDialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"],
            src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], ChangePasswordDialog);
    return ChangePasswordDialog;
}());



/***/ }),

/***/ "./src/app/components/user-registration/user-registration.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/user-registration/user-registration.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1yZWdpc3RyYXRpb24vdXNlci1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user-registration/user-registration.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/user-registration/user-registration.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UserRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function() { return UserRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var random_words__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! random-words */ "./node_modules/random-words/index.js");
/* harmony import */ var random_words__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(random_words__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_admin_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/admin-users.service */ "./src/app/services/admin-users.service.ts");







var UserRegistrationComponent = /** @class */ (function () {
    function UserRegistrationComponent(router, adminUsersService, snackBar) {
        this.router = router;
        this.adminUsersService = adminUsersService;
        this.snackBar = snackBar;
        //TODO: Add Clinic and Site Dropdowns
        this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.tempPassword = null;
        this.createdUsername = null;
    }
    UserRegistrationComponent.prototype.ngOnInit = function () {
    };
    UserRegistrationComponent.prototype.getErrorMessage = function (field) {
        switch (field) {
            case 'firstName':
                return this.firstName.hasError('required') ? 'This field cannot be left blank' : '';
            case 'lastName':
                return this.lastName.hasError('required') ? 'This field cannot be left blank' : '';
            case 'username':
                return this.username.hasError('required') ? 'this field cannot be left blank' : '';
        }
        ;
    };
    ;
    // Generate a random password
    UserRegistrationComponent.prototype.getRandomPassword = function () {
        var firstWord = random_words__WEBPACK_IMPORTED_MODULE_5__();
        firstWord = firstWord.toUpperCase();
        var secondWord = random_words__WEBPACK_IMPORTED_MODULE_5__();
        var randNum = Math.floor(Math.random() * 100);
        return "" + randNum + firstWord + "@" + secondWord;
    };
    UserRegistrationComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var queryUser, userInfo, createUserRequest, createdUser;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Validate the userform
                        if (this.firstName.invalid || this.lastName.invalid || this.username.invalid) {
                            this.snackBar.open('You missed something..', 'dismiss', { duration: 3000 });
                        }
                        ;
                        return [4 /*yield*/, this.adminUsersService.getUserByUsername(this.username.value)];
                    case 1:
                        queryUser = _a.sent();
                        // Show error message if username is taken
                        if (queryUser) {
                            this.snackBar.open('Username is taken..', 'dismiss', { duration: 3000 });
                            return [2 /*return*/, false];
                        }
                        ;
                        // Generate a random password and log the created username
                        this.tempPassword = this.getRandomPassword();
                        userInfo = {
                            firstName: this.firstName.value,
                            lastName: this.lastName.value,
                            username: this.username.value,
                            password: this.tempPassword
                        };
                        return [4 /*yield*/, this.adminUsersService.createUser(userInfo)];
                    case 2:
                        createUserRequest = _a.sent();
                        if (!createUserRequest) {
                            this.snackBar.open('Something went wrong while creating the user...', 'dismiss', { duration: 3000 });
                            return [2 /*return*/, false];
                        }
                        ;
                        return [4 /*yield*/, this.adminUsersService.getUserByUsername(this.username.value)];
                    case 3:
                        createdUser = _a.sent();
                        if (!createdUser) {
                            this.snackBar.open('Something went wrong... Cannot find new user in database', 'dismiss', { duration: 3000 });
                            return [2 /*return*/, false];
                        }
                        //If everything is successful
                        this.createdUsername = createdUser.username;
                        this.snackBar.open('User has been successfully created!', 'dismiss', { duration: 3000 });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserRegistrationComponent.prototype.onClear = function () {
        this.firstName.reset();
        this.lastName.reset();
        this.username.reset();
    };
    UserRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-registration',
            template: __webpack_require__(/*! raw-loader!./user-registration.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user-registration/user-registration.component.html"),
            styles: [__webpack_require__(/*! ./user-registration.component.css */ "./src/app/components/user-registration/user-registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_admin_users_service__WEBPACK_IMPORTED_MODULE_6__["AdminUsersService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/services/admin-users.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/admin-users.service.ts ***!
  \*************************************************/
/*! exports provided: AdminUsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersService", function() { return AdminUsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var AdminUsersService = /** @class */ (function () {
    function AdminUsersService(http, usersService) {
        this.http = http;
        this.usersService = usersService;
        this.standardHttpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            })
        };
    }
    //Get a specific user by username
    AdminUsersService.prototype.getUserByUsername = function (username) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + '/users/username/' + username, this.standardHttpOptions).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    // GET a specific user by ID
    AdminUsersService.prototype.getUser = function (userID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + '/users/id/' + userID, this.standardHttpOptions).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    AdminUsersService.prototype.getAllUsers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + '/users/', this.standardHttpOptions).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    // PUT update another users information
    AdminUsersService.prototype.updateUserInfo = function (updatedUserInfo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + '/users/' + updatedUserInfo.id, updatedUserInfo, this.standardHttpOptions).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    // POST add a new user
    AdminUsersService.prototype.createUser = function (userInfo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + '/users/', userInfo, this.standardHttpOptions).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ;
    AdminUsersService.prototype.deleteUser = function (userID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiURL + '/users/' + userID, this.standardHttpOptions).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AdminUsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]])
    ], AdminUsersService);
    return AdminUsersService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.service */ "./src/app/services/users.service.ts");





var DataService = /** @class */ (function () {
    function DataService(usersService, http) {
        this.usersService = usersService;
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            })
        };
    }
    // GET all activities
    DataService.prototype.getActivities = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + '/activities', this.httpOptions).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // POST entry
    DataService.prototype.addEntry = function (entry) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + '/entries', entry, this.httpOptions).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // GET all submitted entries
    DataService.prototype.getEntries = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + '/entries', this.httpOptions).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // GET all sites
    DataService.prototype.getSites = function () {
        var sites = [
            { name: 'Wing', clinics: ['Mental Health', 'Physical Medicine'] },
            { name: 'Beale', clinics: ['Mental Health', 'Physical Medicine'] },
            { name: 'Ft. Gordon', clinics: ['Mental Health', 'Physical Medicine'] },
            { name: 'Langley', clinics: ['Mental Health', 'Physical Medicine'] },
            { name: 'Korea', clinics: ['Mental Health', 'Physical Medicine'] },
            { name: 'Ramstein', clinics: ['Mental Health', 'Physical Medicine'] },
            { name: 'Hawaii', clinics: ['Mental Health', 'Physical Medicine'] },
        ];
        return sites;
        // return await this.http.get<sites[]>(environment.apiURL + '/sites', this.httpOptions).toPromise();
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());

;
;


/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var UsersService = /** @class */ (function () {
    function UsersService(http, snackbar) {
        this.http = http;
        this.snackbar = snackbar;
        this.userLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.standardHttpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + localStorage.getItem('token')
            })
        };
    }
    UsersService.prototype.signIn = function (userInfo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var httpOptions;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        httpOptions = {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                'Content-Type': 'application/json'
                            })
                        };
                        return [4 /*yield*/, this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + '/signIn', userInfo, httpOptions).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // PUT Request
    UsersService.prototype.updateUserInfo = function (updatedUserInfo, passwordOnly) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!updatedUserInfo) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + '/users/' + this.mainUser.id, updatedUserInfo, this.standardHttpOptions).toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (!passwordOnly) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + '/users/' + this.mainUser.id, passwordOnly, this.standardHttpOptions).toPromise()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // Load the user into the global space
    UsersService.prototype.getUser = function (userToken) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            })
        };
        var jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        // Set the token to the local storage
        localStorage.setItem('token', userToken);
        // Decode the web token to get the id
        var decodedToken = jwtHelper.decodeToken(userToken);
        // Get request with the id
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL + '/users/id/' + decodedToken.userID, httpOptions).toPromise()
            .then(function (response) {
            _this.mainUser = response;
            _this.mainUser.id = decodedToken.userID;
            _this.mainUser.token = userToken;
            _this.userLoggedIn.next(true);
        })
            .catch(function (err) {
            console.log('UNHANDLED SERVER ERROR: ' + err);
            _this.snackbar.open('The was an error in retrieving user information... Please try reloading the page', 'dismiss', { duration: 5000 });
        });
    };
    ;
    Object.defineProperty(UsersService.prototype, "isLoggedIn", {
        get: function () {
            return this.userLoggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(UsersService.prototype, "goodToken", {
        get: function () {
            // If there is no token 
            if (!localStorage.getItem('token')) {
                return false;
            }
            ;
            var jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
            // If the token is not expired, it's a good token
            if (!jwtHelper.isTokenExpired(localStorage.getItem('token'))) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    UsersService.prototype.logout = function () {
        this.mainUser = null;
        this.userLoggedIn.next(false);
        localStorage.clear();
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], UsersService);
    return UsersService;
}());

;
;
;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiURL: 'http://localhost:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bacchusjackson/Code/Work/cure-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map