import { Component, View, OnChanges, EventEmitter } from 'angular2/angular2';
import {FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'filter-text',
  events: ['changed'],
  properties: ['text']
})
@View({
  template: `
    <form>
         Filter:
         <input type="text"
                [(ng-model)]="filter"
                (keyup)="filterChanged($event)"  />
    </form>
  `,
  directives: [FORM_DIRECTIVES]
})
export class FilterTextComponent implements OnChanges {
  public filter: any;
  public changed: EventEmitter;

  constructor() {
    this.filter = null;
    this.changed = new EventEmitter();
  }

  onChanges(changes: any) {
    console.log(changes);
  }

  filterChanged(event: any) {
    event.preventDefault();
    this.changed.next(this.filter);
  }
}
