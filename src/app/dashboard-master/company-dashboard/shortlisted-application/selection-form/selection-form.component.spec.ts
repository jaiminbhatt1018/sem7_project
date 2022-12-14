import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionFormComponent } from './selection-form.component';

describe('SelectionFormComponent', () => {
  let component: SelectionFormComponent;
  let fixture: ComponentFixture<SelectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
