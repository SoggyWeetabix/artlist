import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../services/artist/artist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-artist',
  templateUrl: './view-artist.component.html',
  styleUrls: ['./view-artist.component.css']
})
export class ViewArtistComponent implements OnInit {

  public artist;

  constructor(private artistService: ArtistService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getArtist(this.route.snapshot.params.id);
    console.log(this.artist);
  }

  getArtist(id: number) {
    this.artistService.getArtist(id).subscribe
    (
      data => { this.artist = data;},
      err => console.error(err),
      () => console.log('artwork loaded')
    );
  }

}
