import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { DoughnutComponent } from './components/doughnut/doughnut.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { LogoComponent } from './components/logo/logo.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBoxComponent } from './components/loading-box/loading-box.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NoticeBoardComponent } from './components/notice-board/notice-board.component';
import { RouterModule } from '@angular/router';
import { DataCardComponent } from './components/data-card/data-card.component';

@NgModule({
  declarations: [
    ShortenPipe,
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
    DoughnutComponent,
    LineChartComponent,
    LogoComponent,
    LoadingBoxComponent,
    SideNavComponent,
    NoticeBoardComponent,
    DataCardComponent,
  ],
  imports: [CommonModule, MaterialModule, HttpClientModule, RouterModule],
  exports: [
    MaterialModule,
    HeaderComponent,
    FooterComponent,
    ErrorPageComponent,
    DoughnutComponent,
    LineChartComponent,
    LogoComponent,
    LoadingBoxComponent,
    SideNavComponent,
    NoticeBoardComponent,
    DataCardComponent,
  ],
  providers: [],
})
export class SharedModule {}
