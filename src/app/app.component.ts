import {Component, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {AppService } from '../app/Service/app.service';
import { User } from './Model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[]= ['albumId', 'title', 'url', 'thumbnailUrl'];
   users: User[]=[]
  dataSource=new MatTableDataSource<User>(this.users);
  length = 5;
  pageSize =5;
  pageSizeOptions: number[] = [2];

  // MatPaginator Output
  pageEvent: PageEvent;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private svc:AppService) { 
   
    
  }

  ngOnInit() {
    this.svc.getAll().subscribe((data:any)=>{
   this.dataSource=data
    })
      console.log(this.dataSource)
   
   
  }
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
  
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}


