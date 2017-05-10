import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  jobTracker: boolean = false;
  addJob: boolean = false;
  hide: boolean = false;
  hideShowText: string = 'Hide';
  jobStatus: any = {
    machining: true,
    quality: true,
    staging: true,
    waiting: true,
    shipping: true
  };

  @Output('changeSidebarState')
  change: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output('changeJobStatus')
  changeJobStatus: EventEmitter<Object> = new EventEmitter<Object>();

  @Input() hideSidebar;



  constructor() { }

  ngOnInit() {
    this.jobTracker = true;
  }

  toggleHide() {
    if (this.jobTracker) {
      this.toggleAddJob();
    }
    if (this.addJob) {
      this.toggleAddJob();
    }
    if (this.hide) {
      this.hide = false;
      this.hideShowText = 'Hide';
      this.addJob = false;
      this.jobTracker = true;
      this.change.emit(true);
    } else {
      this.hide = true;
      this.hideShowText = 'Show';
      this.change.emit(false);
    }
  }

  toggleAddJob() {
    if (this.jobTracker) {
      this.toggleJobTracker();
    }
    if (this.addJob) {
      this.addJob = false;
    } else {
      this.addJob = true;
    }
  }
  toggleJobTracker() {
    if (this.addJob) {
      this.toggleAddJob();
    }
    if(this.jobTracker) {
      this.jobTracker = false;
    } else {
      this.jobTracker = true;
    }
  }

  updateJobStatus() {
    this.changeJobStatus.emit(this.jobStatus);
  }
}
