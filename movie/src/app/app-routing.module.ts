import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Importa el componente Home
import { MoviesComponent } from './movies/movies.component'; // Importa el componente Movies
import { SeriesComponent } from './series/series.component'; // Importa el componente Series

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta para la página principal (home)
  { path: 'movies', component: MoviesComponent }, // Ruta para la página de películas (movies)
  { path: 'series', component: SeriesComponent }, // Ruta para la página de series (series)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
