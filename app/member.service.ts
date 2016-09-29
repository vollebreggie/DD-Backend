//import { BackEndService } from './BackEnd.service';
//import {LoggerService} from './Logger.service';
import { member } from './member';
import { Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import 'rxjs-operators';
//import 'rxjs/Rx'; this will load all features


@Injectable()
export class MemberService {

    private membersUrl = 'api/members';
    private members: member[];

    constructor(private http: Http) { }


    getMember() {  
        
        return this.http.get(this.membersUrl)
            .map((responseData) => {
                return responseData.json();
            });
    }
       
    addMember(member) {
        console.log(member);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('api/members', JSON.stringify(member),
            { headers: headers })
            .map(response => { });
    }

    DeleteMember(member) {
        console.log(member);
        return this.http.delete(`api/members/${member.id}`)
            .map(response => { });
    }

    UpdateMember(member) {
        console.log(member);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put('api/members', JSON.stringify(member),
            { headers: headers })
            .map(response => {});
    }


    
}