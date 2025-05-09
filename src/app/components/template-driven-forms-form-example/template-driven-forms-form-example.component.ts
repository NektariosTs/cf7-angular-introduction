import { Component } from '@angular/core';
import { EpersonTemplateDrivenFormComponent } from '../eperson-template-driven-form/eperson-template-driven-form.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';

@Component({
  selector: 'app-template-driven-forms-form-example',
  imports: [EpersonTemplateDrivenFormComponent, PersonTableComponent, SimpleDatatableComponent],
  templateUrl: './template-driven-forms-form-example.component.html',
  styleUrl: './template-driven-forms-form-example.component.css'
})
export class TemplateDrivenFormsFormExampleComponent {

}
