import {Answer} from '../answer/answer.model';

export class Question {
  _id?: string;
  title: string;
  description: string;
  createdAt?: Date;
  icon?: string;
  answers: Answer[];

  constructor ( _title: string, _description: string, _createdAt?: Date, _icon?: string ) {
    this._id = '1';
    this.title = _title;
    this.description =  _description;
    this.createdAt = _createdAt;
    this.icon = _icon;
    this.answers = [];
  }
}