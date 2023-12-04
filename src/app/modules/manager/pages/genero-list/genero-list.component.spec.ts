import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GeneroListComponent } from './genero-list.component';
import { GeneroModule } from '../../genero.module';
import { Genero, GeneroService } from 'src/app/services/genero.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
    let fixture: ComponentFixture<GeneroListComponent>;
    let component: GeneroListComponent;
    let spyGeneroServiceMock = jasmine.createSpyObj<GeneroService>(['getGeneros']);
    const generosMock: Genero[] = [
        {
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
        }
    ];

    beforeEach( waitForAsync(() => {
        TestBed.configureTestingModule({ 
            imports: [RouterTestingModule, GeneroModule], 
            declarations: [GeneroListComponent], 
            providers: [{provide: GeneroService, useValue: spyGeneroServiceMock}]
        }).compileComponents()
        .then(() => {
            fixture = TestBed.createComponent(GeneroListComponent);
            component = fixture.componentInstance;
        })
    }))

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('should get generos from service', () => {
       spyGeneroServiceMock.getGeneros.and.returnValues(of(generosMock));
       fixture.detectChanges();
       expect(component.generoArray.length).toEqual(3);
    });

    it('should render title', () => {
        spyGeneroServiceMock.getGeneros.and.returnValues(of(generosMock));
        fixture.detectChanges();
        expect(component.generoArray.length).toEqual(3);

        const compiled = fixture.nativeElement as HTMLElement;
        const debugElement = fixture.debugElement;
        const generoLi = debugElement.queryAll(By.css('li'));
        expect(generoLi.length).toEqual(3);
    });

    it('should not show genero msg', () => {
        spyGeneroServiceMock.getGeneros.and.returnValue(of([]));
        fixture.detectChanges();
        expect(component.generoArray.length).toEqual(0);

        const debugElement = fixture.debugElement;
        const generoSpan = debugElement.query(By.css('.badge-primary')).nativeElement;
        expect(generoSpan.textContent).toEqual('Aún no hay generos');
    });

})
