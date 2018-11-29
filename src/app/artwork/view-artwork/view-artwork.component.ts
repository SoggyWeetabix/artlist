import { Component, OnInit } from '@angular/core';
import { ArtworkService } from '../../services/artwork/artwork.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-artwork',
  templateUrl: './view-artwork.component.html',
  styleUrls: ['./view-artwork.component.css']
})
export class ViewArtworkComponent implements OnInit {

  public artPiece;
  public warning = '';

  constructor(private artworkService: ArtworkService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getArtPiece(this.route.snapshot.params.id);
  }

  getArtPiece(id: number) {
    this.artworkService.getArt(id).subscribe
    (
      data => { this.artPiece = data; },
      err => console.error(err),
      () => console.log('artwork loaded')
    );
  }

  delete(id: number)
  {
    // do some stuff to delete artwork
    this.artworkService.deleteArtwork(id).subscribe(
      result => {
        console.log(result);
        this.warning = 'The artwork has been deleted, please return to the main page';
      },
      error => {
        console.log(error);
        this.warning = 'Something went wrong, please try again later';
      }
    );

    
  }

}
