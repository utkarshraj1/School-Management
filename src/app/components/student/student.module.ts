import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentRoutingModule } from "./student-routing.module";
import { StudentComponent } from "./student.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [
        StudentComponent
    ],
    imports: [
        CommonModule,
        StudentRoutingModule,
        NgbModule,
        SharedModule
    ],
    providers: []
})
export class StudentModule { }