import { body } from "express-validator";

export class CreatePermissionValidation {
  static handle() {
    return [
      body("name").notEmpty().withMessage("Name is required"),
      body("description").notEmpty().withMessage("Password is required"),
    ];
  }
}