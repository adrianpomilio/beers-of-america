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
        <svg id="usa-map">
            <g *ng-for="#st of data" class="state" id="{{st.abbr}}">
                <path [attr.d]="st.d" (click)="stateDetail(st)"></path>
            </g>
        </svg>
        <p>{{selectedState.name}}</p>

    </div>
    `
    })


export class MapCmp{
    selectedState: any;
    selectedStateShape:any;


    constructor(){
    }

    onInit(){
        this.selectedState = {};
    }

    stateDetail(state:any){
        this.selectedState = state;

    }

}
