import { ICreateBug } from '../interfaces/Bugs'
import Joi from 'joi'

export function CreateBugSchemaValidator(bugObject: ICreateBug) {
  const schema = Joi.object({
    product: Joi.string().required(),
    summary: Joi.string().required(),
    alias: Joi.string().required().max(40),
    bpp_id: Joi.string().required(),
    issue_desc: Joi.string().optional(),
    bpp_name: Joi.string().optional(),
    network_item_id: Joi.string().optional(),
    network_order_id: Joi.string().optional(),
    issue_sub_category_long_desc: Joi.string().optional(),
    issue_sub_category: Joi.string().optional(),
    network_issue_id: Joi.string().optional(),
    attachments: Joi.array().items(Joi.string()),
    action: Joi.object(),
  })
  console.log("===here error ")
  const { error } = schema.validate(bugObject)

  return error
}
