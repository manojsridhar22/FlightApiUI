import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatediscountComponent } from './updatediscount.component';

describe('UpdatediscountComponent', () => {
  let component: UpdatediscountComponent;
  let fixture: ComponentFixture<UpdatediscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatediscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatediscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
