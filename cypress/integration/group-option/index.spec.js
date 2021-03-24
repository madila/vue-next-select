/// <reference types="cypress" />

context('group-options', () => {
  it('should select values of group option when click group option', () => {
    cy.visit('/cypress/integration/group-option/index.html')
    cy.get('.vue-select').click()

    cy.get('.vue-dropdown-item.group').trigger('click')

    cy.get('.vue-dropdown-item.selected').should('have.length', 4)
  })

  it('should deselect values of group option when click group option', () => {
    cy.visit('/cypress/integration/group-option/index.html')
    cy.get('.vue-select').click()
    cy.get('.vue-dropdown-item.group').trigger('click')

    cy.get('.vue-dropdown-item.group').trigger('click')

    cy.get('.vue-dropdown-item.selected').should('have.length', 0)
  })

  it('group should be select if and only if all of values of group option are selected', () => {
    cy.visit('/cypress/integration/group-option/index.html')
    cy.get('.vue-select').click()

    cy.get('.vue-dropdown-item:not(.group)').first().trigger('click')
    cy.get('.vue-dropdown-item:not(.group)').first().should('have.class', 'selected')
    cy.get('.vue-dropdown-item.group').should('not.have.class', 'selected')

    cy.get('.vue-dropdown-item:not(.group)').first().next().trigger('click')
    cy.get('.vue-dropdown-item:not(.group)').first().next().should('have.class', 'selected')
    cy.get('.vue-dropdown-item.group').should('not.have.class', 'selected')

    cy.get('.vue-dropdown-item:not(.group)').first().next().next().trigger('click')
    cy.get('.vue-dropdown-item:not(.group)').first().next().next().should('have.class', 'selected')
    cy.get('.vue-dropdown-item.group').should('have.class', 'selected')
  })
})
