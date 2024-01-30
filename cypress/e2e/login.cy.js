/// <reference types ="cypress"/>

context('Funcionalidade Login', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.page-title').should('contain' , 'conta')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
  })

  it('Deve exibir mensagem de erro ao inserir usuário ou senha inválidos', () => {
    cy.get('#username').type('ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain',"desconhecido")
  })

  it('Deve exibir mensagem de erro ao inserir usuário ou senha inválidos', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain',"incorreta")
})
})