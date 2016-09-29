import { Component, Input, Output, EventEmitter } from '@angular/core';
import { member } from './member';

@Component({
    selector: "member-item",
    templateUrl: "app/member.component.html",
    styleUrls: ["app/member.component.css"]
})

export class MemberComponent {
 
    

    @Input() model: member;
    @Output('deleted') delete = new EventEmitter();

    onDelete() {
        this.delete.emit(this.model);
       
    }
}