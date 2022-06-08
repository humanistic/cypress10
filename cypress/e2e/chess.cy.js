describe('CI of Replpad Chess App', () => {
  it('Visits Replpad', () => {
    cy.visit('http://hostilefork.com/media/shared/replpad-js/')
    cy.get('.input').type('do @chess{enter}')
    cy.wait(1000)
    cy.get('.input').type('print reverse "ETELPMOC TSET"{enter}')
    cy.get('.stdout').should('contain','TEST COMPLETE')
  })
}) 
