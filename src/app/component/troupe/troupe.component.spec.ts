import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TroupeComponent } from './troupe.component';

describe('TroupeComponent', () => {
  let component: TroupeComponent;
  let fixture: ComponentFixture<TroupeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroupeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
