describe('Chess App on replpad continuous integration', () => {
  it('Visits Replpad', () => {
    cy.visit('http://hostilefork.com/media/shared/replpad-js/')
    cy.get('.input').type('do @chess{enter}')
    cy.wait(1000)
    cy.contains('chess>>').type('print reverse "ETELPMOC TSET"{enter}')
    cy.contains('TEST COMPLETE')
    // cy.get('.input').eq(0).type('print reverse "ETELPMOC TSET"{enter}')
    // cy.get('.stdout').should('contain','TEST COMPLETE')
  })
}) 
