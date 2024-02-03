import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <p>Los juegos favoritos de {{username}} son:</p>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav(game.name)">{{game.name}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = "";
  @Output() addFavouriteEvent = new EventEmitter<string>();
  fav(gameName:string){
    this.addFavouriteEvent.emit(gameName)
  }
  games = [
    {
      id: 0,
      name: "god of war"
    },
    {
      id: 1,
      name: "cod mobile"
    },
    {
      id: 322,
      name: "dota"
    }
  ];
}
