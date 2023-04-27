import { NgModule } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

import { ContentMainComponent } from './components/content-main/content-main.component';
import { FlightsFormComponent } from './components/flights-form/flights-form.component';
import { UserAuthenticationModule } from '../user-authentication/user-authentication.module';
import { BookingViewModule } from '../booking/booking.module';
import { PassengersModule } from '../passengers/passengers.module';
import { SummaryModule } from '../summary/summary.module';

@NgModule({
  declarations: [ContentMainComponent, FlightsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    UserAuthenticationModule,
    BookingViewModule,
    PassengersModule,
    SummaryModule,
  ],
})
export class MainPageModule {}
