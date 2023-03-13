import { IQuery } from "domain/models/IQuery";
import { Model } from "domain/models/Model";

export class GetModel implements IQuery<{ id: string }, Model> {
  async execute(params: { id: string }): Promise<Model> {
    const { id } = params
    return new Model({
      id,
      title: 'Title',
      description: 'Description'
    })
  }
}