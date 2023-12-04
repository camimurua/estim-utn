import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;

    beforeEach( waitForAsync(() => {
        TestBed.configureTestingModule({ imports: [RouterTestingModule], declarations: [AppComponent]}).compileComponents()
        .then(() => {
            fixture = TestBed.createComponent(AppComponent);
            app = fixture.componentInstance;
        })
    }))

    it('should create app', () => {
        expect(app).toBeTruthy();
    });

    it(`should have as title 'teco'`, () => {
        expect(app.title).toEqual('teco');
    });

    it('should render title', () => {
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.content span')?.textContent).toContain('teco app is running!');
    });

})
