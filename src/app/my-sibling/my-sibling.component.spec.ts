import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySiblingComponent } from './my-sibling.component';

describe('MySiblingComponent', () => {
  let component: MySiblingComponent;
  let fixture: ComponentFixture<MySiblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySiblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
