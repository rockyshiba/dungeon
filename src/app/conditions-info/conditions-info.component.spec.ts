import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsInfoComponent } from './conditions-info.component';

describe('ConditionsInfoComponent', () => {
  let component: ConditionsInfoComponent;
  let fixture: ComponentFixture<ConditionsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
