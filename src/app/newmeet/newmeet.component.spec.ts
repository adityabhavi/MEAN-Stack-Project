import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmeetComponent } from './newmeet.component';

describe('NewmeetComponent', () => {
  let component: NewmeetComponent;
  let fixture: ComponentFixture<NewmeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
