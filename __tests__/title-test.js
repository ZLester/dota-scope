 jest.dontMock('../client/title.jsx');

 var React = require('react');
 var ReactDOM = require('react-dom');
 var TestUtils = require('react-addons-test-utils');
 var Title = require('../client/title.jsx');

 describe('Title', () => {

   it('Has the correct default title', () => {

    var title = TestUtils.renderIntoDocument(
      <Title />
    );

    var appNode = ReactDOM.findDOMNode(title);
    
    expect(appNode.textContent).toEqual('Dota Scope');

   });

 });
   

