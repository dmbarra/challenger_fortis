const MAIN_FORM = "div[id='invisible']";
const RESULT_DATES = "p[style='line-height: 1.4em; margin-left: 2em']";
const RESULT_RESUME_TEXT = "p";

export class ResultPage {
  constructor() {}

  getMainForm() {
    return cy.get(MAIN_FORM);
  }

  assertNumbersOfResult(numbers) {
    this.getMainForm()
      .children(RESULT_DATES)
      .invoke("text")
      .then((text) => text.split("\n").filter((date) => date.trim() !== ""))
      .then((numberOfDates) => {
        expect(numberOfDates.length).to.equal(numbers);
      });
  }

  assertResultMessageText(startDate, endDate) {
    this.getMainForm()
      .children(RESULT_RESUME_TEXT)
      .invoke("text")
      .then((text) => {
        const regex = new RegExp(
          `They were picked randomly out of \\d+ possible dates between ${startDate} and ${endDate}\\.`
        );
        expect(text).to.match(regex);
      });
  }
}
