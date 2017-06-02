import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
import { SidebarService } from '../../services/sidebar';
import { JobsService } from '../../services/jobs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  jobForm: FormGroup;
  activeJob: any;
  
  private _sidebarHidden = false;
  get sidebarHidden() {
    return this._sidebarHidden;
  }
  set sidebarHidden(val: boolean) {
    this._sidebarHidden = val;
  }

  constructor(
      private _jobsService: JobsService,
      private _fb: FormBuilder,
      private _sidebarService: SidebarService
  ) {
    this.createForm();
  }

  createForm() {
    this.jobForm = this._fb.group({
      companyName: '',
      jobName: '',
      contactName: '',
      contactEmail: '',
      jobId: '',
      process: ''
    });
  }

  ngOnInit() {    
    this._jobsService.getActiveJob().subscribe(job => {
      this.activeJob = job;
      if (this.activeJob) {
        this.jobForm.setValue({
          companyName: this.activeJob.companyName || '',
          jobName: this.activeJob.jobName || '',
          contactName: this.activeJob.contactName || '',
          contactEmail: this.activeJob.contactEmail || '',
          jobId: this.activeJob.jobId || '',
          process: this.activeJob.process || ''
        });
      }
    });

    this._sidebarService.getSidebarHiddenState().subscribe(data => {
      this.sidebarHidden = data;
    });
    
  }

  removeActiveJob() {
    this._jobsService.removeActiveJob();
  }

  updateJob() {
    console.log('code');
    let job = {
      companyName: this.jobForm.value.companyName,
      jobName: this.jobForm.value.jobName,
      contactName: this.jobForm.value.contactName,
      contactEmail: this.jobForm.value.contactEmail,
      jobId: this.jobForm.value.jobId,
      process: this.jobForm.value.process,
      userId: this.activeJob.userId,
      _id: this.activeJob._id
    }

    this._jobsService.updateJob(job).subscribe((data) => {
      this._jobsService.getJobs().subscribe(data => {
      })
    });
 

  }

}
