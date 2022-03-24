import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./components/courses/courses.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ExamResultsComponent } from "./components/exam-results/exam-results.component";
import { PersonalInfoComponent } from "./components/personal-info/personal-info.component";
import { StudentComponent } from "./student.component";

const routes: Routes = [
    {
        path: '', component: StudentComponent, children: [
            { path: '', component: DashboardComponent },
            { path: 'courses', component: CoursesComponent },
            { path: 'exam-results', component: ExamResultsComponent },
            { path: 'info', component: PersonalInfoComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule { }