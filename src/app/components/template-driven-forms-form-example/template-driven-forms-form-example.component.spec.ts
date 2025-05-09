import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormsFormExampleComponent } from './template-driven-forms-form-example.component';

describe('TemplateDrivenFormsFormExampleComponent', () => {
  let component: TemplateDrivenFormsFormExampleComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsFormExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenFormsFormExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFormsFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
