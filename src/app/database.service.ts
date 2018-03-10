import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DatabaseService {

  private esUrl: string = 'http://localhost:9200';

  constructor(private http: HttpClient) {
  }


  getBusinesses() {

    return this.http.get(`${this.esUrl}/magny/services/_search`)
      .toPromise()
      .then(data => data['hits'].hits.map(it => {
        let source = it._source;
        source.id = it._id;
        return source
      }))
  }

  getNotifications() {

    return this.http.post(`${this.esUrl}/magny/services/_search`, {
      "sort": [{"created": "desc"}]
    }).toPromise()
      .then(data => data['hits'].hits.map(it => {
        let source = it._source;
        source.id = it._id;
        return source
      }))
  }
}
