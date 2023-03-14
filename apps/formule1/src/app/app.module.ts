import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { QRCodeModule } from 'angularx-qrcode';
import { MomentModule } from 'ngx-moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { CircuitDetailComponent } from './components/circuits/circuit-detail/circuit-detail.component';
import { CircuitListComponent } from './components/circuits/circuit-list/circuit-list.component';
import { CircuitMapComponent } from './components/circuits/circuit-map/circuit-map.component';
import { CircuitViewerComponent } from './components/circuits/circuit-viewer/circuit-viewer.component';
import { DriverBioComponent } from './components/drivers/driver-bio/driver-bio.component';
import { DriverDetailComponent } from './components/drivers/driver-detail/driver-detail.component';
import { DriverResultsComponent } from './components/drivers/driver-results/driver-results.component';
import { DriversListComponent } from './components/drivers/drivers-list/drivers-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { RaceBioComponent } from './components/races/race-bio/race-bio.component';
import { RaceDetailComponent } from './components/races/race-detail/race-detail.component';
import { RaceFastestLapsComponent } from './components/races/race-fastest-laps/race-fastest-laps.component';
import { RacePitstopsComponent } from './components/races/race-pitstops/race-pitstops.component';
import { RaceQualiResultComponent } from './components/races/race-quali-result/race-quali-result.component';
import { RaceResultComponent } from './components/races/race-result/race-result.component';
import { RaceSprintResultComponent } from './components/races/race-sprint-result/race-sprint-result.component';
import { SeasonConstructorStandingsComponent } from './components/seasons/season-constructor-standings/season-constructor-standings.component';
import { SeasonDetailComponent } from './components/seasons/season-detail/season-detail.component';
import { SeasonDriverStandingsComponent } from './components/seasons/season-driver-standings/season-driver-standings.component';
import { SeasonMapComponent } from './components/seasons/season-map/season-map.component';
import { SeasonsListComponent } from './components/seasons/seasons-list/seasons-list.component';
import { ShareComponent } from './components/share/share.component';
import { ThreeViewerComponent } from './components/three-viewer/three-viewer.component';
import { CircuitDetailFeatureComponent } from './features/circuits/circuit-detail-feature/circuit-detail-feature.component';
import { CircuitsFeatureComponent } from './features/circuits/circuits.component';
import { DriverDetailFeatureComponent } from './features/drivers/driver-detail-feature/driver-detail-feature.component';
import { DriversFeatureComponent } from './features/drivers/drivers.component';
import { HomeFeatureComponent } from './features/home/home.component';
import { RaceDetailFeatureComponent } from './features/races/race-detail/race-detail-feature.component';
import { SeasonDetailFeatureComponent } from './features/seasons/season-detail-feature/season-detail-feature.component';
import { SeasonsFeatureComponent } from './features/seasons/seasons.component';
import { TestFeatureComponent } from './features/test-feature/test-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioPlayerComponent,
    CircuitDetailComponent,
    CircuitDetailFeatureComponent,
    CircuitListComponent,
    CircuitMapComponent,
    CircuitsFeatureComponent,
    CircuitViewerComponent,
    DriverBioComponent,
    DriverDetailComponent,
    DriverDetailFeatureComponent,
    DriverResultsComponent,
    DriversFeatureComponent,
    DriversListComponent,
    FooterComponent,
    HeaderComponent,
    HomeFeatureComponent,
    ModalComponent,
    SeasonConstructorStandingsComponent,
    SeasonDetailComponent,
    SeasonDetailFeatureComponent,
    SeasonDriverStandingsComponent,
    SeasonMapComponent,
    SeasonsFeatureComponent,
    SeasonsListComponent,
    TestFeatureComponent,
    ThreeViewerComponent,
    ShareComponent,
    RaceDetailComponent,
    RacePitstopsComponent,
    RaceFastestLapsComponent,
    RaceResultComponent,
    RaceSprintResultComponent,
    RaceQualiResultComponent,
    RaceDetailFeatureComponent,
    RaceBioComponent,
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
    QRCodeModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
