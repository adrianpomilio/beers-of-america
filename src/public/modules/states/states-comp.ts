import {Component, View, NgFor} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {MapCmp} from 'modules/states/map-comp';
import {State} from 'modules/states/State';


@Component({
    selector: 'state-list'
})

@View({
    directives: [NgFor, MapCmp],
    template: `
    <article class="card-panel" >
        <h2>States</h2>
        <div class="row">
            <div class="col s3">
                <div class="card-panel states-collection">
                    <ul class="collection ">
                        <li *ng-for="#item of result" class="collection-item" (click)="showState(item)" >
                              {{item.name}}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col s9">
                <map-view  [data]="result"></map-view>
            </div>
        </div>
    </article>
    `
})

export class StateCmp {
    result: Array<Object>;
    error: Object;
    selectedstate:Object;
    mapper:MapCmp;
    State:State;


    constructor(http: Http, mapCmp:MapCmp) {
        this.result = [];
        this.selectedstate = {};
        this.mapper = mapCmp;

        http.get('/states').toRx().subscribe(res => {
                this.result = res.json()

            } );
    }

    showState(state:Object){
        this.mapper.stateDetail(state);
    }



}
