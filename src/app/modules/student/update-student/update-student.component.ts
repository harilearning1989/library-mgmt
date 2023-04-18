import {Component, OnDestroy, OnInit} from '@angular/core';
import {Student} from "../../../models/student/student";
import {Subject} from "rxjs";
import {StudentService} from "../../../services/student/student.service";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit,OnDestroy{
  allStudents: Student[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.dtOptions = {
      destroy: true,
      ordering: true,
      scrollY: '450px',
      pagingType: 'full_numbers',
      pageLength: 25,
      processing: true,
      columnDefs: [{
        targets: 0
      }]
    };
    this.listAllStudents();
  }

  async listAllStudents() {
    this.studentService.listAllStudents().subscribe((data : any) => {
        if (data != null) {
          this.allStudents = data;
          this.dtTrigger.next(null);
        }
      },
      (error : any)=> {
        if (error) {
          if (error.status == 404) {
            if(error.error && error.error.message){
              this.allStudents = [];
            }
          }
        }
      });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  modifyStudent(student: Student) {

  }
}
