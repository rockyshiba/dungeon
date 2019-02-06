import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProficiencyInfoComponent } from './proficiency-info.component';

describe('ProficiencyInfoComponent', () => {
  let component: ProficiencyInfoComponent;
  let fixture: ComponentFixture<ProficiencyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProficiencyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProficiencyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
