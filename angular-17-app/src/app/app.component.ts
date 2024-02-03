import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { TemplatecomponentComponent } from './templatecomponent/templatecomponent.component';

@Component({ // decorador es una sintaxis y un patron que afecta a la clase appComponent de abajo
  selector: 'app-root',
  standalone: true,// si se quiere utilizar cualquier componente,modulo dentro 
  //de este componente se utiliza con el import de abajo
  imports: [CommonModule, RouterOutlet, FirstcomponentComponent, TemplatecomponentComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})
export class AppComponent {
  bstreamer = 'bayesia nash';// propiedades del componentes que son accesibles y se puede tratarla
}
