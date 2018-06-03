import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { AppComponent } from '../app.component';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes([])],
      declarations: [ NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a like to todos page', () => {
    const fixture = TestBed.createComponent(NavComponent);
    let des = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref))   // <a routerLink="todos"></a>
    let index = des.findIndex(de => de.attributes['routerLink'] === 'todos');        // buscamos el index de todo
    
    des.forEach(element => {
      console.log(element)  
    });
    expect(index).toBeGreaterThan(-1);    // si existe, devolverá mas de -1
    
  });
});
