import { Injectable } from '@angular/core';
import {User} from "../../models/login/user";
import {environment} from "../../../environments/environment";
import {IssueBook} from "../../models/issue/issue-book";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IssueBookService {

  private httpLink = {
    issueNewBook: environment.apiUrl + 'issue/issueNewBook',
  }
  constructor(private httpClient: HttpClient) { }

  register(issueBook: IssueBook) {
    return this.httpClient.post(this.httpLink.issueNewBook, issueBook);
  }
}
