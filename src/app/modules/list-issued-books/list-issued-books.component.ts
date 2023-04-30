import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
export class ListIssuedBooksComponent implements OnInit, OnDestroy {

  issuedBooks: IssueBook[];
  dtOptions: DataTables.Settings = {};
  @Input() limit: number = 20;
  dtTrigger: Subject<any> = new Subject<any>();

  form: Book = new Book();

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  bookName: string | undefined = '';
  issueBookTmp: IssueBook;
  returnDate: any;
  displayStyle = "none";
  loading = false;
  submitted = false;

  @ViewChild('myModal') myModal: any;
  private modalRef: any;

  model: any;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.loadDataTable();
  }

  async listIssuedBooks() {
    this.bookService.listIssuedBooks().subscribe((data: any) => {
        if (data != null) {
          this.issuedBooks = data;
          this.dtTrigger.next(null);
        }
      },
      (error: any) => {
        if (error) {
          if (error.status == 404) {
            if (error.error && error.error.message) {
              this.issuedBooks = [];
            }
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  //returnBookTmp(book: IssueBook) {
  // if(window.confirm('Are sure you want to return this item ?')){
  //this.bookService.returnBook()
  //  alert(book.id);
  //}

  /*let text = "Press a button!Either OK or Cancel.";
  if (confirm(text) == true) {
    text = "You pressed OK!";
  } else {
    text = "You canceled!";
  }*/

  //}

  private loadDataTable() {
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

  openPopup(book: IssueBook) {
    this.displayStyle = "block";
    this.bookName = book.bookName;
    this.issueBookTmp = book;
  }

  closePopup() {
    this.displayStyle = "none";
  }

  returnIssuedBook() {
    this.loading = true;
    this.issueBookTmp.returnDate = this.returnDate;
    console.log(this.issueBookTmp);
    this.bookService.returnIssuedBook(this.issueBookTmp)
      .subscribe((data: any) => {
          this.errorMessage = data.status +' '+ data.message;
          this.loading = false;
          this.submitted = false;
        },
        (error: any) => {
          console.log("Submission Failed ::" + error);
          this.errorMessage = error;
          this.loading = false;
        });
  }

  /* onSubmit(): void {
     this.bookService.saveBook(this.form).subscribe(
       data => {
         console.log(data);
         this.isSuccessful = true;
         this.isSignUpFailed = false;
       },
       err => {
         console.log("Create Failed::"+err);
         this.errorMessage = err;
         this.isSignUpFailed = true;
       }
     );
   }*/
}
