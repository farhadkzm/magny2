import {CoreFields} from "./coreFields";
import {ESLocation} from "./eSLcation";

export class Entity extends CoreFields {

  //entity fields
  name: string;
  website: string;
  address: string;
  description: string;
  location: ESLocation;
  photoUrl: string;
  phone: string;
  verified: boolean;
  serviceType: string;
  entityType: string;
  score: number;
}
