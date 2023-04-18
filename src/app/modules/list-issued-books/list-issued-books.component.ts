import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Book} from "../../models/books/book";
import {Subject} from "rxjs";
import {BookService} from "../../services/book/book.service";
import {IssueBook} from "../../models/issue/issue-book";
import {IssueBookService} from "../../services/issue/issue-book.service";
@Component({
  selector: 'app-list-issued-books',
  templateUrl: './list-issued-books.component.html',
  styleUrls: ['./list-issued-books.component.scss']
})
export class ListIssuedBooksComponent implements OnInit,OnDestroy{

  issuedBooks: IssueBook[];
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

  returnBook(book: IssueBook) {
    if(window.confirm('Are sure you want to return this item ?')){
      alert(book.id);
    }

    /*let text = "Press a button!Either OK or Cancel.";
    if (confirm(text) == true) {
      text = "You pressed OK!";
    } else {
      text = "You canceled!";
    }*/
  }
}
