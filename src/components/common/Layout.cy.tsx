import React from 'react'
import Layout from './Layout'

describe('<Layout />', () => {
  beforeEach(() => {
    cy.mount(
    <Layout> 
      <div>Test</div>
    </Layout>)
  })
  it('checks', ()=>{
    // Assert NavBar is rendered
    cy.get('div[test-id="navbar"]').should('be.visible');

    // Assert children content is rendered
    cy.contains('Test').should('be.visible');

    // Assert Footer is rendered
    cy.get('div[test-id="footer"]').should('be.visible'); 

 })

  
   
})