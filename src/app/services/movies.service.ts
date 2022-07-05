import { ResultsMDB } from './../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const apiPath = environment.apiUrl;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getFeature() {
    return this.writeQuery<ResultsMDB>(`/discover/movie?sort_by=popularity.desc`);
  }
  getLatest() {
    return this.writeQuery<ResultsMDB>(`/discover/movie?primary_release_date.gte=2022-07-01&primary_release_date.lte=2022-07-31`);  
  }
  getRecommended() {
    return this.writeQuery<ResultsMDB>(`/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10`);
  }
  private writeQuery<T>(endpoint: string) {
    return this.http.get<T>(`${apiPath}${endpoint}`, {
      params: {
        api_key: apiKey,
        language: 'en-US',
      }
    });
  }
}
