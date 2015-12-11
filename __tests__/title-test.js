jest.dontMock('../src/app/components/title.jsx');

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const Title = require('../src/app/components/title.jsx');

describe('Title', () => {

  it('Has the correct default title', () => {

   var title = TestUtils.renderIntoDocument(
     <Title />
   );

   var appNode = ReactDOM.findDOMNode(title);
   
   expect(appNode.textContent).toEqual('Dota Scope');

  });

});