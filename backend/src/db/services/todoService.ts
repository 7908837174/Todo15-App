import { TodoModel } from '../models'
import BasicService from './basic/basicService'

export default class TodoService extends BasicService {
  constructor() {
    super(TodoModel)
  }
}
