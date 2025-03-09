describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});


describe('Swiper Gallery Test', function () {
  it('Check if buttons next and button back works fine', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.wait(2000);
    cy.get('.swiper-button-prev').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
  it('Check if gallery is properly working', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-wrapper').should('exist');
    cy.wait(2000);
    cy.get('.swiper-button-next').should('exist');
    cy.get('.swiper-button-prev').should('exist');
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
    cy.get('.swiper-button-prev').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-button-prev').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
  it.only('Check if slides displays correct information', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-wrapper').should('exist');
    cy.get('.card-description').should('contain', 'Rome')
    cy.get('.card-description').should('contain', 'Italy')
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.card-description').should('contain', 'London')
    cy.get('.card-description').should('contain', 'United Kingdom')
    cy.wait(2000);
    cy.get('.card-description').should('contain', 'Paris')
    cy.get('.card-description').should('contain', 'France')
  });
});


// Zweryfikuj, czy opis każdego slajdu jest wyświetlany poprawnie.
// Krok 1: Otwórz stronę z galerią.
// Krok 2: Dla każdego slajdu, sprawdź, czy tytuł i opis są wyświetlane.
// Krok 3: Upewnij się, że tytuł i opis odpowiadają oczekiwanym treściom.