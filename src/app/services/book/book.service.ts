import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../../models/books/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl: string = "http://localhost:8081/book";

  private httpLink = {
    listAllBooks: this.apiUrl + "/all",
    availableBooks: this.apiUrl + "/availableBooks",
    searchBook: this.apiUrl + "/searchBook",
    saveEmployee: this.apiUrl + "/api/employee/saveEmployee"
  }

  constructor(private httpClient: HttpClient) { }

  listAllBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.httpLink.listAllBooks);
  }

  listAvailableBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.httpLink.availableBooks);
    //return this.httpClient.get<Book[]>(`${this.baseURL}/availableBooks`);
  }

  saveBook(addBookForm: Book) {
    return this.httpClient.get<Book[]>(this.httpLink.availableBooks);
  }

  searchBook(addBookForm: Book) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams()
      .set("bookName",addBookForm.bookName)
      .set("isbn", addBookForm.isbn)
      .set("subject", addBookForm.subject);

    return this.httpClient.get<Book[]>(this.httpLink.searchBook,{params: params});
  }


}
