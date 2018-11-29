import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArtistService } from '../../services/artist/artist.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-new-artist',
  templateUrl: './new-artist.component.html',
  styleUrls: ['./new-artist.component.css']
})
export class NewArtistComponent implements OnInit {

  artistform: FormGroup;
  validMessage = "";

  constructor(private artistService: ArtistService) { }

  ngOnInit() 
  {
    this.artistform = new FormGroup({
      name : new FormControl('', Validators.required),
      year : new FormControl('', Validators.required),
      nationality : new FormControl('', Validators.required),
      description : new FormControl('', Validators.required),
      url: new FormControl('', Validators.required)
    })
  }

  submitArtist()
  {
    if (this.artistform.valid)
    {
      this.validMessage = "Artist has been submitted, thank you";
      this.artistService.createArtist(this.artistform.value).subscribe(
        data => {
          this.artistform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    }
    else
    {
      this.validMessage = "Please fill out the form before submitting"
    }
  }

}
