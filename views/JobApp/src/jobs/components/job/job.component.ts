import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from '../../services/jobs';

@Component({
  selector: 'job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  @Input() job: any;
  process: number;
  private _jobStatusText: string;
  constructor(
      private _jobsService: JobsService
  ) {}
  get jobStatusText():string {
    if (this.job.jobStatus === 0) {
      return 'Staging';
    } else if(this.job.jobStatus === 1) {
      return 'Machining';
    } else if (this.job.jobStatus === 2) {
      return 'Quality';
    } else if (this.job.jobStatus === 3) {
      return 'Complete';
    } else if (this.job.jobStatus === 4) {
      return 'Shipped';
    }
  }

  ngOnInit() {
    this.process = this.job.process;
  }

  selectJob(jobId) {

  }

  changeProcess(processId) {
    let jobObjId = this.job._id;
    this.job.process = processId;
    this._jobsService.updateJob(this.job).subscribe((data) => {
      this.process = this.job.process;
    });
  }
}
