import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Player } from '../player.model';
import { Chapter } from '../chapter.model';
import { PlayerService } from '../player.service';
import { ChapterService } from '../chapter.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css'],
  providers: [PlayerService, ChapterService]
})

export class ChapterComponent implements OnInit {
  chapterId: number;
  chapters: Chapter[];
  currentChapter: Chapter;

  constructor(private route: ActivatedRoute, private location: Location, public router: Router, private chapterService: ChapterService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.chapterId = parseInt(urlParameters['id']);
    });
    this.chapters = this.chapterService.getChapters();
    this.currentChapter = this.chapterService.getChapterById(this.chapterId);
  }


  nextChapter(someChapter) {
    this.currentChapter = this.chapterService.getChapterById(someChapter.option1[0]);
    this.router.navigate(['chapters', someChapter.option1[0]]);
  }



}
