import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PeopleComponent} from './people.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {ConverterService} from "../converter.service";
import {of} from 'rxjs/observable/of';

describe('PeopleComponent', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;

  beforeEach(async(() => {
    const mockService = {
      convertCsvToPeople: () => of([{
        firstName: 'Theo',
        surName: 'Jansen',
        issueCount: 5,
        dateOfBirth: '1978-01-02T00:00:00'
      }, {
        firstName: 'Jannie',
        surName: 'de Vries',
        issueCount: 2,
        dateOfBirth: '1972-01-02T00:00:00'
      }, {
        firstName: 'Henk',
        surName: 'Braam',
        issueCount: 4,
        dateOfBirth: '1972-01-02T00:00:00'
      }, {
        firstName: 'Harry',
        surName: 'Kool',
        issueCount: 2,
        dateOfBirth: '1972-01-02T00:00:00'
      }])
    };

    TestBed.configureTestingModule({
      declarations: [PeopleComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: ConverterService, useValue: mockService},
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.onFileSelected({
      target: {
        files: [{}]
      }
    })
  });

  it('should sort ascending', () => {
    component.sortByIssueCountAscending();

    component.people.forEach((person, index, people) => {
      if (index - 1 > 0) {
        expect(people[index - 1].issueCount).toBeLessThanOrEqual(person.issueCount);
      }
    })
  });

  it('should sort ascending', () => {
    component.sortByIssueCountDescending();

    component.people.forEach((person, index, people) => {
      if (index - 1 > 0) {
        expect(people[index - 1].issueCount).toBeGreaterThanOrEqual(person.issueCount);
      }
    })
  });
});
