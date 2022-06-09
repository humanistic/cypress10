describe('Replpad Rx App continous integration', () => {
  it('Visits Replpad', () => {
    cy.visit('http://hostilefork.com/media/shared/replpad-js/')
    cy.get('.input').type('import @rx{enter}')
    cy.get('.stdout').should('contain','Enter your name as appears on a prescription:')
    cy.get('.input').type('Graham Chiu')
    cy.get('.input:focus').type('y{enter}')
    cy.get('.input:focus').type('n{enter}')
    cy.get('.input:focus').type('ABC1234{enter}')
    cy.get('.input:focus').type('Mr{enter}')
    cy.get('.input:focus').type('Basil{enter}')
  })
}) 

