import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Entity} from "./models/entity";
import {Review} from "./models/review";

@Injectable()
export class DatabaseService {

  private esUrl: string = 'http://localhost:9200';

  constructor(private http: HttpClient) {
  }


  getReviews(entityId: string, from: number = 0, size: number = 10): Promise<Array<Review>> {

    return this.http.post(`${this.esUrl}/review/_search`, {
      from, size,
      query: {term: {entityId}}
    })
      .toPromise()
      .then(data => data['hits'].hits.map(it => {
        let source = it._source;
        source.id = it._id;
        return source
      }))
  }

  getBusinesses(from: number = 0, size: number = 10): Promise<Array<Entity>> {

    return this.search({
      sort: [{created: "desc"}],
      from, size
    });
  }

  getNotifications(from: number = 0, size: number = 10): Promise<Array<Entity>> {

    return this.search({
      sort: [{created: "desc"}],
      _source: ["photoUrl", "name", "serviceType"],
      from, size
    });

  }

  search(searchConfig: any): Promise<Array<Entity>> {

    return this.http.post(`${this.esUrl}/entity/_search`, searchConfig).toPromise()
      .then(data => data['hits'].hits.map(it => {
        let source = it._source;
        source.id = it._id;
        return source
      }))
  }

  getEntity(id: string): Promise<Entity> {

    return this.http.get(`${this.esUrl}/entity/_doc/${id}`)
      .toPromise<any>()
      .then(data => {
          if (!data.found) {
            return null
          }
          let source = data._source;
          source.id = data._id;
          return source;
        }
      )
  }
}