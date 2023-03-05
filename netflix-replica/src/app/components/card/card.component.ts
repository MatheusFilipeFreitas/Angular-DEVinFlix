import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from 'src/app/common/serie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() serie!: Serie;
  show: Boolean = false;

  constructor(private router: Router){

  }

  navigateToSerie(serieId: string) {
    console.log('Click ativado: ' + serieId);
    this.router.navigate([`/series/${serieId}`]);
  }
}
