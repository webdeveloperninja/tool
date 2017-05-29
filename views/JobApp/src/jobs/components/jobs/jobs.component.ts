import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs';
import { SettingsService } from '../../services/settings';
import { SidebarService } from '../../services/sidebar';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  activeJob: any;
  sidebarHidden: boolean = false;

  private globalHideSidebar: boolean;

  jobStatusSettings;

  jobs = [];
  constructor(
      private _jobsService: JobsService,
      private _settingsService: SettingsService,
      private _sidebarService: SidebarService
  ) { }

  ngOnInit() {
    this._jobsService.$jobs.subscribe(jobs => {
      if (jobs) {
        this.jobs = jobs;
      }
    });

    this._jobsService.getJobs().subscribe((jobs) => {
      // this.jobs = jobs.jobs;
    });


    this._settingsService.getJobsStatusSettings().subscribe(jobStatusSettings => {
      this.jobStatusSettings = jobStatusSettings;
    });

    this._jobsService.getActiveJob().subscribe(activeJob => {
      this.activeJob = activeJob;
    });

    this._sidebarService.getSidebarHiddenState().subscribe(data => {
      this.sidebarHidden = data;
    });
    this.sidebarHidden = false;
  }



  changeJobStatus(jobStatusObj) {
    this.jobStatusSettings = jobStatusObj;
  }

  setActiveJob(job) {
    this._jobsService.setActiveJob(job);
    setTimeout(function(){ document.getElementById('myTarget').scrollIntoView(false)}, 0);
  }

}
