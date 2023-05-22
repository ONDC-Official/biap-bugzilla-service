import { ICreateBug } from '../interfaces/Bugs'
import Joi from 'joi'

export function CreateBugSchemaValidator(bugObject: ICreateBug) {
  const schema = Joi.object({
    product: Joi.string().required(),
    summary: Joi.string().required(),
    alias: Joi.string().required().max(40),
    bpp_id: Joi.string().required(),
    bpp_name: Joi.string().required(),
    attachments: Joi.array().items(Joi.string()),
    action: Joi.object(),
  })

  const { error } = schema.validate(bugObject)

  return error
}
