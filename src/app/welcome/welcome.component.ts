import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { Chapter } from '../chapter.model';
import { PlayerService } from '../player.service';
import { ChapterService } from '../chapter.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [PlayerService, ChapterService]
})

export class WelcomeComponent implements OnInit {
  chapterId: number = 1;
  players: Player[];
  chapters: Chapter[] = [];
  currentChapter: Chapter;
  currentPlayer: Player;

  constructor(private route: ActivatedRoute, private location: Location, public router: Router, private playerService: PlayerService, private chapterService: ChapterService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
    this.chapters = this.chapterService.getChapters();
    this.currentChapter = this.chapterService.getChapterById(this.chapterId);
  }

  goToChapter(someChapter) {
    this.router.navigate([ 'chapters', someChapter.id ]);
  }

  playerClicked(selectedPlayer) {
    this.currentPlayer = selectedPlayer;
    this.currentChapter.currentPlayer = this.currentPlayer;
  }

}
