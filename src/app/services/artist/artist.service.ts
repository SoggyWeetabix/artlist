import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class ArtistService {

  constructor(private http: HttpClient) { }

  getArtist(id: number)
  {
    return this.http.get('/server/api/v1/artist/' + id);
  }

  createArtist(art)
  {
    let body = JSON.stringify(art);
    return this.http.post('/server/api/v1/artist', body, httpOptions);
  }

  updateArtist(artist, id: number)
  {
    let body = JSON.stringify(artist);
    return this.http.put('/server/api/v1/artist/' + id, body, httpOptions);
  }

  getByName(name: string)
  {
    return this.http.get('server/api/v1/artist/byName/' + name);
  }

}
