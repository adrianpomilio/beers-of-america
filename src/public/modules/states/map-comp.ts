import {Component, View, NgFor} from 'angular2/angular2';

@Component({
    selector: 'map-view',
    properties: ['data','selectedstate']
})

@View({
    directives:[NgFor],
    template:`
    <div class="card-panel map-panel">
        <svg id="usa-map">
            <g *ng-for="#st of data" class="state">
                <path [attr.d]="st.d" (click)="stateDetail(st)"></path>
            </g>
        </svg>
        <p>{{selectedstate.name}}</p>

    </div>
    `
    })

export class MapCmp{
    selectedstate : Object;
    constructor(){
        this.selectedstate = {};
    }

    stateDetail(state:Object){
        console.log(state);
        this.selectedstate = state;
        console.log(this.selectedstate)

    }

}
