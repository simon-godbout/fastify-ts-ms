import { Language } from "@chefcookit/utils"
import { IOperations } from "interfaces/apollo/IOperations"
import User from "domain/models/User"

export interface IResolversContext {
  operations: IOperations
  language: Language
  user: User
}