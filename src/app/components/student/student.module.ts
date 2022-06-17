import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ExamResultsComponent } from './components/exam-results/exam-results.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';

@NgModule({
  declarations: [
    StudentComponent,
    DashboardComponent,
    CoursesComponent,
    ExamResultsComponent,
    PersonalInfoComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    NgbModule,
    SharedModule,
  ],
  providers: [CookieService],
})
export class StudentModule {}
