import { IResolversContext } from "interfaces/apollo/IResolversContext";


export async function model(root: any, args: any, context: IResolversContext) {
  return  {
    id: '1d1d1d1d1d1d1d1',
    title: 'Title',
    description: 'Description',
    value: 1,
  }
}