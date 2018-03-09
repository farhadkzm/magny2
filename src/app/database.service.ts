import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DatabaseService {

  constructor(private http: HttpClient) { }


  getBusinesses(){
    // this.http.get('http://localhost:9200/magny/services/h9wxCWIBktgdx68vuRc8')
    return this.http.get('http://localhost:9200/magny/services/_search?pretty&filter_path=hits.hits._source')
      .toPromise()
      .then(data=>data['hits'].hits.map(it => it._source))
  }
}
