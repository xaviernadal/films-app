import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPairsComponent } from './slideshow-pairs/slideshow-pairs.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [SlideshowBackdropComponent, SlideshowPosterComponent, SlideshowPairsComponent, DetailComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
  ],
  exports: [SlideshowBackdropComponent, SlideshowPosterComponent, SlideshowPairsComponent, DetailComponent],
  entryComponents: [DetailComponent]
})
export class ComponentsModule { }
