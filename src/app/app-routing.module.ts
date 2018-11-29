import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './artist/artist/artist.component';
import { ArtworkComponent } from './artwork/artwork/artwork.component';
import { NewArtworkComponent } from './artwork/new-artwork/new-artwork.component';
import { ViewArtworkComponent } from './artwork/view-artwork/view-artwork.component';
import {EditArtworkComponent} from './artwork/edit-artwork/edit-artwork.component';
import { HomeComponent } from './home/home.component';
import { NewArtistComponent } from './artist/new-artist/new-artist.component';
import { ViewArtistComponent } from './artist/view-artist/view-artist.component';
import { EditArtistComponent } from './artist/edit-artist/edit-artist.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'artwork/edit/:id',
    component: EditArtworkComponent
  },
  {
    path: 'artwork/view/:id',
    component: ViewArtworkComponent
  },
  {
    path: 'artist/edit/:id',
    component: EditArtistComponent
  },
  {
    path: 'artist/view/:id',
    component: ViewArtistComponent
  },
  {
    path: 'artwork/new',
    component: NewArtworkComponent
  },
  {
    path: 'artist/new',
    component: NewArtistComponent
  },
  {
    path: 'artwork',
    component: ArtworkComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
