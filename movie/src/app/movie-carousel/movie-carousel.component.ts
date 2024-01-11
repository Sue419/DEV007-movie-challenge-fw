import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.css']
})
export class MovieCarouselComponent implements OnInit, OnDestroy {
  movies: any[] = [];
  currentSlideIndex: number = 0;
  selectedMovie: any;

  autoPlay: boolean = true; // Habilita o deshabilita la reproducción automática
  autoPlayInterval: number = 5000; // Intervalo en milisegundos entre diapositivas (5 segundos por defecto)
  autoPlayTimer: any; // Variable para almacenar el temporizador

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit() {
    this.moviesService.getPopularMovies().subscribe((data: any) => {
      this.movies = data.results.slice(0, 7);
      this.startAutoPlay(); // Comienza la reproducción automática
    });
  }

  ngOnDestroy() {
    this.stopAutoPlay(); // Detiene la reproducción automática al salir del componente
  }

  //CARROUSEL VER. DESKTOP
  getBackdropUrl(backdropPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/original';
    return `${baseUrl}${backdropPath}`;
  }

  //CARROUSEL VER. MOBILE
  getPosterUrl(posterPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/original';
    return `${baseUrl}${posterPath}`;
  }

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
      this.stopAutoPlay(); // Detiene la reproducción automática al navegar manualmente
    }
  }

  nextSlide() {
    if (this.currentSlideIndex < this.movies.length - 1) {
      this.currentSlideIndex++;
      this.stopAutoPlay(); // Detiene la reproducción automática al navegar manualmente
    }
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
    this.selectedMovie = this.movies[index];
    console.log(this.selectedMovie);
    this.resetAutoPlay(); // Reinicia la reproducción automática después de la navegación manual
  }

  startAutoPlay() {
    if (this.autoPlay) {
      this.autoPlayTimer = setInterval(() => {
        this.nextSlide();
      }, this.autoPlayInterval);
    }
  }

  stopAutoPlay() {
    clearInterval(this.autoPlayTimer);
  }

  resetAutoPlay() {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  goToMovieDetail(movieId: number) {
    this.router.navigate(['/movie', movieId]);
  }
}