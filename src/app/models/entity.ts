import {CoreFields} from "./coreFields";
import {ESLocation} from "./eSLcation";
import {ServiceType} from "./service-type.enum";

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
  serviceType: ServiceType;
  entityType: string;
  ownerId: string;
  score: number;
}
