import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GeneroService } from './genero.service';

describe('GeneroService', () => {
    let service : GeneroService;
    let testingController: HttpTestingController;

    beforeEach( waitForAsync(() => {
        TestBed.configureTestingModule({ imports: [HttpClientTestingModule], providers: [GeneroService]}).compileComponents()
        .then(() => {
            service = TestBed.inject(GeneroService);
            testingController = TestBed.inject(HttpTestingController);
        })
    }))

    it('should create service', () => {
        expect(service).toBeTruthy();
    });

    it('should have list of generos', () => {
        service.getGeneros().subscribe({
            next: (value) => { 
                expect(value).toBeTruthy();
                expect(value.length).toBe(3);
            } 
        });

        const httpRequest = testingController.expectOne('http://localhost:3000/generos');
        expect(httpRequest.request.method).toEqual('GET');
        httpRequest.flush([{
            "id": 101,
            "firstName": "John",
            "lastName": "Doe",
            "country": "United States",
            "games": [
              {
                "gameId": 1
              },
              {
                "gameId": 2
              },
              {
                "gameId": 3
              }
            ]
          },
          {
            "id": 102,
            "firstName": "Jane",
            "lastName": "Smith",
            "country": "Canada",
            "games": [
              {
                "gameId": 4
              },
              {
                "gameId": 5
              }
            ]
          },
          {
            "id": 103,
            "firstName": "Alicia",
            "lastName": "Martinez",
            "country": "Spain",
            "games": [
              {
                "gameId": 6
              },
              {
                "gameId": 7
              }
            ]
        }]);
    });

    it('should get one genero', () => {
        service.getGeneroById(101).subscribe({
            next: (value) => {
                expect(value).toBeTruthy();
                expect(value.firstName).toEqual('John');
            }
        });

        const httpRequest = testingController.expectOne('http://localhost:3000/generos/101');
        expect(httpRequest.request.method).toEqual('GET');
        httpRequest.flush({
            "id": 101,
            "firstName": "John",
            "lastName": "Doe",
            "country": "United States",
            "games": [
              {
                "gameId": 1
              },
              {
                "gameId": 2
              },
              {
                "gameId": 3
              }
            ]
        });
    });

})
