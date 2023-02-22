import {
  getModuleListItems,
  getLessonListItems,
  getKeyInput,
  getLoginButton,
} from '../support/utils';
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
      interface Chainable<Subject> {
        navigateToHomePage(): typeof navigateToHomePage;
        navigateToLessonSelectPage(): typeof navigateToLessonSelectPage;
        navigateToLessonPage(): typeof navigateToLessonPage;
        navigateToLoginPage(): typeof navigateToLoginPage;
      }
    }
  }

  const navigateToHomePage = () => {
    navigateToLoginPage();
    getKeyInput().type('abcd-efgh-ijkl-mnop');
    getLoginButton().click();
  };
  const navigateToLessonSelectPage = () => {
    navigateToHomePage();
    getModuleListItems().first().click();
  };
  const navigateToLessonPage = () => {
    navigateToLessonSelectPage();
    getLessonListItems().first().click();
  }
  const navigateToLoginPage = () => {
    cy.visit('/');
  };

  Cypress.Commands.add('navigateToHomePage', navigateToHomePage);
  Cypress.Commands.add('navigateToLessonSelectPage', navigateToLessonSelectPage);
  Cypress.Commands.add('navigateToLessonPage', navigateToLessonPage);
  Cypress.Commands.add('navigateToLoginPage', navigateToLoginPage);
  export {};