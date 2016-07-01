import {  renderComponent, expect } from '../../../../test/test_helper'
import HomePage from '../HomePage'

describe('HomePage', () => {
  let component

  beforeEach(() => {
    component = renderComponent(HomePage)
  })

  it('should be have exist className \'home-page-container\'', () => {
    expect(component).to.have.class('home-page-container')
  })

  it('should be contains \'Home Page\' text', () => {
    // expect(component).to.contain.text('Home Page')
  })

  it('should return Hello Me', () => {
    // expect(component.renderText()).to.equal('Hello Me')
  })
})
