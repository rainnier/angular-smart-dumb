import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDataListComponent } from './parent-data-list.component';

describe('ParentDataListComponent', () => {
  let component: ParentDataListComponent;
  let fixture: ComponentFixture<ParentDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentDataListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
