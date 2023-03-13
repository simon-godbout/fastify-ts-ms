// Should be shared

export interface IQuery<Params, Result> {
  execute(params: Params): Promise<Result>
}