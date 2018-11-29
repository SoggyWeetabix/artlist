import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class ArtworkService {

  constructor(private http: HttpClient) { }

  getArtwork()
  {
    return this.http.get('/server/api/v1/artwork');
  }

  getArt(id: number)
  {
    return this.http.get('/server/api/v1/artwork/' + id);
  }

  createArtwork(art)
  {
    let body = JSON.stringify(art);
    return this.http.post('/server/api/v1/artwork', body, httpOptions);
  }

  updateArtwork(art, id: number)
  {
    let body = JSON.stringify(art);
    return this.http.put('/server/api/v1/artwork/' + id, body, httpOptions);
  }

  deleteArtwork(id: number)
  {
    return this.http.delete('/server/api/v1/artwork/' + id);
  }

}
