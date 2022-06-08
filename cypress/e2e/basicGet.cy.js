describe('CI of Rx App', () => {
  it('Visits Replpad', () => {
    cy.visit('http://hostilefork.com/media/shared/replpad-js/')
    cy.get('.input').type('import @rx{enter}')
    cy.get('.stdout').should('contain','Enter your name as appears on a prescription:').type('Graham Chiu')
    // cy.find("Enter").type('Graham Chiu')
  })
}) 

