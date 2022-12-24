import { Component, OnInit } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { GoogleChartComponent } from 'angular-google-charts';
import { AdminApisService } from 'src/app/services/admin-apis.service';
import { CommonApisService } from 'src/app/services/common-apis.service';
@Component({
  selector: 'app-placement-states',
  templateUrl: './placement-states.component.html',
  styleUrls: ['./placement-states.component.scss'],
})
export class PlacementStatesComponent implements OnInit {
  title = 'Browser market shares at a specific website, 2014';
  type: any = 'Bar';
  data: any[][] = [];
  options = {
    colors: ['#325288'],
    is3D: true,
  };
  width = 450;
  height = 300;
  columnNames = ['year', 'Hired Students'];

  title2 = 'Browser market shares at a specific website, 2014';
  type2: any = 'PieChart';
  data2: any[][] = [];
  options2 = {
    colors: ['#f3b600', '#325288'],
    is3D: true,
  };
  width2 = 450;
  height2 = 300;
  columnNames2 = ['Totalapplications', 'companyApplications'];


  totalPlacedTillNow:any;
  totalPlacedthisyear:any;
  totalRegisteredStudent:any
  totalCounts:any;
  constructor(private services: AdminApisService) {
    this.services
     .getYearlyPlacementChart()
      .subscribe((apidata: any) => {
        apidata.forEach((element: any) => {
          let x = [element.year, element.count];
          this.data.push(x);
        });
      });

      this.services.compantWisePlacementChart().subscribe((apidata:any)=>{
        apidata.forEach((element:any) => {
            this.totalCounts=this.totalCounts+   element.count;
        });

            apidata.forEach((element:any)=> {
  
              let temp = (element.count/this.totalCounts)*100;
              let x = [element.name, temp];
               this.data2.push(x)
            });
      
      })
    this.services.getTotalPlacedStudentCount().subscribe((data)=>{
       this.totalPlacedTillNow= data;
    })
    this.services.getTotalPlacedThisYear().subscribe((data)=>{
      this.totalPlacedthisyear =data;
    })
    this.services.getTotalRegisteredStudent().subscribe((data)=>{
      this.totalRegisteredStudent=data;
    })
    // this.services
    //   .getCurrentYearApplicationRatio(localStorage.getItem('companyId'))
    //   .subscribe((apidata: any) => {
    //     let temp = (apidata.myTotal / apidata.total) * 100;
    //     let x = ["company's Application", temp];
    //     this.data2.push(x);
    //     let y = ['Other Applications', 100 - temp];
    //     this.data2.push(y);
    //   });
    // console.log(this.data2);
  }

  ngOnInit(): void {}
}
