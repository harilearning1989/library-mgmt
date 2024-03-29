import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Book} from "../../models/books/book";
import {Subject} from "rxjs";
import {BookService} from "../../services/book/book.service";

@Component({
  selector: 'app-return-issued-book',
  templateUrl: './return-issued-book.component.html',
  styleUrls: ['./return-issued-book.component.css']
})
export class ReturnIssuedBookComponent implements OnInit,OnDestroy{

  issuedBooks: Book[];
  dtOptions: DataTables.Settings = {};
  @Input() limit: number = 20;
  dtTrigger: Subject<any> = new Subject<any>();
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

    this.listIssuedBooks();
  }

  async listIssuedBooks() {
    this.bookService.listIssuedBooks().subscribe((data : any) => {
        if (data != null) {
          this.issuedBooks = data;
          this.dtTrigger.next(null);
        }
      },
      (error : any)=> {
        if (error) {
          if (error.status == 404) {
            if(error.error && error.error.message){
              this.issuedBooks = [];
            }
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
