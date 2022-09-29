import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent2DataListComponent } from './parent2-data-list.component';

describe('Parent2DataListComponent', () => {
  let component: Parent2DataListComponent;
  let fixture: ComponentFixture<Parent2DataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parent2DataListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parent2DataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
