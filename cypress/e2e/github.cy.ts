describe('Teste do ', () => {
  it('Testando o componente', () => {
    cy.visit('https://project-github-alexsandroneves.vercel.app/')
    cy.wait(2000) 
    cy.get('button').click()
    cy.get('.sc-hLBbgP').type('omariosouto')
    cy.wait(2000) 
    cy.get('button').click()
    cy.wait(2000) 
    cy.get('.kYsYdw').click()
    cy.wait(2000) 
    cy.get('.MuiButtonBase-root').click()

  
    })
})
