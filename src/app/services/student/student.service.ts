import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../../models/student/student";
import {Book} from "../../models/books/book";
import {LibraryResponse} from "../../models/response/library-response";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl: string = "http://localhost:8081/";

  private httpLink = {
    listAllStudentsUrl: this.apiUrl + 'student/all',
    saveStudentUrl: this.apiUrl + 'student/saveStudent',
    deleteStudentByIdUrl: this.apiUrl + 'student/delete'
  }

  constructor(private httpClient: HttpClient) {
  }

  listAllStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.httpLink.listAllStudentsUrl);
  }

  saveStudent(addStudent: Student) {
    return this.httpClient.post(this.httpLink.saveStudentUrl, addStudent);
  }

  deleteStudentById(studentId: any): Observable<LibraryResponse> {
    return this.httpClient.delete<LibraryResponse>(this.httpLink.deleteStudentByIdUrl + '/' + studentId);
  }
}
