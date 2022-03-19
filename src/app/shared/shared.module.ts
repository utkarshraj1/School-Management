import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./modules/material.module";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { DoughnutComponent } from './components/doughnut/doughnut.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { DataTableComponent } from './components/data-table/data-table.component';

@NgModule({
    declarations: [
        ShortenPipe,
        HeaderComponent,
        FooterComponent,
        ErrorPageComponent,
        DoughnutComponent,
        LineChartComponent,
        DataTableComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        MaterialModule,
        HeaderComponent,
        FooterComponent,
        ErrorPageComponent,
        DoughnutComponent,
        LineChartComponent,
        DataTableComponent
    ],
    providers: []
})
export class SharedModule { }