import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable, BehaviorSubject} from 'rxjs'
import 'rxjs/add/operator/map';


@Injectable()
export class JobsService {
    job: any;
    currentJob: any;
    $currentJob = new BehaviorSubject("");

    constructor(private _http: Http) {
    }

    addJob(job) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('http://localhost:8080/jobs/add-job', job, {headers: headers}) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...
    }

    getJobs() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.get('http://localhost:3000/api/v1/jobs', {headers: headers, withCredentials: true}).map((res: Response) => { return res.json()});
        //  return this._http.get('http://localhost:8080/jobs', {headers: headers}).map((res: Response) => { return res.json()});
    }

    updateJob(job) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/v1/job', job, {headers: headers}) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...
    }

    setActiveJob(job) {
        this.currentJob = job;
        this.$currentJob.next(job);
    }

    getActiveJob() {
        return this.$currentJob;
    }
}




