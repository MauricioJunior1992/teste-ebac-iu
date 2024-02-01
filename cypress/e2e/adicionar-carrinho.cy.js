/// <reference types = "cypress"/>

describe('Adicionar produto no carrinho', () => {

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()
    });

    afterEach(() => {
        cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2) > a').click()
    });
    
    it('Deve adicionar um produto no carrinho', () => {
        cy.get('.product-block').eq(1).click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type('2')
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', '2')
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
        cy.get('.remove > .fa').click()
        cy.get('.cart-empty').should('contain', 'Seu carrinho está vazio')

        
    });

});