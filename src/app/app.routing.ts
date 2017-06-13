import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { Chapter } from './chapter.model';
import { ChapterComponent} from './chapter/chapter.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'chapters/:id',
    component: ChapterComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
