import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-job',
  templateUrl: './single-job.component.html',
  styleUrls: ['./single-job.component.scss']
})
export class SingleJobComponent implements OnInit {
  edit: boolean = false;
  editSaveText: string = 'Edit';
  jobId: any;
  job: any;
  form: FormGroup;



  constructor(
      private _jobsService: JobsService,
      private _route: ActivatedRoute,
      public fb: FormBuilder
  ) {
    this.form = this.fb.group({
      companyName: '',
      jobStatus: '',
      contactName: '',
      contactPhoneNumber: '',
      contactEmail: '',
      jobDescription: ''
    });
  }

  jobFormGroup: FormGroup;

  ngOnInit() {
    this.jobId = this._route.params.subscribe(params => {
      this.jobId = params['id']; // (+) converts string 'id' to a number
      this._jobsService.getJobById(this.jobId).subscribe((data) => {
        this.job = data.job;
        console.log('aosdifjosdfaij')
        this.form.patchValue({
          companyName: this.job.companyName,
          jobStatus: this.job.jobStatus,
          contactName: this.job.contactName,
          contactPhoneNumber: this.job.contactPhoneNumber,
          contactEmail: this.job.contactEmail,
          jobDescription: this.job.jobDescription
        });
      });
    });


  }

  toggleEdit() {
    if( this.edit ) {
      this.edit = false;
      this.saveJob();
      this.editSaveText = 'Edit';
    } else {
      this.edit = true;
      this.editSaveText = 'Save';
    }
  }

  saveJob(){
    console.log('job saved');
  }

  getCSSClasses(status:number) {
   if (status == 0) {
     return 'staging'
   } else if (status == 1) {
     return 'machining'
   } else if (status == 2) {
     return 'quality'
   } else if (status == 3) {
     return 'shipping'
   } else if (status == 4) {
     return 'waiting'
   } else if (status == 5) {
     return 'removed'
   }
  }

}
