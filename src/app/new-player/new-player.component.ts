import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';


@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css'],
  providers: [PlayerService]
})
export class NewPlayerComponent implements OnInit {

  players: Player[];
  id = 0;
  score: number;


  constructor(public playerService: PlayerService, public location: Location) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  submitForm(playerName: string) {
    this.id = this.players.length +1;
    this.score = 0;
    const newPlayer = new Player(playerName, this.score, this.id);
    this.players.push(newPlayer);
    console.log(this.players)
  }



}
