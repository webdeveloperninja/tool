import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable, BehaviorSubject} from 'rxjs'
import 'rxjs/add/operator/map';


@Injectable()
export class SettingsService {

    $jobsSettings = new BehaviorSubject({});

    constructor(private _http: Http) {
    }

    getJobsStatusSettings() {
        return this.$jobsSettings;
    }

    setJobStatusSettings(jobsStatusSettingObj) {
        for(var prop in jobsStatusSettingObj){
            if(jobsStatusSettingObj[prop] === ''){
                jobsStatusSettingObj[prop] = false;
                continue;
            }
        }
        this.$jobsSettings.next(jobsStatusSettingObj);
    }
}




