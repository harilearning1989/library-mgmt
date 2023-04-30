import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../../models/books/book";
import {IssueBook} from "../../models/issue/issue-book";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private httpLink = {
    listAllBooks: environment.apiUrl + 'book/all',
    availableBooks: environment.apiUrl + 'book/availableBooks',
    listIssuedBooks: environment.apiUrl + 'issue/all',
    searchBook: environment.apiUrl + 'book/searchBook',
    saveBookUrl: environment.apiUrl + 'book/create',
    updateBookUrl: environment.apiUrl + 'book/updateBook',
    deleteBookById: environment.apiUrl + 'book/delete',
    returnIssuedBookUrl: environment.apiUrl + 'return/returnIssuedBook',
  }

  constructor(private httpClient: HttpClient) {}

  listAllBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.httpLink.listAllBooks);
  }

  listAvailableBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.httpLink.availableBooks);
    //return this.httpClient.get<Book[]>(`${this.baseURL}/availableBooks`);
  }
  listIssuedBooks(): Observable<IssueBook[]> {
    return this.httpClient.get<IssueBook[]>(this.httpLink.listIssuedBooks);
  }

  saveBook(addBookForm: Book) {
    return this.httpClient.post(this.httpLink.saveBookUrl, addBookForm);
  }

  updateBook(addBookForm: Book) {
    return this.httpClient.post(this.httpLink.updateBookUrl, addBookForm);
  }

  saveBookTemp(addBookForm: Book) {
    return this.httpClient.get<Book[]>(this.httpLink.availableBooks);
  }

  searchBook(addBookForm: Book) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams()
      .set("bookName", addBookForm.bookName)
      .set("isbn", addBookForm.isbn)
      .set("subject", addBookForm.subject);

    return this.httpClient.get<Book[]>(this.httpLink.searchBook, {params: params});
  }

  deleteBookById(id: number) {
    return this.httpClient.delete(this.httpLink.deleteBookById + '/' + id);
  }

  returnIssuedBook( issueBookTmp: IssueBook) {
    return this.httpClient.patch(this.httpLink.returnIssuedBookUrl, issueBookTmp);
  }
}
