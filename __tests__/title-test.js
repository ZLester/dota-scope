 // __tests__/CheckboxWithLabel-test.js
 jest.dontMock('../client/app.jsx');

 var React = require('react');
 var ReactDOM = require('react-dom');
 var TestUtils = require('react-addons-test-utils');
 var Title = require('../client/title.jsx');

 describe('Title', () => {

   it('Has the correct default title', () => {

    // Render app into doument
    var app = TestUtils.renderIntoDocument(
      <Title />
    );

    var appNode = ReactDOM.findDOMNode(app);

    // Verify that it has 'Select a Hero' as the default heroMouseOver state
    expect(appNode.textContent).toEqual('Dota Scope');

   });

 });
   

