jQuery(document).ready ($)->
  r       = React
  rd      = r.DOM
  wrapper = $ 'div#wrapper'

  Header = r.createClass
    render: ()->
      return rd.header {id: 'header'},
        rd.h1 {id: 'logo'}, 'hello'

  Counter = r.createClass
    getDefaultProps: ()->
      return c: 3

    propTypes:
      c: r.PropTypes.number.isRequired

    displayName: 'Counter'

    getInitialState: ()->
      return count: 0

    render: ()->
      return rd.div(null,
        rd.p({id: 'resultP'}, "#{this.state.count}"),
        rd.button {id: 'button', ref: 'button', onClick: (e)=>
          @.setState (s)->
            return s.count += 1
        }, 'Click'
      )

  # container
  Container = r.createClass
    # using in debug mode.
    displayName: 'Container'

    getDefaultProps: ()->
      return {
        prop1: 1
        prop2: 2
      }

    getInitialState: ()->
      return count: 0

    componentDidMount: ()->
      console.log @.state
      console.log @.props
      console.log @.refs.container.children

    render: ()->
      return rd.div {id: 'container', ref: 'container'},
        r.createElement Counter, null

  # App
  App = r.createClass
    render: ()->
      rd.div null,
        r.createElement Header, null
        r.createElement Container, null

  # render
  ReactDOM.render r.createElement(App, null), wrapper.get(0)
