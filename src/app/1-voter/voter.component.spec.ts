import { TestBed, ComponentFixture } from '@angular/core/testing';      // Para tests de integración
import { VoterComponent } from './voter.component';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {

  let component: VoterComponent;                    // Como se puede ver en greeter, este 'boilerplate code' es creado automaticamente cuando creas un componente nuevo
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({    // Al igual que un app modoule, puede tener declarations, imports, providers, etc
      declarations: [ VoterComponent]
    });

    fixture   = TestBed.createComponent(VoterComponent) // Component Fixture es un wrapper para nuestro componente con la clase y su template
    component = fixture.componentInstance;
    // fixture.nativeElement  // devuelve un HtmlElement con el root element de DOM
    // fixture.debugElement // wrapper para debuggear 

  });

  it('should render total votes', () => {
    component.othersVote=20;
    component.myVote=1;
    fixture.detectChanges(); //angular no ejecute la detección de cambios de variables (como las dos de arriba) en testing, hay que llamarla a mano

    // totalVotes aparece en el template en <span class="vote-count">{{ totalVotes }}</span>
    let de = fixture.debugElement.query(By.css('.vote-count'));    // Necesita un predicate, una función que devuelve true si una condición se cumple
    let el :HTMLElement= de.nativeElement;
    expect (el.innerText).toContain('21');  // 20 +1 !
  });

  it('should highlight the upvote button', () => {
    component.myVote=1;
    fixture.detectChanges();

    //class="glyphicon glyphicon-menu-up vote-button"   [class.highlighted]="myVote == 1" 
    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));   
    //de.styles
    //de.attributes
    expect (de.classes['highlighted']).toBeTruthy;  
  });

  it('should increase total votes', () => {
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));   
    button.triggerEventHandler('click',null);    // llamando a un evento click
    expect(component.totalVotes).toBe(1);
  })
});
