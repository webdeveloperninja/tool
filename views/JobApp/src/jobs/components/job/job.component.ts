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
  @Input() jobStatusText: string;
  @Input() activeJob: any;
  constructor(
      private _jobsService: JobsService
  ) {}


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
    


   setTimeout(function(){ document.getElementById('myTarget').scrollIntoView(false)}, 0);

  }
}
