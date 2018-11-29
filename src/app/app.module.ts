import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ArtistService } from './services/artist/artist.service';
import { ArtworkService } from './services/artwork/artwork.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ArtistComponent } from './artist/artist/artist.component';
import { ArtworkComponent } from './artwork/artwork/artwork.component';
import { NewArtworkComponent } from './artwork/new-artwork/new-artwork.component';
import { ViewArtworkComponent } from './artwork/view-artwork/view-artwork.component';
import { EditArtworkComponent } from './artwork/edit-artwork/edit-artwork.component';
import { HomeComponent } from './home/home.component';
import { NewArtistComponent } from './artist/new-artist/new-artist.component';
import { ViewArtistComponent } from './artist/view-artist/view-artist.component';
import { EditArtistComponent } from './artist/edit-artist/edit-artist.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArtistComponent,
    ArtworkComponent,
    NewArtworkComponent,
    ViewArtworkComponent,
    EditArtworkComponent,
    HomeComponent,
    NewArtistComponent,
    ViewArtistComponent,
    EditArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ArtistService,
    ArtworkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
