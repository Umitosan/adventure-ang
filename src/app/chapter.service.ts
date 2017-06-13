import { Injectable } from '@angular/core';
import { Chapter } from './chapter.model';
import { CHAPTERS } from './mock-chapters';

@Injectable()
export class ChapterService {

  constructor() { }

  getChapters() {
    return CHAPTERS;
  }

  getChapterById(chapterId: number) {
    for( let i = 0; i <= CHAPTERS.length - 1; i++) {
      if (CHAPTERS[i].id === chapterId) {
        return CHAPTERS[i];
      }
    }
  }

}
