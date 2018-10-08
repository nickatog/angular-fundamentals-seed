import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

@NgModule(
  {
    declarations: [
      PassengerCountComponent,
      PassengerDashboardComponent,
      PassengerDetailComponent
    ],
    imports: [
      CommonModule
    ],
    exports: [
      PassengerDashboardComponent
    ]
  }
)
export class PassengerDashboardModule {
}
