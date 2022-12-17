import { Component, OnInit, ElementRef } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { StudentApisService } from 'src/app/services/student-apis.service';


@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss'],
})
export class StudentDashboardComponent implements OnInit {

  currentUser = localStorage.getItem("studentName")
    
 profilePic:string="../../assets/"+localStorage.getItem("profilePic") ;
 
  constructor(private elementRef: ElementRef ,private services:StudentApisService) {
  
   

  }
  showFiller = false;
  panelOpenState = true;
  //side navigation menu options
  MenuList: any = [
    {
      heading: 'job profile',
      links: [
        {
          title: 'Job Profile',
          url: '/dashboard/student/AddJobProfile',
        },
      ],
    },
    {
      heading: 'Pre Placement talk',
      links: [
        {
          title: 'Vote Now',
          url: '/dashboard/student/prePlacementVoting',
        },
        {
          title: 'View sheduled',
          url: '/dashboard/student/talklist',
        },
      ],
    },
    {
      heading: 'Jobs Section',
      links: [
        {
          title: 'View Openings',
          url: '/dashboard/student/ViewOpenings',
        },
        {
          title: 'check Status',
          url: '/dashboard/student/CheckStatus',
        },
      ],
    },
    {
      heading: 'My Profile',
      links: [
        {
          title: 'View Profile',
          url: '/dashboard/student/ViewProfile',
        },
        
      ],
    },
  ];

  isMenuOpne: boolean = true;
  TotalCompanys: number = 0;
  Eligible: number = 0;
  Applied: number = 0;
  status: string = 'In Process';

  pending: number = 0;
  Shortlisted: number = 0;
  Selected: number = 0;


  ngOnInit(): void {

    console.log(this.MenuList[0]);

    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '../assets/js/main.js';
    this.elementRef.nativeElement.appendChild(s);
  }
  toggle(drawer: any) {
    this.isMenuOpne === false
      ? (this.isMenuOpne = true)
      : (this.isMenuOpne = false);
    drawer.toggle();
  }



}
