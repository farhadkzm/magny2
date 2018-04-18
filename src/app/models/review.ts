import {CoreFields} from "./coreFields";

export class Review extends CoreFields {

  //entity fields
  user: { id: string, name: string };
  title: string;
  text: string;
  score: number;
  entityId: string;
  reported: boolean;

}
