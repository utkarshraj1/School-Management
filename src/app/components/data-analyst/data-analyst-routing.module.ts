import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DataAnalystComponent } from "./data-analyst.component";

const routes: Routes = [
    { path: '', component: DataAnalystComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DataAnalystRoutingModule { }