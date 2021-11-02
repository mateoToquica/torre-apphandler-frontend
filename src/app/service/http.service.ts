import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Candidate } from '../model/candidate';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  rutaApi = "https://apphandler-torre.herokuapp.com";

  constructor(private http: HttpClient) { }

  validate_candidate(candidate: Candidate) {
    return this.http.post(`${this.rutaApi}/candidate`, candidate);
  }


}
