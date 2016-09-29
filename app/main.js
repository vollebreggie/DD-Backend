"use strict";
/// <reference path="../typings/index.d.ts" />
var Logger_service_1 = require('./Logger.service');
var BackEnd_service_1 = require('./BackEnd.service');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent);
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    Logger_service_1.LoggerService,
    http_1.HTTP_PROVIDERS,
    BackEnd_service_1.BackEndService,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    router_1.ROUTER_DIRECTIVES
])
    .catch(function (err) { return console.error(err); });
