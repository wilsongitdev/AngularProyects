import { Component } from '@angular/core';

@Component({
  selector: 'app-templatecomponent',
  standalone: true,
  imports: [],
  template: `
    <h3>
      Backyardigans ataquen
    </h3>
    <img alt="backyardigans" 
    src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p186129_b_v8_aa.jpg"/>
  `,
  styles: `
    img{
      max-width: 400px;
      object-fit: cover;
    }
  `
})
export class TemplatecomponentComponent {

}
