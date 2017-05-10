import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  private hideSidebar: boolean = true;
  private globalHideSidebar: boolean;



  jobStatus = {
    machining: true,
    staging: true,
    quality: true,
    shipping: true,
    waiting: true
  };

  jobs = [];
  constructor(
      private _jobsService: JobsService
  ) { }

  ngOnInit() {
    this._jobsService.getJobs().subscribe((jobs) => {
      console.log(jobs.jobs);
      this.jobs = jobs.jobs;
    })
  }

  jobClicked() {
    console.log('working');
  }

  changeSidebarState(event) {
    this.hideSidebar = event;
    if (this.hideSidebar) {
      this.globalHideSidebar = false;
    }
  }

  changeJobStatus(jobStatusObj) {
    this.jobStatus = jobStatusObj;
  }

}
