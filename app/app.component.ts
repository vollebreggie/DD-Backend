import { Component } from '@angular/core';
import { MemberListComponent } from './member-list.component';
import { MemberFormComponent } from './member-form.component';
import { HTTP_PROVIDERS } from '@angular/http';
import {LoggerService} from './Logger.service';
import { RouterConfig } from '@angular/router';

export const routes: RouterConfig = [
    { path: '', component: MemberListComponent },
    { path: './add', component: MemberFormComponent }
];
    
@Component({
    selector: 'general-member-app',
    providers: [HTTP_PROVIDERS, LoggerService],
    directives: [MemberListComponent, MemberFormComponent],  
    templateUrl: 'app/app.component.html',
   // styleUrls: ['app/app.component.css']

})
export class AppComponent {
   
    
 
   
}