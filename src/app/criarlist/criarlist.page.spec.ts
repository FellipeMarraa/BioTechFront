import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriarlistPage } from './criarlist.page';

describe('CriarlistPage', () => {
  let component: CriarlistPage;
  let fixture: ComponentFixture<CriarlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriarlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
