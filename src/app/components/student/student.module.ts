import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentRoutingModule } from "./student-routing.module";
import { StudentComponent } from "./student.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";

@NgModule({
    declarations: [
        StudentComponent
    ],
    imports: [
        CommonModule,
        StudentRoutingModule,
        FormsModule,
        NgbModule,
        SharedModule,
    ],
    providers: [CookieService]
})
export class StudentModule { }