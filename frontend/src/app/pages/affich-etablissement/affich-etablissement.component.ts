import {Component, OnInit, ViewChild} from '@angular/core';
import {EtablissementService} from "../../services/etablissement.service";


@Component({
  selector: 'app-affich-etablissement',
  templateUrl: './affich-etablissement.component.html',
  styleUrls: ['./affich-etablissement.component.scss']
})
export class AffichEtablissementComponent implements OnInit {

  etablissement: any;
  societe: any;
    page = 1;
    count = 0;
    tableSize = 5;
    tableSizes = [3, 6, 9, 12];

    constructor(private etablissementService: EtablissementService) {}

  ngOnInit() {
      this.fetchPosts();
      this.getAllSocieties()
  }
    fetchPosts(): void {
        this.etablissementService.getAllEstablishment()
            .subscribe(
                response => {
                    this.etablissement = response;
                    console.log(response);
                },
                error => {
                    console.log(error);
                });
    }
    getAllSocieties() {
        this.etablissementService.getAllSocieties().subscribe(
            response => {
                this.societe = response;
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