import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class ConverterService {

  constructor() {
  }

  convertCsvToPeople(file) {
    return Observable.create(observer => {
      const reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = evt => {
        const fileContent = evt.target.result;
        const contents = fileContent
          .split(/[,\n\r]/)
          .filter(value => !!value)
          .filter((value, index) => index > 3)
          .map(value => value.replace(/"/g, ''));
        const people = this.getPeople(contents);
        observer.next(people);
        observer.complete();
      };

      reader.onerror = err => observer.error(err);
    });
  }

  getPeople(splitContents) {
    const length = splitContents.length;
    const people = [];
    for (let i = 0; i < length;) {
      const person = {
        firstName: splitContents[i],
        surName: splitContents[i + 1],
        issueCount: parseInt(splitContents[i + 2]),
        dateOfBirth: splitContents[i + 3]
      };
      people.push(person);
      i += 4;
    }
    return people;
  }
}
