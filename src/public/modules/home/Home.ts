import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'home'
})

@View({
    template: `
      <article class="card-panel">
      <h2>Welcome to Angular 2</h2>
          <p>Because you are embarking on the bleeding edge, it only seems fair to have some beer.</p>
          <p>You're going to need it... quite a bit of it.  Cheers!</p>
          <p>{{message}}</p>
      </article>
    `
})

export class Home {
    message: string;

    constructor() {
        this.message = 'Sincerely, <br/> Adrian Pomilio';
    }

}
