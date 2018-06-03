import { Observable, empty, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';

class RouterStub {    // usaremos este router falso
  navigate(params){
  }
}
class ActivatedRouteStub {    // usaremos este Activatedouter falso
  //params: Observable<any> = empty();
  
  get params (){
    return this.subject.asObservable();
  }
  
  private subject = new Subject();  // Subject deriva de Observable asi que tiene todas sus características, además del método Next.

  push(value){
     this.subject.next(value);
  }
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
        { provide: Router, useClass: RouterStub }, // usamos RouterStub en vez de Router
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect the user after saving', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router,'navigate');
    
    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);  // sabemos que cuando se llama a navigate, se hace con el parametro ['users']
  });

  it('should navigate the user to not found page when going to invalid id', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router,'navigate');

    let route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.push({id:0});   // hago que la ruta falsa reciba un 0, con eso debería navegar a not-found

    expect(spy).toHaveBeenCalledWith(['not-found']);  
  });
});
