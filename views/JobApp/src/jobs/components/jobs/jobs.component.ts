import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs';
import { SettingsService } from '../../services/settings';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  private hideSidebar: boolean = true;
  private globalHideSidebar: boolean;

  jobStatusSettings;

  jobs = [];
  constructor(
      private _jobsService: JobsService,
      private _settingsService: SettingsService
  ) { }

  ngOnInit() {
    this._jobsService.getJobs().subscribe((jobs) => {
      console.log(jobs.jobs);
      this.jobs = jobs.jobs;
    });

    this._settingsService.getJobsStatusSettings().subscribe(jobStatusSettings => {
      this.jobStatusSettings = jobStatusSettings;
    })
  }


  changeSidebarState(event) {
    this.hideSidebar = event;
    if (this.hideSidebar) {
      this.globalHideSidebar = false;
    }
  }

  changeJobStatus(jobStatusObj) {
    this.jobStatusSettings = jobStatusObj;
  }

  setActiveJob(job) {
    this._jobsService.setActiveJob(job);
  }

}
