import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Entity} from "./models/entity";
import {Review} from "./models/review";
import {Profile} from "./models/profile";
import {ESLocation} from "./models/eslcation";

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

  getMyProfile(): Promise<Profile> {

    return this.get('profile', 'my-profile');
  }

  updateProfile(profile: Profile): void {

    this.http.post(`${this.esUrl}/profile/_doc/my-profile`, profile).toPromise()
      .then(data => console.log(data));
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

  searchServices(center: ESLocation,
                 name: string,
                 serviceType: string,
                 gender: string,
                 distance: number = 50) {
    //resultEvent
    let searchRequest = {
      "query": {
        "bool": {
          "filter": []
        }
      }

    };

    if (name) {
      searchRequest.query.bool['should'] = [
        {
          "match": {
            "name": {"query": name}
          }
        }
      ];
    }

    if (serviceType) {
      searchRequest.query.bool.filter.push({"term": {"serviceType": serviceType}})
    }
    if (gender) {
      searchRequest.query.bool.filter.push({"term": {"gender": gender}})
    }

    searchRequest.query.bool.filter.push({
      "geo_distance": {
        "distance": `${distance}km`,
        "location": {
          "lat": center.lat,
          "lon": center.lon
        }
      }
    });

    return this.search(searchRequest);

  }

  getEntity(id: string): Promise<Entity> {

    return this.get('entity', id);
  }

  private get(type: string, id: string): Promise<any> {

    return this.http.get(`${this.esUrl}/${type}/_doc/${id}`)
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
