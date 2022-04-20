import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
import { TrackDetailsComponent } from './components/tracks/track-details/track-details.component';
import { TrackListComponent } from './components/tracks/track-list/track-list.component';
import { TrackMapComponent } from './components/tracks/track-map/track-map.component';
import { TrackOverviewComponent } from './components/tracks/track-overview/track-overview.component';
import { DriversComponent } from './features/drivers/drivers.component';
import { HomeComponent } from './features/home/home.component';
import { TracksComponent } from './features/tracks/tracks.component';

@NgModule({
  declarations: [
    AppComponent,
    DriverBioComponent,
    DriversComponent,
    DriverDetailsComponent,
    DriverHistoryComponent,
    DriversListComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SeasonDetailComponent,
    SeasonsListComponent,
    TracksComponent,
    TrackDetailsComponent,
    TrackListComponent,
    TrackMapComponent,
    TrackOverviewComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
