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
    return this.writeQuery<ResultsMDB>(`/discover/movie`);
  }

  private writeQuery<T>(endpoint: string) {
    return this.http.get<T>(`${apiPath}${endpoint}`, {
      params: {
        api_key: apiKey,
        language: 'en-US',
        sort_by: 'popularity.desc',  
      }
    });
  }
}
