import {CoreFields} from "./coreFields";

export class Review extends CoreFields {

  //entity fields
  user: { id: number, name: string };
  title: string;
  text: string;
  score: number;
  entityId: string;

}
