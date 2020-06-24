import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { User } from '../models/User'

class UserController {
  async listAll (request: Request, response: Response) {
    try {
      const userRepository = getRepository(User)
      const users = await userRepository.find()
      return response.json(users)
    } catch (error) {
      return response.sendStatus(400)
    }
  }

  async create (request: Request, response: Response) {
    try {
      const userRepository = getRepository(User)
      const user = new User()
      user.firstName = request.body.firstName
      user.lastName = request.body.lastName
      await userRepository.save(user)
      return response.json(user)
    } catch (error) {
      return response.sendStatus(400)
    }
  }
}

export default new UserController()
