import React from 'react';
import renderer from 'react-test-renderer';

import TestPageOne from './testpageone';

describe('<TestPageOne />', ()=>{
  it('should render a p element with text in it', ()=>{
    const component = renderer.create(
      <TestPageOne />
    );

    console.log('component.toJSON():', component.toJSON());
    console.log('component.toTree():', component.toTree());
  });
});