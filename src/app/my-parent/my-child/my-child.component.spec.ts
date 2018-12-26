import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChildComponent } from './my-child.component';

describe('MyChildComponent', () => {
  let component: MyChildComponent;
  let fixture: ComponentFixture<MyChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
