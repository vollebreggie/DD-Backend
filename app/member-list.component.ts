import { Component } from '@angular/core';
import { MemberComponent } from './member.component';
import {MemberService} from './member.service';
import { member } from './member';

@Component({
    selector: 'member-list',
    directives: [MemberComponent],
    providers: [MemberService],
    templateUrl: 'app/member-list.component.html',
    styleUrls: ["app/member-list.component.css"]
})

export class MemberListComponent { 

    members: member[];
    
    constructor(private memberService: MemberService) { }

    ngOnInit() {  
        
        this.subscribeMembers();
    }

    onMemberDeleted(member) {
        this.memberService.DeleteMember(member)
            .subscribe(() => { });
    }
    
    subscribeMembers() {
        this.memberService.getMember()
            .subscribe(res => this.members = res);
    }
}