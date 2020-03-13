import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TextIntroductionComponentComponent } from './text-introduction-component.component';

describe('TextIntroductionComponentComponent', () => {
  let component: TextIntroductionComponentComponent;
  let fixture: ComponentFixture<TextIntroductionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextIntroductionComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TextIntroductionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
