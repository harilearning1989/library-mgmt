import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnIssuedBookComponent } from './return-issued-book.component';

describe('ReturnIssuedBookComponent', () => {
  let component: ReturnIssuedBookComponent;
  let fixture: ComponentFixture<ReturnIssuedBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnIssuedBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnIssuedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
