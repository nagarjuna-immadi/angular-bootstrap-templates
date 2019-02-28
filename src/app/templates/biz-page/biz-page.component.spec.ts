import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BizPageComponent } from './biz-page.component';

describe('BizPageComponent', () => {
  let component: BizPageComponent;
  let fixture: ComponentFixture<BizPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BizPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BizPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
