import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentstateComponent } from './currentstate.component';

describe('CurrentstateComponent', () => {
  let component: CurrentstateComponent;
  let fixture: ComponentFixture<CurrentstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
