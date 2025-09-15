import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaCardsComponent } from './tea-cards.component';

describe('TeaCardsComponent', () => {
  let component: TeaCardsComponent;
  let fixture: ComponentFixture<TeaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
