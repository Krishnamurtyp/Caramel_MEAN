import { Component, OnInit } from '@angular/core';

import { StudentUserService } from '../shared-user/student/student-user.service';
import { Router } from "@angular/router";
import { InstructorUserService } from '../shared-user/instructor/instructor-user.service';
import { CorporateUserService } from '../shared-user/corporate/corporate-user.service';
import { UniversityUserService } from '../shared-user/university/university-user.service';

@Component({
  selector: 'app-profile-page',
  template: `
  <table *ngIf="userDetails" class="table-fill">
  <thead>
      <tr>
          <th colspan="2" class="text-center">User Profile</th>
      </tr>
  </thead>
  <tbody>
      <tr *ngIf=userDetails.firstName>
          <td>First Name</td>
          <td>{{userDetails.firstName}}</td>
      </tr>
      <tr *ngIf=userDetails.lastName>
          <td>Last Name</td>
          <td>{{userDetails.lastName}}</td>
      </tr>
      <tr *ngIf=userDetails.lastName.corporateName>
          <td>Last Name</td>
          <td>{{userDetails.corporateName}}</td>
      </tr>
      <tr *ngIf=userDetails.collegeName>
          <td>Last Name</td>
          <td>{{userDetails.collegeName}}</td>
      </tr>
      <tr *ngIf=userDetails.universityName>
          <td>Last Name</td>
          <td>{{userDetails.universityName}}</td>
      </tr>
      <tr *ngIf=userDetails.emailAddress>
          <td>Email</td>
          <td>{{userDetails.emailAddress}}</td>
      </tr>
      <tr>
          <td colspan="2" class="text-center">
              <input type="button" (click)="onLogout()" value="Logout" />
          </td>
      </tr>
  </tbody>
</table>
  `,
  styles: [
    `.table-fill {
      background: white;
      border-radius:3px;
      border-collapse: collapse;
      height: 320px;
      margin: auto;
      max-width: 600px;
      padding:5px;
      width: 100%;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
      animation: float 5s infinite;
    }
     
    th {
      color:#D5DDE5;;
      background:#1b1e24;
      border-bottom:4px solid #9ea7af;
      border-right: 1px solid #343a45;
      font-size:23px;
      font-weight: 100;
      padding:24px;
      text-align:left;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
      vertical-align:middle;
    }
    
    th:first-child {
      border-top-left-radius:3px;
    }
     
    th:last-child {
      border-top-right-radius:3px;
      border-right:none;
    }
      
    tr {
      border-top: 1px solid #C1C3D1;
      border-bottom-: 1px solid #C1C3D1;
      color:#666B85;
      font-size:16px;
      font-weight:normal;
      text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
    }
     
    tr:first-child {
      border-top:none;
    }
    
    tr:last-child {
      border-bottom:none;
    }
     
    tr:nth-child(odd) td {
      background:#EBEBEB;
    }
    
    tr:last-child td:first-child {
      border-bottom-left-radius:3px;
    }
     
    tr:last-child td:last-child {
      border-bottom-right-radius:3px;
    }
     
    td {
      background:#FFFFFF;
      padding:20px;
      text-align:left;
      vertical-align:middle;
      font-weight:300;
      font-size:18px;
      text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
      border-right: 1px solid #C1C3D1;
    }
    
    td:last-child {
      border-right: 0px;
    }
    
    th.text-left {
      text-align: left;
    }
    
    th.text-center {
      text-align: center;
    }
    
    th.text-right {
      text-align: right;
    }
    
    td.text-left {
      text-align: left;
    }
    
    td.text-center {
      text-align: center;
    }
    
    td.text-right {
      text-align: right;
    }`
  ]
})
export class ProfilePageComponent implements OnInit {
  userDetails;

  constructor(private studentUserService: StudentUserService,
              private instructorUserService: InstructorUserService, 
              private corporateUserService: CorporateUserService,
              private universityUserService: UniversityUserService,
              private router: Router) { }

  ngOnInit(): void {
    this.studentUserService.getStudentProfile().subscribe(
      res => {
        this.userDetails = res['student'];
      },
      err => { 
        console.log(err);
        
      }
    );

    this.instructorUserService.getInstructorProfile().subscribe(
      res => {
        this.userDetails = res['instructor'];
      },
      err => {
        console.log(err);
      }
    );

    this.corporateUserService.getCorporateProfile().subscribe(
      res => {
        this.userDetails = res['corporate'];
      },
      err => {
        console.log(err);
      }
    );

    this.universityUserService.getUniversityProfile().subscribe(
      res => {
        this.userDetails = res['university'];
      },
      err => {
        console.log(err);
      }
    );
  }


  
  onLogout(){
    this.studentUserService.deleteToken();
    this.router.navigate(['']);
  }


}
