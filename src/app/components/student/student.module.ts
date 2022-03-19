import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentRoutingModule } from "./student-routing.module";
import { StudentComponent } from "./student.component";

@NgModule({
    declarations: [
        StudentComponent
    ],
    imports: [
        CommonModule,
        StudentRoutingModule
    ],
    providers: []
})
export class StudentModule { }