import { NavComponent } from './nav/nav.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement,NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
//import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([])],
      declarations: [
        AppComponent, NavComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));


  xit('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to integrationTesting!');
  }));

  it('should have a router outlet', () => {                           // Test de routerOutlet
    const fixture = TestBed.createComponent(AppComponent);
    let de = fixture.debugElement.query(By.directive(RouterOutlet))  // nos aseguramos que exista la directiva <RouterOtlet>

    expect(de).not.toBeNull();
    
  });


});
