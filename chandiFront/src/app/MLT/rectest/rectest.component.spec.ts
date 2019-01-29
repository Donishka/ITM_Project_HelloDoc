import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectestComponent } from './rectest.component';

describe('RectestComponent', () => {
  let component: RectestComponent;
  let fixture: ComponentFixture<RectestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
