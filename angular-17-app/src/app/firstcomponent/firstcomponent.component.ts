import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-firstcomponent',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './firstcomponent.component.html',
  styleUrl: './firstcomponent.component.css'
})
export class FirstcomponentComponent {
  isLogged = false
  username = "Wilson"
  favGame = ""

  getFavouriteGame(gameName: string){
    this.favGame = gameName;
  }
  greet = () => {
    alert("mi alerta")
  }
}
