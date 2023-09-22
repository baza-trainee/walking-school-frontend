import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";

test("renders footer with a proper tag", () => {
  render(<Footer />);

  const footerElement = screen.getByRole("contentinfo");

  expect(footerElement).toBeInTheDocument();
});

test("renders logo", () => {
  render(<Footer />);
  const logoImage = screen.getByAltText("logo");
  expect(logoImage).toBeInTheDocument();
});

test("renders links inside the footer", () => {
  render(<Footer />);
  const footerLink = screen.getByText("Проєкти");
  expect(footerLink).toBeInTheDocument();
});

test("renders social icons", () => {
  render(<Footer />);
  const linkedinIcon = screen.getByAltText("linkedin logo");
  const facebookIcon = screen.getByAltText("facebook logo");

  expect(linkedinIcon).toBeInTheDocument();
  expect(facebookIcon).toBeInTheDocument();
});

test("renders additional information", () => {
  render(<Footer />);
  const privacyPolicyLink = screen.getByText("Політика конфіденційності");
  const termsOfServiceLink = screen.getByText("Правила користування сайтом");
  const rightsText = screen.getByText(
    /Розробка Baza Trainee Ukraine 2023© Всі права захищені./,
  );

  expect(privacyPolicyLink).toBeInTheDocument();
  expect(termsOfServiceLink).toBeInTheDocument();
  expect(rightsText).toBeInTheDocument();
});
