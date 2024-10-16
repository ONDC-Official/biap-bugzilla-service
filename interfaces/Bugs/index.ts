export type priority = 'Enhancement' | 'Normal' | 'Minor' | 'Major' | 'Blocker' | 'Critical' | 'Trival'

export interface ICreateBug {
  product: string              
  issue_desc: string           
  summary: string              
  alias: string
  bpp_id: string               
  bpp_name: string             
  attachments: string[]
  action: any,
  network_issue_id: string     
  issue_sub_category: string   
  issue_sub_category_long_desc: string   
  network_order_id: string     
  network_item_id: string
}


export interface ICreateTicket {
  issue: string
  subject: string
  owner: string
  group: string
  type: string
  priority: string
}

export interface ICreateUser {
  email: string
  full_name: string
  login: string
}

export interface IRegisterPRoduct {
  name: string
  description: string
  version: string
  is_open: true
  has_unconfirmed: true
}

export interface IComponents {
  product: string
  name: string
  description: string
  default_assignee: string
  is_open: number
}
