import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvailBooksComponent } from './list-avail-books.component';

describe('ListAvailBooksComponent', () => {
  let component: ListAvailBooksComponent;
  let fixture: ComponentFixture<ListAvailBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAvailBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAvailBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
