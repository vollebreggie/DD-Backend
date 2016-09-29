import { Component, OnInit } from '@angular/core';
import {member} from './member';
import { NgForm }    from '@angular/forms';
import {MemberService} from './member.service';

@Component({
    selector: "member-form",
  
    providers: [MemberService],
    templateUrl: "app/member-form.component.html",
    styleUrls: ["app/form.css"]
})

export class MemberFormComponent {  

    constructor(private memberService: MemberService) { }

    Member : member;

    Create(event) {
        this.Member = new member(1, "henk");
        this.memberService.addMember(this.Member).subscribe();
    }

    Update(event) {
        this.Member = new member(1, "henk");
        this.memberService.UpdateMember(this.Member).subscribe();
    }
}
    
