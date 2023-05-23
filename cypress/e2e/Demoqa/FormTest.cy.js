describe('Complete and submit the form', () => {


    it('Should correctly fill in the form', () => {
        cy.visit('http://demoqa.com/');
        cy.get('.category-cards > :nth-child(2)').click();
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click();
        cy.get('#firstName').type('Anitei');
        cy.get('#lastName').type('Alina');
        cy.get('#userEmail').type('alina.anitei@yahoo.com');
        cy.get('#genterWrapper > .col-md-9 > :nth-child(2)').type('female');
        cy.get('#userNumber').type('0771139403');
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__month-select').select('March');
        cy.get('.react-datepicker__year-select').select('1994');
        cy.get('.react-datepicker__day--022').click();
        cy.get('.subjects-auto-complete__value-container').type('Top 10 Benefits of Automated Testing ');
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').type('0');
        cy.get('#uploadPicture').selectFile('/Users/tester/Desktop/teste/cypress/e2e/Demoqa/picture.png', {
        action: 'drag-drop'
      })
        cy.get('#currentAddress').type('test1 ,test2 ,test3');


    


    })



})