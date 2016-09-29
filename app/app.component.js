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
var core_1 = require('@angular/core');
var member_list_component_1 = require('./member-list.component');
var member_form_component_1 = require('./member-form.component');
var http_1 = require('@angular/http');
var Logger_service_1 = require('./Logger.service');
exports.routes = [
    { path: '', component: member_list_component_1.MemberListComponent },
    { path: './add', component: member_form_component_1.MemberFormComponent }
];
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'general-member-app',
            providers: [http_1.HTTP_PROVIDERS, Logger_service_1.LoggerService],
            directives: [member_list_component_1.MemberListComponent, member_form_component_1.MemberFormComponent],
            templateUrl: 'app/app.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
