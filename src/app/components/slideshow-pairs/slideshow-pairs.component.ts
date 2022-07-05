import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';
import { DetailComponent } from '../detail/detail.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-pairs',
  templateUrl: './slideshow-pairs.component.html',
  styleUrls: ['./slideshow-pairs.component.scss'],
})
export class SlideshowPairsComponent implements OnInit {
  @Input() movies: Movie[] = [];
  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10,
  }
  constructor(private modal: ModalController) { }

  ngOnInit() {}
  async seeDetail(id: string) {
    const modal = await this.modal.create({
      component: DetailComponent,
      componentProps: {
        id: id,
      }
    });
    modal.present();
  }

}
