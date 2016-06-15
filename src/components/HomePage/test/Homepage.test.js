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
})
