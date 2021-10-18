import { Component, OnInit } from '@angular/core';
import { DataSource5Service } from '../services/data-source5.service';
import { DataSource4Service } from '../services/data-source4.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit {
  public dataSource5Table1: any = null;
  public dataSource4Table1: any = null;
  public northwindEmployees: any = null;
  public northwindProducts: any = null;
  public northwindRegions: any = null;

  constructor(
    private dataSource5Service: DataSource5Service,
    private dataSource4Service: DataSource4Service,
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dataSource5Service.getTable1().subscribe(data => this.dataSource5Table1 = data);
    this.dataSource4Service.getTable1().subscribe(data => this.dataSource4Table1 = data);
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
    this.northwindService.getData('Products').subscribe(data => this.northwindProducts = data);
    this.northwindService.getData('Regions').subscribe(data => this.northwindRegions = data);
  }
}
