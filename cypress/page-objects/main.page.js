const MAIN_FORM = "form[method='get']";
const RANDOM_DATE = "input[type=text]";
const INITIAL_DAY_DATE = "select[name='start_day']";
const INITIAL_MONTH_DATE = "select[name='start_month']";
const INITIAL_YEAR_DATE = "select[name='start_year']";
const END_DAY_DATE = "select[name='end_day']";
const END_MONTH_DATE = "select[name='end_month']";
const END_YEAR_DATE = "select[name='end_year']";
const GET_DATES_BUTTON = "input[type='submit']";

export class MainPage {
  constructor() {}

  getMainForm() {
    return cy.get(MAIN_FORM).eq(1);
  }

  getRadomDatesField() {
    return this.getMainForm().find(RANDOM_DATE);
  }

  getGetDatesButton() {
    return this.getMainForm().find(GET_DATES_BUTTON);
  }

  setInitialDate(dateStr) {
    this.setDate(
      dateStr,
      INITIAL_DAY_DATE,
      INITIAL_MONTH_DATE,
      INITIAL_YEAR_DATE
    );
  }

  setEndDate(dateStr) {
    this.setDate(dateStr, END_DAY_DATE, END_MONTH_DATE, END_YEAR_DATE);
  }

  setDate(dateStr, daySelector, monthSelector, yearSelector) {
    const [yearStr, monthStr, dayStr] = dateStr.split("-");
    const month = new Date(dateStr).toLocaleString("default", {
      month: "long",
    });

    console.log(dayStr);
    console.log(month);
    console.log(yearStr);

    this.getMainForm()
      .find(daySelector)
      .select(parseInt(dayStr, 10).toString());
    this.getMainForm().find(monthSelector).select(month);
    this.getMainForm().find(yearSelector).select(yearStr);
  }
}
