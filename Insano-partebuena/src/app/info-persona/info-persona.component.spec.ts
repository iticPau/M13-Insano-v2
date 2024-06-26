import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPersonaComponent } from './info-persona.component';

describe('InfoPersonaComponent', () => {
  let component: InfoPersonaComponent;
  let fixture: ComponentFixture<InfoPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPersonaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
