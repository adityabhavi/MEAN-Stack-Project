import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmeetComponent } from './smeet.component';

describe('SmeetComponent', () => {
  let component: SmeetComponent;
  let fixture: ComponentFixture<SmeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
