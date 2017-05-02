import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  @Input() job: any;
  private _jobStatusText: string;

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
  }

  selectJob(jobId) {

  }

}
