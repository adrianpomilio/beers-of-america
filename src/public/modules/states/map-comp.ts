import {Component, View, NgFor} from 'angular2/angular2';

@Component({
    selector: 'map-view',
    properties: ['data']
})

@View({
    directives:[NgFor],
    template:`
    <div class="card-panel map-panel">
        hello states {{data.length}}
        <svg id="usa-map">
            <g *ng-for="#st of data" class="state">
                <path [attr.d]="st.d" (click)="stateDetail(st)"></path>
            </g>
        </svg>
    </div>
    `
    })

export class MapCmp{

    constructor(){
    }

    stateDetail(state:Object){
        console.log(state);
    }

}
