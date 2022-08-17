import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Input,  OnInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['payeeName', 'childName','weekvalue_3','weekvalue_2','weekvalue_1', 'current',  'pending',  'over' ,  'pendingcreditNote' ,  'totalPending'];
  @Input() juniordataList:any [] 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  resultsLength = 0;
  constructor() {
    //this.resultsLength = this.juniordataList.length;
   }

  ngOnInit(): void {
  this.resultsLength = this.juniordataList.length;
  }

  ngAfterViewInit(): void {
    this.resultsLength = this.juniordataList.length;
  }
  

}
