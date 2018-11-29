import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ArtworkService } from '../../services/artwork/artwork.service';
import { ArtistService } from '../../services/artist/artist.service';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})
export class ArtworkComponent implements OnInit {

  constructor(private artworkService: ArtworkService, private artistService: ArtistService) { }
  
  public artwork;
  public artist;

  ngOnInit() 
  {
    this.getArtwork();
  }

  getArtwork()
  {
    this.artworkService.getArtwork().subscribe
    (

      data => { this.artwork = data;},
      err => console.error(err),
      () => console.log('artwork loaded')
    );
  }

  getUrl(name: string)
  {
    var urlStart = '/artist/view/';
    var url = urlStart + this.getId(name);
    console.log(url);
    console.log(name);
    return url;
  }

  getId(name: string)
  {
    // this.artistService.getByName(name).subscribe(
    //   (res) => {console.log(res);}
    // );
    return '9';
  }

}
