import {Component, View, NgFor, ElementRef} from 'angular2/angular2';


@Component({
    selector: 'map-view',
    properties: [
        'data',
        'selectedState']
})

@View({
    directives:[NgFor],
    template:`
    <div class="card-panel map-panel">
    <h3>{{selectedState.name}}</h3>
        <svg id="usa-map">
            <g *ng-for="#st of data" class="state" id="{{st.abbr}}">
                <path [attr.d]="st.d" (click)="stateDetail(st)"></path>
            </g>
        </svg>

    </div>
    `
    })


export class MapCmp{
    selectedState: Object;

    constructor(){
    }

    onInit(){
        this.selectedState = {name:'Select a State'};
    }

    stateDetail(state:Object){
        this.selectedState = state;

    }

}
