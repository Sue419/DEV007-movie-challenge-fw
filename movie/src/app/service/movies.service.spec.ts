import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa HttpClientTestingModule para simular solicitudes HTTP
      providers: [MoviesService], // Proporciona el servicio que deseas probar
    });
    service = TestBed.inject(MoviesService);
    httpTestingController = TestBed.inject(HttpTestingController); // Obtiene una instancia de HttpTestingController
  });

  afterEach(() => {
    httpTestingController.verify(); // Verifica que no haya solicitudes pendientes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve popular movies', () => {
    const mockResponse = { 
      adult: false,
      backdrop_path: '/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg',
      genre_ids: [1, 2, 3], // Ejemplo de valores para genre_ids,
      id: 615656,
      original_language: 'en',
    };

    service.getPopularMovies().subscribe((response) => {
      expect(response).toEqual(mockResponse); // Verifica que la respuesta coincida con la MOCK
    });

    // Comprueba que se haya realizado una solicitud HTTP GET
    const req = httpTestingController.expectOne('https://api.themoviedb.org/3/movie/popular?api_key=ea8e99ffef86979c4eca450da0fe51af');
    expect(req.request.method).toBe('GET');

    // respuesta simulada
    req.flush(mockResponse);
  });
});



// import { TestBed } from '@angular/core/testing';

// import { MoviesService } from './movies.service';

// describe('MoviesService', () => {
//   let service: MoviesService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(MoviesService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
