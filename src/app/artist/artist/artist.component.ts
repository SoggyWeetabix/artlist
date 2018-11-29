import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../services/artist/artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
  }

}
