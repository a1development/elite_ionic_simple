import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lesson } from '../interfaces/lesson';
import { Module } from '../interfaces/module';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  constructor() { }

  public getModuleById(id: number): Observable<Module> {
    return of({
      id: 1,
      title: 'Module One',
      description: 'Test',
      lessons: [
        { id: 1, title: 'lesson1', content: 'hello' },
        { id: 2, title: 'lesson2', content: 'hello' },
        { id: 3, title: 'lesson3', content: 'hello' },
        { id: 4, title: 'lesson4', content: 'hello' },
      ],
    });
  }

  getLessonById(moduleId: number, lessonId: number): Observable<Lesson> {
    return of({
      id: 1,
      title: 'lesson 1',
      content: 'this is the lesson content',
    });
  }
}
