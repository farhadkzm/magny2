export class Entity {
  id: string;
  name: string;
  gender: string;
  website: string;
  address: string;
  description: string;
  location: { lat: number, lon: number };
  photoUrl: string;
  phone: string;
  verified: boolean;
  serviceType: string;
  entityType: string;
  created: string;
  score: number;
}
