jQuery(document).ready(function($) {
  var App, Container, Counter, Header, r, rd, wrapper;
  r = React;
  rd = r.DOM;
  wrapper = $('div#wrapper');
  Header = r.createClass({
    render: function() {
      return rd.header({
        id: 'header'
      }, rd.h1({
        id: 'logo'
      }, 'hello'));
    }
  });
  Counter = r.createClass({
    getDefaultProps: function() {
      return {
        c: 3
      };
    },
    propTypes: {
      c: r.PropTypes.number.isRequired
    },
    displayName: 'Counter',
    getInitialState: function() {
      return {
        count: 0
      };
    },
    render: function() {
      return rd.div(null, rd.p({
        id: 'resultP'
      }, "" + this.state.count), rd.button({
        id: 'button',
        ref: 'button',
        onClick: (function(_this) {
          return function(e) {
            return _this.setState(function(s) {
              return s.count += 1;
            });
          };
        })(this)
      }, 'Click'));
    }
  });
  Container = r.createClass({
    displayName: 'Container',
    getDefaultProps: function() {
      return {
        prop1: 1,
        prop2: 2
      };
    },
    getInitialState: function() {
      return {
        count: 0
      };
    },
    componentDidMount: function() {
      console.log(this.state);
      console.log(this.props);
      return console.log(this.refs.container.children);
    },
    render: function() {
      return rd.div({
        id: 'container',
        ref: 'container'
      }, r.createElement(Counter, null));
    }
  });
  App = r.createClass({
    render: function() {
      return rd.div(null, r.createElement(Header, null), r.createElement(Container, null));
    }
  });
  return ReactDOM.render(r.createElement(App, null), wrapper.get(0));
});
