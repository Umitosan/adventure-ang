export class Chapter {
  currentPlayer: any;

  constructor(
    public title: string,
    public body: string,
    public imgUrl: string,
    public id: number,
    public option1: any[],
    public option2: any[]
  ){ }
}
