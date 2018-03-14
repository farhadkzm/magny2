export class Review {
  id: string;
  user: { id: number, name: string };
  approved: boolean;
  title: string;
  text: string;
  score: number;
  entityId: string;

}
