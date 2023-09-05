import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service'; // Ajusta la ruta de importación según la ubicación del servicio

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.css']
})
export class MovieCarouselComponent implements OnInit {
  movies: any[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    // En el método ngOnInit, llama al servicio para obtener películas
    this.moviesService.getPopularMovies().subscribe((data: any) => {
      this.movies = data.results;
      console.log(this.movies);
    });
  }

}

