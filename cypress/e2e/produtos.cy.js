/// <reference types='cypress' />

describe('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar o primeiro produto da lista', () => {
        cy.get('[class="product-block grid"]').first().click()
    })

    it('Deve selecionar o último produto da lista', () => {
        cy.get('[class="product-block grid"]').last().click()
    })

    it('Deve selecionar o quarto item da lista', () => {
        cy.get('[class="product-block grid"]').eq(3).click()
    })

    it('Deve selecionar um produto pelo nome', () => {
        cy.get('[class="product-block grid"]').contains('Apollo Running Short').click()
    })

    it.only ('Deve adicionar produto ao carrinho', () => {
        var quantidade=3
        cy.get('[class="product-block grid"]').contains('Apollo Running Short').click()
        cy.get('.button-variable-item-33').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Apollo Running Short” foram adicionados no seu carrinho.')
    })




})

