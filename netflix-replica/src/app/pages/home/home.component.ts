import { Component } from '@angular/core';
import { Serie } from 'src/app/common/serie';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  series: Serie[] = [];

  constructor(private serieService: SerieService) {
    this.listSeries();
  }

  listSeries() {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }
}
