import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {ScrollToModule} from 'ng2-scroll-to';


import { AddJobComponent } from'./components/add-job/add-job.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobComponent } from './components/job/job.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from './filter.pipe';
import { JobStatusPipe } from './job-status.pipe';
import { JobsService } from './services/jobs';
import { SettingsService } from './services/settings';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { JobTracker } from './components/job-tracker/job-tracker.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ScrollToModule.forRoot()
    ],
    declarations: [
        JobComponent,
        AddJobComponent,
        SidebarComponent,
        JobsComponent,
        JobTracker,
        FilterPipe,
        JobStatusPipe
    ],
    providers: [
        JobsService,
        SettingsService
    ],
    exports: [
        JobsComponent,
        JobComponent,
        SidebarComponent,
        JobTracker
    ]
})
export class JobsModule {}