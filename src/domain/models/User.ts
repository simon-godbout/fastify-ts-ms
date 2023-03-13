export class User {
  readonly id: string
  readonly customerId?: string
  readonly email: string
  readonly name?: string
  readonly roles: string[]

  constructor(params: {
    id: string
    customerId?: string
    email: string
    name?: string
    roles?: string[]
  }) {
    this.id = params.id
    this.customerId = params.customerId
    this.email = params.email
    this.name = params.name || ''
    this.roles = params.roles || []
  }

  isCustomer(): boolean {
    return this.customerId !== undefined
  }

  isAdmin(): boolean {
    return this.roles.includes('admin')
  }

  isSuperAdmin(): boolean {
    return this.roles.includes('super-admin')
  }

  isCustomerRolesManager(): boolean {
    return this.roles.includes('customer_roles-manager')
  }
}

export default User
