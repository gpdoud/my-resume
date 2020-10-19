import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {
  workHistory = [
    {
      company: 'MAX Technical Training',
      title: 'Sr. Boot Camp Instructor',
      duration: 'May 2017 - present',
      accomplishments: [
        "Accomplishment 1",
        "Accomplishment 2",
        "Accomplishment 3"
      ]
    },
    {
      company: 'The Iron Yard (RIP)',
      title: 'Boot Camp Instructor',
      duration: 'July 2016 - May 2017',
      accomplishments: [
        "Accomplishment 4",
        "Accomplishment 5",
        "Accomplishment 6"
      ]
    },
    {
      company: 'Gannett',
      title: 'Director of Development',
      duration: 'May 2009 - June 2016',
      accomplishments: [
        "Accomplishment 7",
        "Accomplishment 8",
        "Accomplishment "
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
