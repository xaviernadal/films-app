import { ResultsMDB } from './../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  private recentMovies: Movie[] = [];
  slideOpts = {
    slidesPerView: 1.1,
    spaceBetween: -10,
    centeredSlides: true
  }
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getFeature().subscribe((data) => {
      this.recentMovies = data.results;
      console.log(this.recentMovies);
    }
    );
  }

}
