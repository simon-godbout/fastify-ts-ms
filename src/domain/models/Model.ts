// Exemple model
export class Model {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly value?: number

  constructor(params: {
    id: string,
    title: string,
    description: string,
    value?: number,
  }) {
    this.id = params.id
    this.title = params.title
    this.description = params.description
    this.value = params.value
  }
}