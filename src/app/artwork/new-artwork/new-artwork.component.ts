import { Component, OnInit } from '@angular/core';
import { ArtworkService } from '../../services/artwork/artwork.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-new-artwork',
  templateUrl: './new-artwork.component.html',
  styleUrls: ['./new-artwork.component.css']
})
export class NewArtworkComponent implements OnInit {

  artform: FormGroup;
  validMessage: string = "";

  constructor(private artworkService: ArtworkService) { }

  ngOnInit() 
  {
    this.artform = new FormGroup({
      name: new FormControl('', Validators.required),
      artist: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required)
    })
  }

  submitArtwork()
  {
    if (this.artform.valid)
    {
      this.validMessage = "Artwork has been submitted, thank you";
      this.artworkService.createArtwork(this.artform.value).subscribe(
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
      this.validMessage = "Please fill out the form before submitting";
    }
  }

}
