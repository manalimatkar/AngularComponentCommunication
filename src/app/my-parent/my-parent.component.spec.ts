import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyParentComponent } from './my-parent.component';

describe('MyParentComponent', () => {
  let component: MyParentComponent;
  let fixture: ComponentFixture<MyParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
