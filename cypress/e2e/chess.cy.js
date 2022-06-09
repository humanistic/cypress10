describe('Chess App on replpad continuous integration', () => {
  it('Visits Replpad', () => {
    cy.visit('http://hostilefork.com/media/shared/replpad-js/')
    cy.get('.input').type('do @chess{enter}')
    cy.wait(5000)
    // cy.contains('chess>>').type('print reverse "ETELPMOC TSET"{enter}')
    // cy.contains('TEST COMPLETE')
    cy.contains('chess>>').type('chiu-vs-jensen{enter}')
    cy.wait(30000)
    cy.contains('Thanks Kai!')
    // 
  })
}) 
