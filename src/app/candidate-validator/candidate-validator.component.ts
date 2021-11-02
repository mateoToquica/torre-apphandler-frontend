import { Component, OnInit } from '@angular/core';
import { Candidate } from '../model/candidate';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-candidate-validator',
  templateUrl: './candidate-validator.component.html',
  styleUrls: ['./candidate-validator.component.css']
})
export class CandidateValidatorComponent implements OnInit {
  candidate: Candidate = {
    name: "mateotoquica",
    work_experience: 1,
    titles: 0
  };

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.probarValidate()
  }

  probarValidate() {
    console.log('ok');
    this.httpService
    .validate_candidate(this.candidate)
    .subscribe((result) => {
      console.log(result);
    });
  }

}
