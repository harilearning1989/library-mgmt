import {Component, ViewChild} from '@angular/core';
import {Book} from "../../models/books/book";
import {BookService} from "../../services/book/book.service";
import {ModalManager} from "ngb-modal";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  searchBookForm: Book = new Book();
  form: Book = new Book();
  isSubmitted: boolean = false;

  searchAllBooks: Book[];
  isShowAddBookDiv = false;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  @ViewChild('myModal') myModal: any;
  private modalRef: any;
  constructor(private bookService: BookService,
              private modalService: ModalManager){}

  searchBook(isValid: any) {
    this.isSubmitted = true;
    // if (isValid) {}

    this.bookService.searchBook(this.searchBookForm).subscribe(data => {
        if (data != null) {
          this.searchAllBooks = data;
          this.isShowAddBookDiv = false;
        }else{
          this.searchAllBooks = data;
          this.isShowAddBookDiv = true;
        }
      },
      (error: any) => {
        console.log("error")
      });
  }

  AddBook(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.bookService.saveBook(this.searchBookForm).subscribe(data => {
          if (data != null) {
            console.log("data saved")
          }
        },
        (error: any) => {
          console.log("error")
        });
    }
  }

  onSubmit(): void {
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
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}

