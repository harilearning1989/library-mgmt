import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {Book} from "../../models/books/book";
import {BookService} from "../../services/book/book.service";

@Component({
  selector: 'app-list-avail-books',
  templateUrl: './list-avail-books.component.html',
  styleUrls: ['./list-avail-books.component.css']
})
export class ListAvailBooksComponent implements OnInit,OnDestroy{
  availBooks: Book[];
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

    this.listAvailableBooks();
  }

  async listAvailableBooks() {
    this.bookService.listAvailableBooks().subscribe((data : any) => {
        if (data != null) {
            this.availBooks = data;
            this.dtTrigger.next(null);
        }
      },
      (error : any)=> {
        if (error) {
          if (error.status == 404) {
            if(error.error && error.error.message){
              this.availBooks = [];
            }
          }
        }
      });
  }


  private listAvailableBooksTmp1(){
    this.bookService.listAvailableBooks().subscribe(data => {
      this.availBooks = data;
      this.dtTrigger.next(null);
    },(error) => {
      console.log("Error::"+error);
    });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
