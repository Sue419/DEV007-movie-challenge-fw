import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-moviedata',
  templateUrl: './moviedata.component.html',
  styleUrls: ['./moviedata.component.css']
})
export class MoviedataComponent implements OnInit {
  movieId!: number;
  movieDetails: any; // Debes definir una estructura de datos adecuada para almacenar los detalles de la película.
  posterUrl: string = '';
  trailerUrl: string = '';
  genres: string = '';
  sinopsis: string = '';
  ranking: number = 0;
  castList: any[] = [];

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      // Recupera el ID de la película de los parámetros de la URL
      this.movieId = +params['id'];

      // Carga los detalles de la película utilizando el servicio MoviesService
      this.moviesService.getMovieDetails(this.movieId).subscribe((data: any) => {
        this.movieDetails = data; // Asegúrate de tener una estructura adecuada para almacenar los detalles de la película.
        this.posterUrl = this.getPosterUrl(data.poster_path);
        this.trailerUrl = this.getTrailerUrl(data.videos.results);
        this.genres = this.getGenres(data.genres);
        this.sinopsis = this.movieDetails.overview;
        this.ranking = this.movieDetails.vote_average;
        this.castList = this.movieDetails.credits.cast;
      });
    });
  }

  // Método para construir la URL del póster
  getPosterUrl(posterPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/original';
    return posterPath ? `${baseUrl}${posterPath}` : ''; // Si no hay póster, retorna una cadena vacía
  }

  // Método para obtener una cadena de géneros
  getGenres(genres: any[]): string {
    return genres.map((genre: any) => genre.name).join(', ');
  }
  
  // Método para obtener el enlace al tráiler
  getTrailerUrl(videos: any[]): string {
    if (videos && videos.length > 0) {
      // Verificar si hay al menos un video en el arreglo
      // Aquí puedes agregar lógica para seleccionar un video específico si hay más de uno
      return `https://www.youtube.com/watch?v=${videos[0].key}`;
    } 
    return ''; //
  }
}