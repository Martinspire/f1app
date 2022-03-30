import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {DriverBioComponent} from './components/drivers/driver-bio/driver-bio.component';
import {DriversComponent} from './features/drivers/drivers.component';
import {DriverDetailsComponent} from './components/drivers/driver-details/driver-details.component';
import {DriverHistoryComponent} from './components/drivers/driver-history/driver-history.component';
import {DriversListComponent} from './components/drivers/drivers-list/drivers-list.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './features/home/home.component';
import {NgModule} from '@angular/core';
import {SeasonDetailComponent} from './components/seasons/season-detail/season-detail.component';
import {SeasonsListComponent} from './components/seasons/seasons-list/seasons-list.component';
import {TracksComponent} from './features/tracks/tracks.component';
import {TrackDetailsComponent} from './components/tracks/track-details/track-details.component';
import {TrackListComponent} from './components/tracks/track-list/track-list.component';
import {TrackMapComponent} from './components/tracks/track-map/track-map.component';
import {TrackOverviewComponent} from './components/tracks/track-overview/track-overview.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

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
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
