import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AddJobComponent } from'./components/add-job/add-job.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobComponent } from './components/job/job.component';
import { RouterModule, Routes } from '@angular/router';
import { SingleJobComponent } from './components/single-job/single-job.component';
import { FilterPipe } from './filter.pipe';
import { JobStatusPipe } from './job-status.pipe';
import { JobsService } from './services/jobs';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        SingleJobComponent,
        JobComponent,
        AddJobComponent,
        JobsComponent,
        FilterPipe,
        JobStatusPipe
    ],
    providers: [JobsService],
    exports: [JobsComponent, JobComponent, SingleJobComponent]
})
export class JobsModule {}