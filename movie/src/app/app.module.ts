import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCarouselComponent } from './movie-carousel/movie-carousel.component';
import { MoviesService } from './service/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { MoviedataComponent } from './moviedata/moviedata.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieCarouselComponent,
    NavbarComponent,
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    MoviedataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
