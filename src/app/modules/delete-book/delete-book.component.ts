import {Component, ViewChild} from '@angular/core';
import {Book} from "../../models/books/book";
import {NgForm} from "@angular/forms";
import {BookService} from "../../services/book/book.service";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {

  searchList: Book[];


  deleteBookConfirmation(employee: any) {

  }

  addBookForm: Book = new Book();

  @ViewChild("bookForm")
  bookForm!: NgForm;
  isSubmitted: boolean = false;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {  }

  AddBook(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.bookService.saveBook(this.addBookForm).subscribe(data => {
          if (data != null) {
            console.log("data saved")
          }
        },
        (error :any)=> {
          console.log("error")
        });
    }
  }
}
