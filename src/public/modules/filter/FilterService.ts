export class FilterService {
    constructor() { }

  filter(data: string, props: Array<string>, originalList: Array<any>) {
      /* let is a keyword that allows for block level scoping unlike var which is function or global */
    let filteredList: any[];
    if (data && props && originalList) {
      data = data.toLowerCase();
      let filtered = originalList.filter(item => {
        let match = false;
        for (let prop of props) {
          if (item[prop].toString().toLowerCase().indexOf(data) > -1) {
            match = true;
            break;
          }
        };
        return match;
      });
      filteredList = filtered;
    }
    else {
      filteredList = originalList;
    }
    return filteredList;
  }
}
