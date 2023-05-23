describe('Check the functionality of the bookstore page', function() {
    before(() => {
        cy.visit('https://demoqa.com/books');
    });

    it('Verify the title is correct', () => {
        cy.visit('http://demoqa.com/books');
        cy.get('.main-header').should('have.text', "Book Store");

    });
    
    it('Type to search displays the Title, Author and Publisher correctly', () => {

        cy.visit('http://demoqa.com/books');
        cy.get('#searchBox').type('Learning JavaScript Design Patterns');
        cy.get('span[id="see-book-Learning\ JavaScript\ Design\ Patterns"] > a').should('have.text', 'Learning JavaScript Design Patterns');
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(3)').should('have.text', 'Addy Osmani');
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(4)').should('have.text', "O'Reilly Media");
        cy.get('.action-buttons').click();
        cy.url().should('include', 'book=9781449331818');


});

    it('Verify if the categories are displayed correctly within the selected book page', () => {
        cy.visit('https://demoqa.com/books?book=9781449331818');

        cy.get('#ISBN-label').should('have.text', 'ISBN : ');
        cy.get('#title-label').should('have.text', 'Title : ');
        cy.get('#subtitle-label').should('have.text', 'Sub Title : ');
        cy.get('#author-label').should('have.text', 'Author : ');
        cy.get('#publisher-label').should('have.text', 'Publisher : ');
        cy.get('#pages-label').should('have.text', 'Total Pages : ');
        cy.get('#description-label').should('have.text', 'Description : ');
        cy.get('#website-label').should('have.text', 'Website : ');
  });

})
