import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreeterComponent } from './greeter.component';

describe('GreeterComponent', () => {
  let component: GreeterComponent;
  let fixture: ComponentFixture<GreeterComponent>;

  beforeEach(async(() => {              
    TestBed.configureTestingModule({
      declarations: [ GreeterComponent ]
    })
    .compileComponents();     // cuando el template está en un fichero separado, primero hay que compilarlo. como es algo mas lentoy tiene que acceder al filesystem, se hace
  }));  //  asíncronamente. En verdad no es necesario porque Angular ClI webpack unirá el template y el componente es un único bundle JS. 

  beforeEach(() => {
    fixture = TestBed.createComponent(GreeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
