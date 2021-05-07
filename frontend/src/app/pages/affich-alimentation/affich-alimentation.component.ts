import { Component, OnInit } from '@angular/core';
import {AlimentationService} from "../../services/alimentation.service";

@Component({
  selector: 'app-affich-alimentation',
  templateUrl: './affich-alimentation.component.html',
  styleUrls: ['./affich-alimentation.component.scss']
})
export class AffichAlimentationComponent implements OnInit {

  alimentation: any;
  font: any;
  page = 1;
  count = 0;
  tableSize = 1;
  tableSizes = [1, 3, 6, 9, 12];
  constructor(private alimentationService: AlimentationService) { }

  ngOnInit() {
    this.fetchPosts();
    this.getAllTypeFont();
  }
  fetchPosts(): void {
    this.alimentationService.getAllAlimentation()
        .subscribe(
            response => {
              this.alimentation = response;
              console.log(response);
            },
            error => {
              console.log(error);
            });
  }
  getAllTypeFont() {
    this.alimentationService.getAllTypeFont()
        .subscribe(
            response => {
              this.font = response;
              console.log(response);
            },
            error => {
              console.log(error);
            });
  }
  onTableDataChange(event){
    this.page = event;
    this.fetchPosts();
  }

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }
}