import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';

import { HomePage } from './home.page';
import {expect, jest, test} from '@jest/globals';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: NavController,
          useValue: {
            navigateForward: jest.fn(),
          },
        },
      ],
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a modules class member that contains 5 items', () => {
    expect(component.modules.length).toBe(5);
  });

  it('openModule() should navigate to the LessonListPage', () => {
    const navCtrl = fixture.debugElement.injector.get(NavController);
    const testModule = { title: 'pretend module', id: 1 };
    component.openModule(testModule.id);
    expect(navCtrl.navigateForward).toHaveBeenCalledWith(
      '/module/' + testModule.id
    );
  });
});
