import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDataItemComponent } from './child-data-item.component';

describe('ChildDataItemComponent', () => {
  let component: ChildDataItemComponent;
  let fixture: ComponentFixture<ChildDataItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildDataItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildDataItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
