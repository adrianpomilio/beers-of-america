import {Directive} from 'angular2/angular2';

@Directive({
    selector: '[tooltip]',
    properties: [
    'tip: tooltip'
    ],
    host:{
        '(mouseover)':'showTip()'
    }
})

export class Tooltip {
    tip:string

    /* called on mouse over of the host element */
    showTip(){
        console.log(this);
        console.log(this.tip);
    }
}
