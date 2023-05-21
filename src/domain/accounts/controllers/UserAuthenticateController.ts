import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "../useCases/AuthenticateUserUseCase";

export class UserAuthenticateController {
  private authenticateUserUseCase: AuthenticateUserUseCase;

  constructor(authenticateUserUseCase: AuthenticateUserUseCase) {
    this.authenticateUserUseCase = authenticateUserUseCase;
  }

  public async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const token = await this.authenticateUserUseCase.execute({
      email,
      password,
    });

    return response.status(200).json(token);
  }
}
