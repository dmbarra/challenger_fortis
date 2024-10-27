import { MainPage } from "../page-objects/main.page";
import { ResultPage } from "../page-objects/result.page";

const mainPage = new MainPage();
const resultPage = new ResultPage();

describe("Random dates", () => {
  it("Pickup 4 random dates", () => {
    const initialDate = "2024-01-05";
    const endDate = "2025-11-25";

    cy.visit("/");
    mainPage.getRadomDatesField().clear().type(4);
    mainPage.setInitialDate(initialDate);
    mainPage.setEndDate(endDate);
    mainPage.getGetDatesButton().click();
    resultPage.assertNumbersOfResult(4);
    resultPage.assertResultMessageText(initialDate, endDate);
  });
});
