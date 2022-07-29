import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponentIn } from './news.component';

describe('NewsComponentIn', () => {
  let component: NewsComponentIn;
  let fixture: ComponentFixture<NewsComponentIn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsComponentIn ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponentIn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
