import { NavController } from '@ionic/angular';
import { ModulesService } from './../services/modules.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { last, map, of, Subject, switchMap, takeUntil } from 'rxjs';
import { Lesson } from '../interfaces/lesson';
import { Module } from '../interfaces/module';

@Component({
  selector: 'app-lesson-select',
  templateUrl: './lesson-select.page.html',
  styleUrls: ['./lesson-select.page.scss'],
})
export class LessonSelectPage implements OnDestroy  {
  private destroy$ = new Subject<void>();

  public module: Module = {
    id: 1,
    title: '',
    description: '',
    lessons: [],
  };
  
  module$ = this.route.paramMap.pipe(
    switchMap((params) =>
      this.modulesService.getModuleById(parseInt(params.get('id')!, 10))
    )
  );
 
  

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private modulesService: ModulesService
  ) {}

  openLesson(lesson: Lesson) {

    this.module$.pipe(
      takeUntil(this.destroy$),
      map(module => module.id)
    ).subscribe(moduleId => {
      this.navCtrl.navigateForward(
        '/module/' + moduleId + '/lesson/' + lesson.id
      );
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
