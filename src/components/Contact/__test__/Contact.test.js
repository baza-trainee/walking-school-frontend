import { render, fireEvent, screen } from "@testing-library/react";
import { ContactForm } from "../ContactForm/ContactForm";
import { CustomInput } from "../CustomInput/CustomInput";

const renderAndGrabElements = () => {
  render(<ContactForm />);

  const elements = {
    formElement: screen.getByTestId("form"),
    nameInput: screen.getByPlaceholderText("Введіть своє ім’я"),
    surnameInput: screen.getByPlaceholderText("Введіть своє прізвище"),
    emailInput: screen.getByPlaceholderText("Введіть електронну пошту"),
    phoneNumberInput: screen.getByPlaceholderText("+XXX -"),
    messageInput: screen.getByPlaceholderText("Введіть ваше повідомлення"),
    submitButton: screen.getByRole("button", { name: "Надіслати" }),
  };

  return elements;
};

describe("ContactForm Component", () => {
  test("renders ContactForm component with proper form tag", () => {
    const { formElement } = renderAndGrabElements();
    expect(formElement).toBeInTheDocument();
  });

  test("renders ContactForm component", () => {
    const {
      nameInput,
      surnameInput,
      emailInput,
      phoneNumberInput,
      messageInput,
      submitButton,
    } = renderAndGrabElements();

    const expectToBeInTheDocument = (value) => {
      expect(value).toBeInTheDocument();
    };

    expectToBeInTheDocument(nameInput);
    expectToBeInTheDocument(surnameInput);
    expectToBeInTheDocument(emailInput);
    expectToBeInTheDocument(phoneNumberInput);
    expectToBeInTheDocument(messageInput);
    expectToBeInTheDocument(submitButton);
  });

  test("clears inputs on successful submit", () => {
    const {
      nameInput,
      surnameInput,
      emailInput,
      phoneNumberInput,
      messageInput,
      submitButton,
    } = renderAndGrabElements();

    fireEvent.input(nameInput, { target: { value: "Denys" } });
    fireEvent.input(surnameInput, { target: { value: "Topchyi" } });
    fireEvent.input(emailInput, {
      target: { value: "denystopchyi2@test.com" },
    });
    fireEvent.click(submitButton);

    const toHaveEmptyValue = (value) => {
      expect(value).toHaveValue("");
    };

    toHaveEmptyValue(nameInput);
    toHaveEmptyValue(surnameInput);
    toHaveEmptyValue(emailInput);
    toHaveEmptyValue(phoneNumberInput);
    toHaveEmptyValue(messageInput);
  });

  test("shows error messages when required fields are empty on submit", () => {
    const { submitButton } = renderAndGrabElements();

    fireEvent.click(submitButton);

    expect(screen.getByText("Введіть своє ім’я")).toBeInTheDocument();
    expect(screen.getByText("Введіть своє прізвище")).toBeInTheDocument();
    expect(screen.getByText("Введіть електронну пошту")).toBeInTheDocument();
  });
});

describe("CustomInput Component", () => {
  test("renders input field correctly", () => {
    render(
      <CustomInput
        type="text"
        text="Текст"
        placeholder="Введите текст"
        name="text"
        value=""
        onChangeHandler={() => {}}
      />,
    );

    expect(screen.getByPlaceholderText("Введите текст")).toBeInTheDocument();
    expect(screen.getByLabelText("Текст")).toBeInTheDocument();
  });

  test("handles value change correctly", () => {
    const handleChange = jest.fn();
    render(
      <CustomInput
        type="text"
        text="Текст"
        placeholder="Введите текст"
        name="text"
        value=""
        onChangeHandler={handleChange}
      />,
    );

    fireEvent.change(screen.getByPlaceholderText("Введите текст"), {
      target: { value: "new value" },
    });

    expect(handleChange).toHaveBeenCalled();
  });

  test("renders error message when error prop is provided", () => {
    render(
      <CustomInput
        type="text"
        text="Текст"
        placeholder="Введите текст"
        name="text"
        value=""
        onChangeHandler={() => {}}
        error="Ошибка"
      />,
    );

    expect(screen.getByText("Ошибка")).toBeInTheDocument();
  });

  test("renders textarea correctly when type is textarea", () => {
    render(
      <CustomInput
        type="textarea"
        placeholder="Введите текст"
        name="text"
        value=""
        onChangeHandler={() => {}}
      />,
    );

    expect(screen.getByPlaceholderText("Введите текст").tagName).toBe(
      "TEXTAREA",
    );
  });
});
