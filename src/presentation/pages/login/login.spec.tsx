import React from "react";
import {
  render,
  RenderResult,
  fireEvent,
  cleanup,
} from "@testing-library/react";
import Login from "./login";
import faker from "faker";
import { ValidationStub } from "@/presentation/test/mock-validation";

type SutTypes = {
  sut: RenderResult;
  validationStub: ValidationStub;
};

const makeSut = (): SutTypes => {
  const validationStub = new ValidationStub();
  validationStub.errorMessage = faker.random.words();
  const sut = render(<Login validation={validationStub} />);
  return {
    sut,
    validationStub,
  };
};

describe("Login Component", () => {
  afterEach(cleanup);
  test("Should not render spinner and error on start", () => {
    const { sut, validationStub } = makeSut();
    const errorWrap = sut.getByTestId("error-wrap");
    expect(errorWrap.childElementCount).toBe(0);

    const subMitButton = sut.getByTestId("submit") as HTMLButtonElement;
    expect(subMitButton.disabled).toBe(true);

    const emailStatus = sut.getByTestId("email-status");
    expect(emailStatus.title).toBe(validationStub.errorMessage);
    expect(emailStatus.textContent).toBe("🔴");

    const passwordStatus = sut.getByTestId("password-status");
    expect(passwordStatus.title).toBe(validationStub.errorMessage);
    expect(passwordStatus.textContent).toBe("🔴");
  });

  test("Should show email error if Validation fails", () => {
    const { sut, validationStub } = makeSut();

    const emailInput = sut.getByTestId("email");
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } });
    const emailStatus = sut.getByTestId("email-status");
    expect(emailStatus.title).toBe(validationStub.errorMessage);
    expect(emailStatus.textContent).toBe("🔴");
  });

  test("Should show passowrd error if Validation fails", () => {
    const { sut, validationStub } = makeSut();

    const passwordInput = sut.getByTestId("password");
    fireEvent.input(passwordInput, {
      target: { value: faker.internet.password() },
    });
    const passwordStatus = sut.getByTestId("password-status");
    expect(passwordStatus.title).toBe(validationStub.errorMessage);
    expect(passwordStatus.textContent).toBe("🔴");
  });

  //code test to check if email and password are valid

  // test("Should call Validation with correct email", () => {
  //   const { sut, validationStub } = makeSut();
  //   const emailInput = sut.getByTestId("email");
  //   const email = faker.internet.email();
  //   fireEvent.input(emailInput, { target: { value: email } });
  //   expect(validationStub.fieldName).toBe("email");
  //   expect(validationStub.fieldValue).toBe(email);
  // });

  // test("Should call Validation with correct password", () => {
  //   const { sut, validationStub } = makeSut();
  //   const passwordInput = sut.getByTestId("password");
  //   const password = faker.internet.password();
  //   fireEvent.input(passwordInput, { target: { value: password } });
  //   expect(validationStub.fieldName).toBe("password");
  //   expect(validationStub.fieldValue).toBe(password);
  // });
});
