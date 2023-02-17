


describe('Teste do meu componente', () => {
  it('Testando o componente', () => {
    cy.visit('https://project-github-alexsandroneves.vercel.app/')
    cy.get('button').click()
    cy.get('.sc-hLBbgP').type('omariosouto')
    cy.get('button').click()
    cy.get('.kYsYdw').click()
    cy.get('.MuiButtonBase-root').click()
    cy.get('.sc-hLBbgP').type('alexsandroneves')
    cy.get('button').click()
    cy.get('.kYsYdw').click()
    cy.get('.MuiButtonBase-root').click()
    




    })
})
