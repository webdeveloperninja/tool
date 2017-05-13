import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
import { JobsService } from '../../services/jobs';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  jobForm: FormGroup;

  jobTracker: boolean = false;
  addJob: boolean = false;
  hide: boolean = false;
  hideShowText: string = 'Hide';
  activeJob: any;

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



  constructor(
      private _jobsService: JobsService,
      private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.jobForm = this.fb.group({
      companyName: '',
      jobName: '',
      contactName: '',
      contactEmail: '',
      jobId: '',
      process: ''
    });
  }

  ngOnInit() {
    this.jobTracker = true;
    this._jobsService.getActiveJob().subscribe(job => {
      this.activeJob = job;
      this.jobForm.setValue({
        companyName: this.activeJob.companyName || '',
        jobName: this.activeJob.jobName || '',
        contactName: this.activeJob.contactName || '',
        contactEmail: this.activeJob.contactEmail || '',
        jobId: this.activeJob.jobId || '',
        process: this.activeJob.process || ''
      });
    });
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

  updateJob() {
  }
}
