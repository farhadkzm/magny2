import {CoreFields} from "./coreFields";

export class Entity extends CoreFields {

  //entity fields
  name: string;
  gender: string;
  website: string;
  address: string;
  description: string;
  location: Location;
  photoUrl: string;
  phone: string;
  verified: boolean;
  serviceType: string;
  entityType: string;
  score: number;
}
