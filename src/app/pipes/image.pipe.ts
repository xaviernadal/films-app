import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const path = environment.imgPath;
@Pipe({
  name: 'image'
})

export class ImagePipe implements PipeTransform {
  //https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

  transform(value: string, size: string = 'w500'): string {
    if( !value ) {
      return;
    }
    const pathImage = `${path}/${size}${value}`;

    return pathImage;
  }

}
