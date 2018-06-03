/* tslint:disable:no-unused-variable */
import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable,from } from 'rxjs';

//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not 
// provided the TodoService as a dependency to TodosComponent. 
// 
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below. 

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ TodosComponent ],
      providers: [TodoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();    // esta linea tambien ejecutará ngOnInit, haciendo que sea muy tarde para cambiar el servicio con spyOn abajo
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load todos from the server', () => {
    let service = TestBed.get(TodoService); // Esto funciona si el servicio está en el provider del Modulo
    // fixture.debugElement.injector.get(TodoService)  // si el servicio está a nivel de componente
    spyOn(service,'getTodos').and.returnValue(from([[1,2,3]]));

    fixture.detectChanges();    // movida del beforeEach
    expect(component.todos.length).toBe(3);
  });

  it('should load todos from the server. async version', async(() => {
    let service = TestBed.get(TodoService); 
    spyOn(service,'getTodos').and.returnValue(from([[1,2,3]])); // si esto fuera una promise y no un Observable...

    fixture.detectChanges();   
    fixture.whenStable().then(()=> {          // necesitamos esto para esperarnos a que las cosas asíncronas se ejecten, no sea que testemos antes de que se terminen
      expect(component.todos.length).toBe(3);   
    })
  }));

  it('should load todos from the server. Fake Async version', fakeAsync(() => {
    let service = TestBed.get(TodoService); 
    spyOn(service,'getTodos').and.returnValue(from([[1,2,3]])); // si esto fuera una promise y no un Observable...

    fixture.detectChanges();   
    tick();                                     // Esto es otra forma de hacer lo mismo, asegurarnos que pase el tiempo
    expect(component.todos.length).toBe(3);   

  }));
});
