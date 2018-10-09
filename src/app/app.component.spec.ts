import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PeopleComponent} from "./people/people.component";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PeopleComponent
      ],
    }).compileComponents();
  }));
});
