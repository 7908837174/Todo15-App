import { type Model } from 'mongoose'

export default class BasicService {
  model: Model<any>
  constructor(model: Model<any>) {
    this.model = model
  }

  async findAll(): Promise<any> {
    return await this.model.find()
  }

  async findById(id: string): Promise<any> {
    return await this.model.findById(id)
  }

  async findOne(query: any): Promise<any> {
    return await this.model.findOne(query)
  }

  async create(body: any): Promise<any> {
    return await this.model.create(body)
  }

  async delete(id: string): Promise<any> {
    return await this.model.deleteOne({ _id: id })
  }
}
