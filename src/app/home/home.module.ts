import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, OverviewComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
