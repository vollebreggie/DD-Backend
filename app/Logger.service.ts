import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {

    constructor() { }

    ngOnInit() { }

    log(log) {
        console.log('log message: ' + log);
    }

    logError(err) {
        console.error('error message: ' + err);
    }
}