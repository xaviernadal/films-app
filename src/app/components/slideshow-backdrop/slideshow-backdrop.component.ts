import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';
@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() movies: Movie[] = [];
  
  slideOpts = {
    slidesPerView: 1.1,
    spaceBetween: -10,
    centeredSlides: true
  }
  constructor(private modal: ModalController) { }

  ngOnInit() {
  }
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
