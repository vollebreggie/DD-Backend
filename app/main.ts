
/// <reference path="../typings/index.d.ts" />
import {LoggerService} from './Logger.service';
import { BackEndService } from './BackEnd.service';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import {MemberService} from './member.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
bootstrap(AppComponent);

bootstrap(AppComponent, [
    LoggerService,
    HTTP_PROVIDERS,
    BackEndService,
    disableDeprecatedForms(),
    provideForms(),
    ROUTER_DIRECTIVES
])
    .catch((err: any) => console.error(err));