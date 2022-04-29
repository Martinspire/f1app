import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { HeroUsers } from '@ng-icons/heroicons/outline';
import { MomentModule } from 'ngx-moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverBioComponent } from './components/drivers/driver-bio/driver-bio.component';
import { DriverDetailsComponent } from './components/drivers/driver-details/driver-details.component';
import { DriverHistoryComponent } from './components/drivers/driver-history/driver-history.component';
import { DriversListComponent } from './components/drivers/drivers-list/drivers-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SeasonDetailComponent } from './components/seasons/season-detail/season-detail.component';
import { SeasonsListComponent } from './components/seasons/seasons-list/seasons-list.component';
import { CircuitDetailsComponent } from './components/circuits/circuit-details/circuit-details.component';
import { CircuitListComponent } from './components/circuits/circuit-list/circuit-list.component';
import { CircuitMapComponent } from './components/circuits/circuit-map/circuit-map.component';
import { CircuitOverviewComponent } from './components/circuits/circuit-overview/circuit-overview.component';
import { DriversFeatureComponent } from './features/drivers/drivers.component';
import { HomeFeatureComponent } from './features/home/home.component';
import { SeasonsFeatureComponent } from './features/seasons/seasons.component';
import { CircuitsFeatureComponent } from './features/circuits/circuits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DriverBioComponent,
    DriversFeatureComponent,
    DriverDetailsComponent,
    DriverHistoryComponent,
    DriversListComponent,
    FooterComponent,
    HeaderComponent,
    HomeFeatureComponent,
    SeasonDetailComponent,
    SeasonsFeatureComponent,
    SeasonsListComponent,
    CircuitsFeatureComponent,
    CircuitDetailsComponent,
    CircuitListComponent,
    CircuitMapComponent,
    CircuitOverviewComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MomentModule,
    NgIconsModule.withIcons({ HeroUsers }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
