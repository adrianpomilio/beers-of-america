import {Component, View, EventEmitter} from 'angular2/angular2';

@Component({
        selector: 'favorite-btn',
        events:['favorite'],
        properties : ['data']
    })

@View({
        template:`
            <a (click)="onFavorite()" class="secondary-content btn">
                <i class="material-icons">favorite</i>
                {{counter}}
            </a>
        `
    })

export class FavoriteCmp{
    favorite:EventEmitter;
    data:Object;
    counter:number;

    constructor(){
        this.favorite = new EventEmitter();
        this.counter = 0;
    }

    onFavorite(){
        this.favorite.next(this.data);
        this.counter = ++this.counter;
    }
}
