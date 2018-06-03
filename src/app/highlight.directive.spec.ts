/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core'; 

@Component({
  template: `
    <p highlight="cyan">First</p>
    <p highlight>Second</p>
  `
})
class DirectiveHostComponent { }

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHostComponent, HighlightDirective ]  // No hay que olvidar incluir la directiva a estear aqui
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges(); 
  });

  it('should highlight the 1st element with cyan',()=>{
    let de = fixture.debugElement.queryAll(By.css('p'))[0] // solo cojo el primer elemento

    expect(de.nativeElement.style.backgroundColor).toBe('cyan')
  })

  it('should highlight the 2ndt element with default color',()=>{
    let de = fixture.debugElement.queryAll(By.css('p'))[1] 
    let dir = de.injector.get(HighlightDirective);
    expect(de.nativeElement.style.backgroundColor).toBe(dir.defaultColor)
  })
});
