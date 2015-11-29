 // __tests__/CheckboxWithLabel-test.js
 jest.dontMock('../client/app');

 var React = require('react');
 var ReactDOM = require('react-dom');
 var TestUtils = require('react-addons-test-utils');
 var App = require('../client/app');

 describe('App', () => {

   it('Has the correct default heroMouseOver state', () => {

    // Render app into doument
    var app = TestUtils.renderIntoDocument(
      <App />
    );

    var appNode = ReactDOM.findDOMNode(app);

    // Verify that it has 'Select a Hero' as the default heroMouseOver state
    expect(appNode.heroMouseOver).toEqual('Select a Hero');

   });

 });
   

