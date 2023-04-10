import {Component, ViewChild} from '@angular/core';
import {Book} from "../../models/books/book";
import {BookService} from "../../services/book/book.service";
import {ModalManager} from "ngb-modal";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  searchBookForm: Book = new Book();
  form: Book = new Book();
  isSubmitted: boolean = false;

  @ViewChild('myModal') myModal: any;
  private modalRef: any;

  searchAllBooks: Book[];

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private bookService: BookService,
              private modalService: ModalManager) {
  }

  searchBook() {
    this.isSubmitted = true;
    this.bookService.searchBook(this.searchBookForm).subscribe(data => {
        if (data != null && data) {
          this.searchAllBooks = data;
        }else{
          this.searchAllBooks = [];
        }
      },
      (error: any) => {
        console.log("error");
        this.searchAllBooks = [];
      });
  }

  onSubmit(): void {
    this.bookService.updateBook(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        console.log("Create Failed::" + err);
        this.errorMessage = err.message;
        this.isSignUpFailed = true;
      }
    );
  }

  deleteBookById(id: number) {
    this.bookService.deleteBookById(id)
      .subscribe(
        data => {
          console.log(data);
          //this.searchBook();
          this.onSubmit();
        },
        error => console.log(error));
  }

  displayStyle = "none";

  openPopup(book: Book) {
    this.isSuccessful = false;
    this.form = book;
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
