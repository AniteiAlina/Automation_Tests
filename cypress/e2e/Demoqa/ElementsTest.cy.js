describe('Verify the functionality of elements', function() {
    before(() => {
        cy.visit('https://demoqa.com/elements');
    });

   it('T1 - Verify the Text Box section', () => {
    
        cy.get('#item-0').click();
        cy.get('#userName').type('Anitei Alina');
        cy.get('#userEmail').type('alina.anitei@yahoo.com');
        cy.get('#currentAddress').type('Test 1234, automation testing');
        cy.get('#permanentAddress').type('Test1, test2, test3');
        cy.get('#submit').click();

        
        // cy.get('#email').should('contains.text', 'Email:alina.anitei@yahoo.com');
        // cy.get('#name').should('contains.text', 'Name:Anitei Alina');
        // cy.get('.border > #currentAddress').should('contains.text', 'Current Address :Test 1234, automation testing ');
        // cy.get('.border > #permanentAddress').should('contains.text', 'Permanent Address:Test1, test2, test3');
    })

    it('Verify the Check Box Section', () => { 
        cy.visit('https://demoqa.com/elements');
        cy.get('#item-1').click();
        cy.get('.rct-checkbox > .rct-icon').click();
        cy.get('#result').should('contains.text', 'You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile');
        cy.get('.rct-icon-expand-all').click();
        cy.get('.rct-node-expanded > ol').should('be.visible').contains('Desktop');
        cy.get('.rct-node-expanded > ol').should('be.visible').contains('Documents');
        cy.get('.rct-node-expanded > ol').should('be.visible').contains('Downloads');
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > label > .rct-title');
        cy.get('.rct-node-expanded').should('be.visible').contains('Notes');
        cy.get('.rct-node-expanded').should('be.visible').contains('Commands');
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > ol > :nth-child(1) > .rct-text > label > .rct-title');
        cy.get('.rct-node-expanded').should('be.visible').contains('WorkSpace');
        cy.get('.rct-node-expanded').should('be.visible').contains('Office');
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > ol > :nth-child(1) > .rct-text > label > .rct-title');
        cy.get('.rct-node-expanded').should('be.visible').contains('Word File.doc');
        cy.get('.rct-node-expanded').should('be.visible').contains('Excel File.doc');
        cy.get(':nth-child(2) > ol > :nth-child(1) > .rct-text > .rct-collapse');
        cy.get('.rct-node-expanded').should('be.visible').contains('React');
        cy.get('.rct-node-expanded').should('be.visible').contains('Angular');
        cy.get('.rct-node-expanded').should('be.visible').contains('Veu');
        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > label > .rct-title')    
        cy.get('.rct-node-expanded').should('be.visible').contains('Public');
        cy.get('.rct-node-expanded').should('be.visible').contains('Private');
        cy.get('.rct-node-expanded').should('be.visible').contains('Classified');
        cy.get('.rct-node-expanded').should('be.visible').contains('General');

        cy.get('.rct-option-collapse-all').click();


    });

    it('Verify the Radio button section', () => { 
        cy.visit('https://demoqa.com/elements');
        cy.get('#item-2').click();
        cy.get(':nth-child(2) > .custom-control-label').type('Yes').click().should('have.text', 'Yes');
        cy.get(':nth-child(3) > .custom-control-label').type('Impressive').click().should('have.text', 'Impressive');
        cy.get('.custom-control.disabled').click();
        
        
    })

    })