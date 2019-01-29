import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpComponent } from './searchp.component';

describe('SearchpComponent', () => {
  let component: SearchpComponent;
  let fixture: ComponentFixture<SearchpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
