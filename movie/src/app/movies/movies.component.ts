import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service'; // Importa tu servicio de películas

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[] = []; // Arreglo de películas
  filteredMovies: any[] = []; // Arreglo de películas filtradas

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    // Obtén las películas populares desde tu servicio
    this.moviesService.getPopularMovies().subscribe((data: any) => {
      this.movies = data.results; // Asigna las películas obtenidas desde la API
      this.filteredMovies = [...this.movies]; // Inicialmente, muestra todas las películas
    });
  }

  filterByGenre(genreId: number) {
    // Filtra las películas por género
    this.moviesService.getMoviesByGenre(genreId).subscribe((data: any) => {
      this.filteredMovies = data.results;
    });
  }

  getPosterUrl(posterPath: string): string {
      const baseUrl = 'https://image.tmdb.org/t/p/w500'; // TMDb base image URL para posters de 500px de ancho
      return `${baseUrl}${posterPath}`;
  } 
}

