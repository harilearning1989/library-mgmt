import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Book} from "../../../models/books/book";
import {Subject} from "rxjs";
import {BookService} from "../../../services/book/book.service";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit,OnDestroy{
  allBooks: Book[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  @Input() limit: number = 20;
  public showAll: any = false;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.dtOptions = {
      destroy: true,
      ordering: true,
      scrollY: '500px',
      pagingType: 'full_numbers',
      pageLength: 25,
      processing: true,
      columnDefs: [{
        targets: 0
      }]
    };

    this.listAllBooks();
  }

  async listAllBooks() {
    this.bookService.listAllBooks().subscribe((data : any) => {
        if (data != null) {
          this.allBooks = data;
          this.dtTrigger.next(null);
        }
      },
      (error : any)=> {
        if (error) {
          if (error.status == 404) {
            if(error.error && error.error.message){
              this.allBooks = [];
            }
          }
        }
      });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  modifyBook(book: Book) {

  }
}
