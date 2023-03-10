import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart } from '@angular/router';
import { Serie } from 'src/app/common/serie';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss'],
})
export class SerieComponent implements OnInit {
  serie!: Serie;
  numTemp: String[] = [];

  constructor(
    private serieService: SerieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // console.log(params['id']);
      this.getSerie(params['id']);
    });

    // this.subscription = this.route.params.pipe(
    //   switchMap((params) => this.serieService.getSerie(params['id']))
    // ).subscribe({
    //   next: (serie) => {this.serie = serie},
    //   error: (error) => {console.log(error.message)}
    // });
  }

  getSerie(id: string) {
    setTimeout(() => {
      this.serieService.getSerie(id).subscribe((serie) => {
        this.serie = serie;
        this.numTemp.length = parseFloat(serie.numberOfSeasons);
       });
    }, 3000);
  }
}
