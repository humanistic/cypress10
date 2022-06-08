describe('CI of Replpad Chess App', () => {
  it('Visits Replpad', () => {
    cy.visit('http://hostilefork.com/media/shared/replpad-js/')
    cy.get('.input').type('do @chess{enter}')
    cy.wait(1000)
    cy.get('.input:last-of-type').type('print reverse "ETELPMOC TSET"{enter}')
    cy.get('.stdout').eq(-3).should('contain','TEST COMPLETE')
  })
}) 
