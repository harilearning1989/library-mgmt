import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../../models/student/student";
import {Book} from "../../models/books/book";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl: string = "http://localhost:8081/";

  private httpLink = {
    listAllStudentsUrl: this.apiUrl + "student/all",
    saveStudentUrl: this.apiUrl + "student/saveStudent"
  }

  constructor(private httpClient: HttpClient) {
  }

  listAllStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.httpLink.listAllStudentsUrl);
  }

  saveStudent(addStudent: Student) {
    return this.httpClient.post(this.httpLink.saveStudentUrl, addStudent);
  }
}
