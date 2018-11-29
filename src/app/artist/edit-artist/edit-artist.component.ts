import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArtistService } from '../../services/artist/artist.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-artist',
  templateUrl: './edit-artist.component.html',
  styleUrls: ['./edit-artist.component.css']
})
export class EditArtistComponent implements OnInit 
{

  artistform: FormGroup;
  validMessage: string = '';
  public artist;
  id: number;

  constructor(private artistService: ArtistService, private route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.id = this.route.snapshot.params.id;
    this.getArtist(this.id);
    this.createArtistForm();
    console.log('completed ngOnInit');
  }

  createArtistForm()
  {
    this.artistform = new FormGroup({
      id: new FormControl(this.id),
      name : new FormControl('', Validators.required),
      year : new FormControl('', Validators.required),
      nationality : new FormControl('', Validators.required),
      description : new FormControl('', Validators.required),
      url: new FormControl('', Validators.required)
    })
  }

  getArtist(id: number)
  {
    this.artistService.getArtist(id).subscribe
    (
      data => {
                this.artistform.setValue(data);
                this.artist = data; 
              },
      err => console.error(err),
      () => console.log('artist loaded')
    );
  }

  submitEditedArtist()
  {
    console.log(this.artistform.status);
    if(this.artistform.valid)
    {
      this.validMessage = "Artist has been changed successfully";
      this.artistService.updateArtist(this.artistform.value, this.id).subscribe(
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
      this.validMessage = "Something went wrong, please try again later";
    }
  }

}
