import {LoggerService} from './Logger.service';
import { member } from './member';
import {Injectable} from '@angular/core';
import {Http, Response, Headers, HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BackEndService {

    constructor(private http: Http, private log: LoggerService) { }

    get(url) {

        return this.http.get(url)
            .map((responseData) => {
                return responseData.json();
            });
    }

}