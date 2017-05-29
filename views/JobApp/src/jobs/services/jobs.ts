import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { SidebarService } from './sidebar';
import {Observable, BehaviorSubject} from 'rxjs'
import 'rxjs/add/operator/map';


@Injectable()
export class JobsService {
    job: any;
    currentJob: any;
    $currentJob = new BehaviorSubject("");
    $jobs = new BehaviorSubject(null);

    constructor(
        private _http: Http,
        private _sidebarService: SidebarService
        ) {
    }

    addJob(job) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/jobs/add-job', job, {headers: headers}) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...
    }

    getJobs() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.get('/api/v1/jobs', {headers: headers, withCredentials: true}).map((res: Response) => { 
            this.$jobs.next(res.json().jobs);
            return res.json()
        });
    }

    // updateJob(job) {
    //     let headers = new Headers();
    //             headers.append('Content-Type', 'application/json');

    //     console.log('fucked');
    //     return this._http.post('http://localhost:3000/api/v1/job', job, {headers: headers}).map(res => res.json());
    // }

    updateJob(job) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/v1/job', job, {headers: headers})
            .map((res: Response) =>  {
                return res.json() 
        })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); 
    }

    setActiveJob(job) {
        this.currentJob = job;
        this._sidebarService.openSidebar();
        this.$currentJob.next(job);
    }

    getActiveJob() {
        return this.$currentJob;
    }

    removeActiveJob() {
        this.currentJob = null;
        this.$currentJob.next(this.currentJob);
        this._sidebarService.shutSidebar();
    }
}




