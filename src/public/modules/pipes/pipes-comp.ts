import {Component, View, NgFor } from 'angular2/angular2';

@Component({
        selector: 'pipe-dreams'
    })

@View ({
    directives: [NgFor],
    template:`
        <div class="card-panel">
        <h3>Pipes</h3>
        <p>{{ message1 | uppercase }} - uppercase pipe</p>
        <p>This is Date.now(): {{ message2 }} but check this out {{ message2 | date: 'shortTime' }}</p>
        <p><i *ng-for="#item of message3">{{item}} </i></p>
        <p *ng-for="#item of message3 | limitTo: 6">{{item}}</p>

        </div>
    `
    })

export class PipeCmp{
    message1: any;
    message2: any;
    message3: any;

    constructor() {
        this.message1 = 'Pipe Dreams 1';
        this.message2 =  Date.now();
        this.message3 = ['I', 'love', 'to', 'use', 'p', 'tags', 'and', 'div', 'tags', 'because', 'my', 'friend', 'Steven', 'hates', 'that', 'crap',',and somewhere Baby Chris is laughing!'];
    }
}
