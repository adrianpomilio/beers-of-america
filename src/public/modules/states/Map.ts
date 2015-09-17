import {Component, View} from 'angular2/angular2';

@Component({
    selector: 'map',
    properties: ['data']
})

@View({
    template:`
    <div id="usa-map" class="map-panel">
        {{data[0].name}}
    </div>
    `
    })

export class MapCmp{
    data: Array<Object> = [];

    constructor(){

    };

}
