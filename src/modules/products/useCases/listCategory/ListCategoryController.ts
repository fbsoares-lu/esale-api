import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

export class ListCategoryController {
  private listCategoryUseCase: ListCategoryUseCase;

  constructor(listCategoryUseCase: ListCategoryUseCase) {
    this.listCategoryUseCase = listCategoryUseCase;
  }

  public async handle(request: Request, response: Response) {
    const categories = await this.listCategoryUseCase.execute();
    return response.status(200).json(categories);
  }
}
