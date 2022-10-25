import { Component, OnInit } from '@angular/core';
import { ICourseDetails } from '../../models/courseDetails';
import { IDataCardDetails } from '../../../../shared/models/dataCardDetails';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  dataColumns: any;
  rowData: any;

  coursesData: Array<IDataCardDetails>;

  constructor() {}

  ngOnInit(): void {
    const resData: ICourseDetails[] = [
      {
        courseCode: 'EVS12',
        courseName: 'Environmental Studies',
        courseFaculty: 'Dipika Kakkar',
        courseAttendance: 22,
        courseTotalClass: 20,
        courseInternalMarks: 22,
        courseTotalInternalMarks: 30,
      },
      {
        courseCode: 'SC12',
        courseName: 'Science',
        courseFaculty: 'Mithilesh Kumar',
        courseAttendance: 22,
        courseTotalClass: 20,
        courseInternalMarks: 22,
        courseTotalInternalMarks: 30,
      },
      {
        courseCode: 'SS12',
        courseName: 'Social Science',
        courseFaculty: 'Amresh Kumar',
        courseAttendance: 22,
        courseTotalClass: 20,
        courseInternalMarks: 22,
        courseTotalInternalMarks: 30,
      },
      {
        courseCode: 'EN12',
        courseName: 'English',
        courseFaculty: 'Shashi Bhushan Raman',
        courseAttendance: 22,
        courseTotalClass: 20,
        courseInternalMarks: 22,
        courseTotalInternalMarks: 30,
      },
      {
        courseCode: 'HIN12',
        courseName: 'Hindi',
        courseFaculty: 'Suman Mehrotra',
        courseAttendance: 22,
        courseTotalClass: 20,
        courseInternalMarks: 22,
        courseTotalInternalMarks: 30,
      },
    ];
    this.coursesData = resData.map((course: ICourseDetails) => {
      return {
        code: course.courseCode,
        mainIcon: 'library_books',
        tooltipValue: 'Subject',
        title: course.courseName,
        subtitle: course.courseFaculty,
        content: [
          {
            icon: 'school',
            value: `${course.courseAttendance}/${course.courseTotalClass}`,
            tooltipValue: 'Attendance',
          },
          {
            icon: 'percent',
            value: `${course.courseInternalMarks}/${course.courseTotalInternalMarks}`,
            tooltipValue: 'Internal Assessment',
          },
        ],
      };
    });
  }
}
