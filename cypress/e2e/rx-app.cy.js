describe('Replpad Rx App continous integration', () => {
  it('Visits Replpad', () => {
    cy.visit('http://hostilefork.com/media/shared/replpad-js/')
    cy.get('.input').type('import @rx{enter}')
    cy.get('.stdout').should('contain','Enter your name as appears on a prescription:')
    cy.get('.input').type('Graham Chiu')
    // cy.get('.stdout').eq(-1).should('contain','Enter your prescriber ID number:')
    cy.get('.input').eq(0).type('1234567{enter}')
    cy.get('.input').eq(1).type('y{enter}')
    cy.get('input').eq(2).type('n{enter}')
  })
}) 

