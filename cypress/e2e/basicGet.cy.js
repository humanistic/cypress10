describe('CI of Replpad Rx App', () => {
  it('Visits Replpad', () => {
    cy.visit('http://hostilefork.com/media/shared/replpad-js/')
    cy.get('.input').type('import @rx{enter}')
    cy.get('.stdout').should('contain','Enter your name as appears on a prescription:')
    cy.get('.input').type('Graham Chiu')
    // cy.find("Enter").type('Graham Chiu')
  })
}) 

