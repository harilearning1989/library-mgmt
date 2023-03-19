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

  searchBook(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
    }

    this.bookService.searchBook(this.searchBookForm).subscribe(data => {
        if (data != null && data) {
          console.log("data saved")
          this.searchAllBooks = data;
          console.log();
        }
      },
      (error: any) => {
        console.log("error")
      });
  }


  openModal(book: Book) {
    this.modalRef = this.modalService.open(this.myModal, {
      size: "lg",//md,xl,lg
      modalClass: 'mymodal',
      hideCloseButton: false,
      centered: false,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: true,
      backdropClass: "modal-backdrop",
      windowClass: "myCustomModalClass"
    })
    this.isSuccessful = false;
    this.form = book;
  }

  closeModal() {
    this.modalService.close(this.modalRef);
    //or this.modalRef.close();
  }

  onSubmit(): void {
    this.bookService.saveBook(this.form).subscribe(
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

}
