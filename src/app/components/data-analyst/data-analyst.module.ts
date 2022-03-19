import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataAnalystRoutingModule } from "./data-analyst-routing.module";
import { DataAnalystComponent } from "./data-analyst.component";

@NgModule({
    declarations: [
        DataAnalystComponent
    ],
    imports: [
        CommonModule,
        DataAnalystRoutingModule
    ],
    providers: []
})
export class DataAnalystModule { }