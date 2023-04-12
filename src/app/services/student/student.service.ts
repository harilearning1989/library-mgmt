import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../../models/student/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl: string = "http://localhost:8081/student";

  private httpLink = {
    listAllStudents: this.apiUrl + "/all"
  }

  constructor(private httpClient: HttpClient) {
  }

  listAllStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.httpLink.listAllStudents);
  }
}
