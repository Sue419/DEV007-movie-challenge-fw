import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiKey = 'ea8e99ffef86979c4eca450da0fe51af'; //clave de API de TMDb
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    // Crea un objeto HttpParams y establece los parámetros de consulta
    const params = new HttpParams().set('api_key', this.apiKey);
    // Realiza la solicitud HTTP utilizando los parámetros de consulta
    return this.http.get(`${this.baseUrl}/movie/popular`, { params });
  }

  
}


