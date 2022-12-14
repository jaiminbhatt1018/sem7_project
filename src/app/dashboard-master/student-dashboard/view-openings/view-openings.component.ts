import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { StudentApisService } from 'src/app/services/student-apis.service';
import { ViewJobOfferComponent } from './view-job-offer/view-job-offer.component';
export interface PeriodicElement {
  companyName: string;
  technology:string;
  minCtc:number;
  maxCtc:number;
  position: string;
}

@Component({
  selector: 'app-view-openings',
  templateUrl: './view-openings.component.html',
  styleUrls: ['./view-openings.component.scss']
})
export class ViewOpeningsComponent implements OnInit {
spid!:any; 
dataSource = new MatTableDataSource<any>();

  constructor(private dialog: MatDialog, private services:StudentApisService) {
    this.spid =localStorage.getItem("spid");
   }
   
  ngOnInit(): void {
    this.fetchCompanyOffers()
  }

  fetchCompanyOffers(){
    this.services.getNotAppliedCompanies(this.spid).subscribe((data:any)=>{
      this.dataSource.data = data;
    })
  }
  displayedColumns: string[] = ['companyName', 'technology','position','minCtc','maxCtc','action'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  defaultcontent = true;
  changeDefaultContent() {
    this.defaultcontent == true
      ? (this.defaultcontent = false)
      : (this.defaultcontent = true);
  }
  openDialog(row:any){
    const dialogRef=this.dialog.open(ViewJobOfferComponent, {
      // add any additional options here
      height: '50rem',
      width: '90rem',
      data:row
    });
    dialogRef.afterClosed().subscribe((result:any )=> {
this.fetchCompanyOffers();
      
    });
  }

  
}