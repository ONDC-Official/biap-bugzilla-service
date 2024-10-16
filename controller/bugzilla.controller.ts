import { Response, Request } from 'express'
import { logger } from '../shared/logger'
import MainService from '../services/main.service'

const mainService = new MainService()

class BugsController {
  async createBug(req: Request, res: Response) {
    const data = await mainService.createIssue(req, res)
    logger.info('POST Bugzilla Endpoint hit with: ' + JSON.stringify(req.body))
    return data
  }

  async getAllBug(req: Request, res: Response) {
    const data = await mainService.getIssue(req, res)

    logger.info('POST Bugzilla Endpoint hit with: ' + req.body)
    return data
  }

  async updateBug(req: Request, res: Response) {
    const data = await mainService.updateIssue(req, res)
    logger.info('Put Bugzilla Endpoint hit with: ' + JSON.stringify(req.body))
    return data
  }
}

export default BugsController
