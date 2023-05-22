import { Response, Request } from 'express'
import { logger } from '../shared/logger'
import BugzillaBugService from '../services/bugzilla.service'

const BugService = new BugzillaBugService()

class BugsController {
  async createBug(req: Request, res: Response) {
    const data = await BugService.createBug(req, res)
    logger.info('POST Bugzilla Endpoint hit with: ' + JSON.stringify(req.body))
    return data
  }

  async getAllBug(req: Request, res: Response) {
    const data = await BugService.getBug(req, res)

    logger.info('POST Bugzilla Endpoint hit with: ' + req.body)
    return data
  }

  async updateBug(req: Request, res: Response) {
    const data = await BugService.updateBug(req, res)
    logger.info('Put Bugzilla Endpoint hit with: ' + JSON.stringify(req.body))
    return data
  }
}

export default BugsController
