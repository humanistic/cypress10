describe('Clipboard test on replpad continuous integration', () => {
  it('Visits Replpad', () => {
    cy.visit('http://hostilefork.com/media/shared/replpad-js/')
    cy.get('.input:focus').type('replpad-write/html {<input type="button" id="copy NHI" value="Copy NHI" onclick='reb.Elide("write clipboard:// {hello}")' />')
    cy.get('button').click({ force: true })
})
})
