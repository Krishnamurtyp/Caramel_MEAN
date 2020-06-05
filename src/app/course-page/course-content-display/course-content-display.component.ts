import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../admin-dashboard/manage-course/course.model';

@Component({
  selector: 'app-course-content-display',
  templateUrl: './course-content-display.component.html',
  styleUrls: ['./course-content-display.component.css']
})
export class CourseContentDisplayComponent implements OnInit {
  courseName;
  //public courseDiscription;

  @Input()
  course: Course;

  public lectures='123';
  // courseName: string;
  // lectures: string[] = ["Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5", "Topic 6", "Topic 7", "Topic 8", "Topic 9","Topic 10", "Topic 11",
  // "Topic 12", "Topic 13","Topic 14","Topic 15","Topic 16", "Topic 17", "Topic 18","Topic 19"];

  slide: string = "../../assets/images/CoursePage/slide.jpg"

  constructor() {}

  ngOnInit(): void {
    console.log(this.course.contentModule);
    this.courseName = this.course.title;
    //this.courseDiscription = this.course.contentModule[1];

     document.getElementById("tableCon").innerHTML = JSON.stringify(this.course.contentModule);
    //this.lectures = this.course.contentModule[0][3][1];
    console.log(this.lectures);

  }

}
