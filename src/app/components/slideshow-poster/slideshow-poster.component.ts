import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';
import { DetailComponent } from '../detail/detail.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  @Input() movies: Movie[] = [];
  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
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
