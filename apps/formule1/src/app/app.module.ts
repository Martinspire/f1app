import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgIconsModule } from '@ng-icons/core';
import { HeroUsers } from '@ng-icons/heroicons/outline';
import { MomentModule } from 'ngx-moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverBioComponent } from './components/drivers/driver-bio/driver-bio.component';
import { DriverDetailComponent } from './components/drivers/driver-detail/driver-detail.component';
import { DriverHistoryComponent } from './components/drivers/driver-history/driver-history.component';
import { DriversListComponent } from './components/drivers/drivers-list/drivers-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SeasonDetailComponent } from './components/seasons/season-detail/season-detail.component';
import { SeasonsListComponent } from './components/seasons/seasons-list/seasons-list.component';
import { CircuitDetailComponent } from './components/circuits/circuit-detail/circuit-detail.component';
import { CircuitListComponent } from './components/circuits/circuit-list/circuit-list.component';
import { CircuitMapComponent } from './components/circuits/circuit-map/circuit-map.component';
import { CircuitOverviewComponent } from './components/circuits/circuit-overview/circuit-overview.component';
import { DriversFeatureComponent } from './features/drivers/drivers.component';
import { HomeFeatureComponent } from './features/home/home.component';
import { SeasonsFeatureComponent } from './features/seasons/seasons.component';
import { CircuitsFeatureComponent } from './features/circuits/circuits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeasonDetailFeatureComponent } from './features/seasons/season-detail-feature/season-detail-feature.component';
import { DriverDetailFeatureComponent } from './features/drivers/driver-detail-feature/driver-detail-feature.component';
import { CircuitDetailFeatureComponent } from './features/circuits/circuit-detail-feature/circuit-detail-feature.component';
import { SeasonDriverStandingsComponent } from './components/seasons/season-driver-standings/season-driver-standings.component';
import { SeasonConstructorStandingsComponent } from './components/seasons/season-constructor-standings/season-constructor-standings.component';
import { SeasonMapComponent } from './components/seasons/season-map/season-map.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DriverBioComponent,
    DriversFeatureComponent,
    DriverDetailComponent,
    DriverHistoryComponent,
    DriversListComponent,
    FooterComponent,
    HeaderComponent,
    HomeFeatureComponent,
    SeasonDetailComponent,
    SeasonsFeatureComponent,
    SeasonsListComponent,
    CircuitsFeatureComponent,
    CircuitDetailComponent,
    CircuitListComponent,
    CircuitMapComponent,
    CircuitOverviewComponent,
    SeasonDetailFeatureComponent,
    DriverDetailFeatureComponent,
    CircuitDetailFeatureComponent,
    SeasonDriverStandingsComponent,
    SeasonConstructorStandingsComponent,
    SeasonMapComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LeafletModule,
    MomentModule,
    NgIconsModule.withIcons({ HeroUsers }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
