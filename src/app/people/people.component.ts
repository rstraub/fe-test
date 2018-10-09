import {Component, OnInit} from '@angular/core';
import {ConverterService} from "../converter.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  public people;
  public error;

  constructor(private converterService: ConverterService) {
  }

  sortByIssueCountAscending() {
    this.people.sort((a, b) => {
      let comparison = 0;
      if (a.issueCount > b.issueCount) {
        comparison = 1;
      } else if (a.issueCount < b.issueCount) {
        comparison = -1;
      }
      return comparison
    });
  }

  sortByIssueCountDescending() {
    this.people.sort((a, b) => {
      let comparison = 0;
      if (a.issueCount > b.issueCount) {
        comparison = -1;
      } else if (a.issueCount < b.issueCount) {
        comparison = 1;
      }
      return comparison
    });
  }

  onFileSelected(event) {
    if (event.target.files && event.target.files[0]) {
      this.converterService
        .convertCsvToPeople(event.target.files[0])
        .subscribe(
          people => this.people = people,
          err => this.error = err
        );
    }
  }
}
