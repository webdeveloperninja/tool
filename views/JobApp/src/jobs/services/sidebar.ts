import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable, BehaviorSubject} from 'rxjs'
import 'rxjs/add/operator/map';


@Injectable()
export class SidebarService {
    sidebarHidden: boolean = false;
    activeJobVisible: boolean = false;
    addJobVisible: boolean = false;

    $sidebarHidden = new BehaviorSubject(null);


    constructor(private _http: Http) {
    }

    shutSidebar() {
        this.$sidebarHidden.next(false);
    }

    openSidebar() {
        this.$sidebarHidden.next(true);
    }

    getSidebarHiddenState() {
        console.log('asdfoij');
        return this.$sidebarHidden;
    }
}




