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
  genders: string[] = [];

  constructor(private serieService: SerieService) {
    this.listSeriesAndGender();
  }

  listSeriesAndGender() {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      for(let serie of series) {
        for(let uniqGender of serie.genre.split(' ')) {
          if(uniqGender != 'TV' && uniqGender != '&' && uniqGender != 'Based' && uniqGender != 'on' && uniqGender != 'US' && uniqGender != 'Movies' && uniqGender != 'Life'){
            this.genders.push(uniqGender);
          }
        }
      }
      this.genders = this.genders.filter((element, index, self) => {
        return index === self.indexOf(element);
      });
    });
  }
}
