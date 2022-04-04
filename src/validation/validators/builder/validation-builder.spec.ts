import { RequiredFieldValidation } from "@/validation/validators";
import { ValidationBuilder } from "./validation-builder";

describe("ValidationBuilder", () => {
  test("Should return RequiredFieldValidation ", () => {
    const validations = ValidationBuilder.field("any_Field").required().build();
    expect(validations).toEqual([new RequiredFieldValidation("any_Field")]);
  });

  test("Should return EmailValidation ", () => {
    const validations = ValidationBuilder.field("any_Field").email().build();
    expect(validations).toEqual([new RequiredFieldValidation("any_Field")]);
  });
});
