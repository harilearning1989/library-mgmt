import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../../models/student/student";
import {LibraryResponse} from "../../models/response/library-response";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private httpLink = {
    listAllStudentsUrl: environment.apiUrl + 'student/all',
    saveStudentUrl: environment.apiUrl + 'student/saveStudent',
    deleteStudentByIdUrl: environment.apiUrl + 'student/delete'
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
