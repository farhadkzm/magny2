import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Entity} from "./models/entity";
import {Review} from "./models/review";
import {Profile} from "./models/profile";
import {ESLocation} from "./models/eSLcation";
import {Notification} from "./models/notification";

@Injectable()
export class DatabaseService {

  private esUrl: string = 'http://localhost:9200';
  private apiKey: string = 'AIzaSyB_5xR0k1AhYbVW5OP_t6XFncWE7xDHw_0';

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

  createService(entity: Entity): Promise<any> {
    let ownerId = 'myuserid';
    entity.ownerId = ownerId;
    return this.http.post(`${this.esUrl}/entity/_doc/${ownerId}`, entity).toPromise()
      .then(data => console.log(data));
  }

  postNotification(notification: Notification): Promise<any> {


    return this.http.post(`${this.esUrl}/notification/_doc`, notification).toPromise()
      .then(data => console.log(data));
  }

  getMyBusiness(): Promise<Entity> {
    let ownerId: string = 'myuserid';

    return this.get('entity', ownerId)

  }

  getPastBizNotifications(entityId: string): Promise<Array<Notification>> {
    //resultEvent
    let searchRequest = {
      "query": {
        "bool": {
          "filter": [{"term": {"entityId": entityId}}]
        }
      }

    };
    return this.http.post(`${this.esUrl}/notification/_search`, searchRequest)
      .toPromise()
      .then(data => data['hits'].hits.map(it => {
        let source = it._source;
        source.id = it._id;
        return source
      }));

  }

  getSubscribedNotifications(): Promise<Array<Notification>> {
    let userId = 'myuserid';
    //resultEvent
    let searchRequest = {
      "query": {
        "bool": {
          "filter": [{"term": {"userId": userId}}]
        }
      }

    };
    return this.http.post(`${this.esUrl}/subscribed_business/_search`, searchRequest)
      .toPromise()
      .then(data => data['hits'].hits.map(it => it._source.entityId))
      .then(ids => {

        //resultEvent
        let searchRequest = {
          "query": {
            "bool": {
              "filter": [{"terms": {"entityId": ids}}]
            }
          }

        };
        return this.http.post(`${this.esUrl}/notification/_search`, searchRequest)
          .toPromise()
          .then(data => data['hits'].hits.map(it => {
            let source = it._source;
            source.id = it._id;
            return source
          }));

      })

  }

  getNearbyNotifications(): Promise<Array<Notification>> {
    return this.getMyProfile().then(profile => profile.address)
      .then(address => this.getGeoCode(address, null))
      .then(data=>{console.log('getGeoCode',data);return data;})
      .then(location => this.searchServices(location,
        null,
        null,
        null,
        20))
      .then(data=>{console.log('searchServices',data);return data;})
      .then(entities => entities.map(it => it.id))
      .then(data=>{console.log('entities.map',data);return data;})
      .then(ids => {

        //resultEvent
        let searchRequest = {
          "query": {
            "bool": {
              "filter": [{"terms": {"entityId": ids}}]
            }
          }

        };
        return this.http.post(`${this.esUrl}/notification/_search`, searchRequest)
          .toPromise()
          .then(data => data['hits'].hits.map(it => {
            let source = it._source;
            source.id = it._id;
            return source
          }));

      })
      .then(data=>{console.log('search',data);return data;});


  }

  getMyProfile(): Promise<Profile> {

    return this.get('profile', 'myuserid');
  }

  getGeoCode(address: string, defaultLocation: ESLocation): Promise<ESLocation> {

    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address},Australia&key=${this.apiKey}`).toPromise()
      .then(data => {
          console.log('data from Google Geo Service', data);
          let results = data['results'];
          if (results.length != 0) {
            return new ESLocation(results[0].geometry.location.lat
              , results[0].geometry.location.lng);

          }
          console.log('returning default location');
          return defaultLocation
        }
      );
  }

  createReview(review: Review): void {

    this.http.post(`${this.esUrl}/review/_doc`, review).toPromise()
      .then(data => console.log(data));
  }

  updateProfile(profile: Profile): void {

    this.http.post(`${this.esUrl}/profile/_doc/myuserid`, profile).toPromise()
      .then(data => console.log(data));
  }

  getBusinesses(from: number = 0, size: number = 10): Promise<Array<Entity>> {

    return this.search({
      sort: [{created: "desc"}],
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
                 distance: number = 30) {
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
