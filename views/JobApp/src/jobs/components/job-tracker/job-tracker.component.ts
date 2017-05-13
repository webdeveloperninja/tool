import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'job-tracker',
    templateUrl: './job-tracker.component.html',
    styleUrls: ['./job-tracker.component.scss']
})
export class JobTracker implements OnInit {
    jobStatusSettingsForm: FormGroup;

    jobStatusSettings: any = {
        machining: true,
        quality: true,
        staging: true,
        waiting: true,
        shipping: true
    };
    constructor(
        private _settingsService: SettingsService,
        private fb: FormBuilder
    ){

    }
    ngOnInit() {
        this.createForm();
        this._settingsService.getJobsStatusSettings().subscribe(jobStatusSettings => {
            this.jobStatusSettings = jobStatusSettings;
        });

        this.jobStatusSettingsForm.valueChanges.subscribe(jobStatusSettings => {
            this._settingsService.setJobStatusSettings(jobStatusSettings);
        });

        this.jobStatusSettingsForm.setValue({
            machining: this.jobStatusSettings.machining || true,
            quality: this.jobStatusSettings.quality || true,
            staging: this.jobStatusSettings.staging || true,
            waiting: this.jobStatusSettings.waiting || true,
            shipping: this.jobStatusSettings.shipping || true,
        });


    }

    createForm() {
        this.jobStatusSettingsForm = this.fb.group({
            machining: true,
            quality: true,
            staging: true,
            waiting: true,
            shipping: true
        });
    }
}
