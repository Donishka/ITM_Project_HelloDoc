import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmComponent } from './searchm.component';

describe('SearchmComponent', () => {
  let component: SearchmComponent;
  let fixture: ComponentFixture<SearchmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
