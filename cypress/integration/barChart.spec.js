/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Bar Chart Tests', function() {
    it('Should match image snapshot', function() {
        cy.visit('http://localhost:3000');
        cy.get('.bar-chart').matchImageSnapshot('barChart');
    });
});