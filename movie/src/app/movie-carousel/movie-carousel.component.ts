import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service'; // ubicación del servicio

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.css']
})
export class MovieCarouselComponent implements OnInit {
  movies: any[] = [];
  currentSlideIndex: number = 0;
  selectedMovie: any; // Variable para almacenar la película seleccionada

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    // En el método ngOnInit, llama al servicio para obtener películas
    this.moviesService.getPopularMovies().subscribe((data: any) => {
      this.movies = data.results;
      console.log(this.movies);
    });
  }

  getBackdropUrl(backdropPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/original'; // TMDb base image URL para backdrops originales
    return `${baseUrl}${backdropPath}`;
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index; // Actualiza el índice del slider
    this.selectedMovie = this.movies[index]; // Actualiza la película seleccionada
    console.log(this.selectedMovie); // Imprime la película
  }
}

