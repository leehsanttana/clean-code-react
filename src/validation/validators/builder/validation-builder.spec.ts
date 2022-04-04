import { RequiredFieldValidation, EmailValidation, MinLengthValidation } from "@/validation/validators";
import { ValidationBuilder } from "./validation-builder";

describe("ValidationBuilder", () => {
  test("Should return RequiredFieldValidation ", () => {
    const validations = ValidationBuilder.field("any_Field").required().build();
    expect(validations).toEqual([new RequiredFieldValidation("any_Field")]);
  });

  test("Should return EmailValidation ", () => {
    const validations = ValidationBuilder.field("any_Field").email().build();
    expect(validations).toEqual([new EmailValidation("any_Field")]);
  });

  test("Should return MinLengthValidation ", () => {
    const validations = ValidationBuilder.field("any_Field").min(5).build();
    expect(validations).toEqual([new MinLengthValidation("any_Field", 5)]);
  });
});
