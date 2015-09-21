import {Http} from 'angular2/http';

export class Beers{
    http:Http;
    searchText: string;
    result: Object;
    error: Object;
    
    constructor(http:Http){
        this.http = http;
    }
    getBeers(searchText:string){
        return this.http.get('/beers/'+this.searchText).toRx().subscribe(res => {
            console.log(res);
            this.result = res.json()
            }
        );
    };
}
