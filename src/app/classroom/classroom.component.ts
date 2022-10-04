import {Component} from "@angular/core";

@Component({
  selector: 'classroom',
  templateUrl: './classroom.component.html'
})
export class ClassroomComponent {
  className = 'T2207A - Sem 1';
  siso = 27;
  themSinhvien() {
    this.siso++;
  }

  giamSinhvien() {
    this.siso--;
  }
}
