import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs'
import 'rxjs/add/operator/map';


@Injectable()
export class JobsService {
    job: any;

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
        return this._http.get('http://localhost:3000/api/v1/jobs', {headers: headers}).map((res: Response) => { return res.json()});
        //  return this._http.get('http://localhost:8080/jobs', {headers: headers}).map((res: Response) => { return res.json()});
    }

    getJobById(id) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log(id);
        return this._http.get('http://localhost:8080/jobs/single/' + id, {headers: headers}).map((res: Response) => { return res.json()});
    }

    updateJob(job) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('http://localhost:3000/api/v1/job', job, {headers: headers}) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...
    }
}




