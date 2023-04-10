import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIssuedBooksComponent } from './list-issued-books.component';

describe('ListIssuedBooksComponent', () => {
  let component: ListIssuedBooksComponent;
  let fixture: ComponentFixture<ListIssuedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIssuedBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListIssuedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
