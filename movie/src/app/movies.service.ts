import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiKey = 'ea8e99ffef86979c4eca450da0fe51af'; // Reemplaza con tu propia clave de API de TMDb
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getPopularMovies() {
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`;
    return this.http.get(url);
  }
}

