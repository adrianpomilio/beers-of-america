import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';
/* this is done to enforce TypeScript to emit metadata. This has no meaning other than to hack a solution */
@Injectable()
export class BeerSvc{
    http:Http;
    searchText: string;
    result: Object;
    error: Object;

    constructor(http:Http){
        this.http = http;
    }
    getBeers(searchText:string){
        this.http.get('/beers/'+this.searchText).toRx().subscribe(res => {
            console.log(res);
            return this.result = res.json()
            }
        );
    };
}
