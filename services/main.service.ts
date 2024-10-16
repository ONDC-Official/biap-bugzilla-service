import { logger } from '../shared/logger'
import BugzillaBugService from '../services/bugzilla.service'
import TrudeskService from '../services/trudesk.service'
import { TRUDESK } from '../utils/constant'

const BugService = new BugzillaBugService()
const Trudesk = new TrudeskService()

class MainService {
  async createIssue(req: any, res: any) {
    try {
      console.log(process.env.SELECTED_ISSUE_CRM,"=========process.env.SELECTED_ISSUE_CRM")
      let data
      if (process.env.SELECTED_ISSUE_CRM === TRUDESK) {
        data = await Trudesk.createBug(req, res)
        logger.info('POST Trudesk Endpoint hit with: ' + JSON.stringify(req.body))
      } else {
        data = await BugService.createBug(req, res)
        logger.info('POST Bugzilla Endpoint hit with: ' + req.body)
      }
      return data
    } catch (error: any) {
      logger.error(error)
      return error
    }
  }

  async getIssue(req: any, res: any) {
    try {
      let data
      if (process.env.SELECTED_ISSUE_CRM === TRUDESK) {
        data = await Trudesk.getBug(req, res)
        logger.info('POST Trudesk Endpoint hit with: ' + req.body)
      } else {
        data = await BugService.getBug(req, res)
        logger.info('POST Bugzilla Endpoint hit with: ' + req.body)
      }
      return data
    } catch (error: any) {
      logger.error(error)
      return error
    }
  }

  async updateIssue(req: any, res: any) {
    try {
      let data
      if (process.env.SELECTED_ISSUE_CRM === TRUDESK) {
        data = await Trudesk.updateBug(req, res)
        logger.info('POST Trudesk Endpoint hit with: ' + req.body)
      } else {
        data = await BugService.updateBug(req, res)
        logger.info('Put Bugzilla Endpoint hit with: ' + JSON.stringify(req.body))
      }
      return data
    } catch (error: any) {
      logger.error(error)
      return error
    }
  }
}
export default MainService
