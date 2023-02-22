import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Module } from '../interfaces/module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  modules: Module[] = [
    {
      id: 1,
      title: 'Module One',
      description: 'Test',
      lessons: [{ id: 1, title: '1', content: 'hello' }],
    },
    {
      id: 2,
      title: 'Module Two',
      description: 'Test',
      lessons: [{ id: 2, title: '1', content: 'hello' }],
    },
    {
      id: 3,
      title: 'Module Three',
      description: 'Test',
      lessons: [{ id: 3, title: '1', content: 'hello' }],
    },
    {
      id: 4,
      title: 'Module Four',
      description: 'Test',
      lessons: [{ id: 4, title: '1', content: 'hello' }],
    },
    {
      id: 5,
      title: 'Module Five',
      description: 'Test',
      lessons: [{ id: 5, title: '1', content: 'hello' }],
    },
  ];
  constructor(private navCtrl: NavController) {}

  openModule(id: number) {
    this.navCtrl.navigateForward('/module/' + id);
  }

}
