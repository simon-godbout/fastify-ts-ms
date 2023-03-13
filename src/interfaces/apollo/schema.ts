export const schema = `
  scalar DateTime
  scalar Json

  directive @i18n on FIELD_DEFINITION

  directive @auth(
    requires: Role = ADMIN,
  ) on OBJECT | FIELD_DEFINITION

  enum Role {
    ADMIN
    SUPERADMIN
    CUSTOMER
  }

  type Model {
    id: ID!
    title: String!
    description: String!
    value: Number
  }

  input Model {
    id: ID
    title: String!
    description: String!
    value: Number
  }

  type Mutation {
    update(input: Model!): Boolean @auth(requires: CUSTOMER)
    create(input: Model!): Boolean @auth(requires: ADMIN)
    delete(id: String!): Boolean @auth(requires: SUPERADMIN)
  }

  type Query {
    model(id: String!) Model
    models() [Model] 
  }
`
