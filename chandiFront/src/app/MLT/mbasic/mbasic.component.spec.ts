import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbasicComponent } from './mbasic.component';

describe('MbasicComponent', () => {
  let component: MbasicComponent;
  let fixture: ComponentFixture<MbasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
