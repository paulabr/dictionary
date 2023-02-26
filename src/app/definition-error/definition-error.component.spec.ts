import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionErrorComponent } from './definition-error.component';

describe('DefinitionErrorComponent', () => {
  let component: DefinitionErrorComponent;
  let fixture: ComponentFixture<DefinitionErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefinitionErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
