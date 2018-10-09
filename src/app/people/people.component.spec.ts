import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PeopleComponent} from './people.component';

describe('PeopleComponent', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
