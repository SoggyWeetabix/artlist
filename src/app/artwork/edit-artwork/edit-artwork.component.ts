import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArtworkService } from '../../services/artwork/artwork.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-artwork',
  templateUrl: './edit-artwork.component.html',
  styleUrls: ['./edit-artwork.component.css']
})
export class EditArtworkComponent implements OnInit {

  artform: FormGroup;
  validMessage: string = "";
  public artPiece;
  id: number;

  constructor(private artworkService: ArtworkService, private route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.id = this.route.snapshot.params.id;
    this.getArtPiece(this.id);
    this.createArtForm();
  }

  createArtForm()
  {
    this.artform = new FormGroup({
      id: new FormControl(this.id),
      name: new FormControl('', Validators.required),
      artist: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required)
    })
  }

  getArtPiece(id: number) {
    this.artworkService.getArt(id).subscribe
    (
      data => { 
                this.artform.setValue(data);
                this.artPiece = data;
              },
      err => console.error(err),
      () => console.log('artwork loaded')
    );
  }

  submitEditedArtwork() 
  {
    console.log(this.artform.status);
    if (this.artform.valid)
    {
      this.validMessage = "Artwork has been changed successfully";
      this.artworkService.updateArtwork(this.artform.value, this.id).subscribe(
        data => {
          this.artform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    }
    else
    {
      this.validMessage = "Something went wrong, please try again later";
    }
  }

}
