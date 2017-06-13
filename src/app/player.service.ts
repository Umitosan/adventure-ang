import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { PLAYERS } from './mock-players';
import { CHAPTERS } from './mock-chapters';

@Injectable()
export class PlayerService {

  constructor() { }

  getPlayers() {
    return PLAYERS;
  }



}
