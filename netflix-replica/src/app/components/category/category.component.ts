import { Component, Input, OnInit } from '@angular/core';
import { Serie } from 'src/app/common/serie';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() series: Serie[] = [];
  @Input() gender: string = '';
  serieGenders: Serie[] = [];

  ngOnInit(): void {
    console.log(this.gender);
    this.filterSeriesByGender();
  }

  filterSeriesByGender() {
    this.series.filter((serie) => {
      if(serie.genre.includes(this.gender)) {
        this.serieGenders.push(serie);
      }
    });
    console.log(this.serieGenders);
  }

}
