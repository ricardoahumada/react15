const { PropTypes } = React;

const HOC = (Component, state, intervalFn) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = state;
  }
  
  componentWillMount() {
    this.intervals = [];
  }
  
  componentWillUnmount() {    
    this.intervals.forEach(clearInterval);
  }
  
  componentDidMount() {
    this.setInterval(this.tick.bind(this), 1000);
  }
  
  setInterval() {
    this.intervals.push(setInterval.apply(null, arguments));
  }
  
  tick() {    
    this.setState(intervalFn);
  }
  
  render() {    
    return <Component {...this.props} {...this.state} />
  }
};

class TickTock extends React.Component {
   constructor(props) {
      super(props);    
   }   

   render() {
    return (
        <p>
          React has been running for {this.props.seconds} seconds.
        </p>
    );
   }
}

TickTock.propTypes = {
  seconds: React.PropTypes.number.isRequired,
}  

const intervalFn = (state) => {
  return {seconds: state.seconds + 1};
};

const Wrapped = HOC(TickTock, { seconds: 0 }, intervalFn);
const Wrapped2 = HOC(TickTock, { seconds: 3 }, intervalFn);
const Wrapped3 = HOC(TickTock, { seconds: 6 }, intervalFn);

ReactDOM.render(
  <div>
    <Wrapped />
    <Wrapped2 />
    <Wrapped3 />
  </div>,
  document.getElementById('root')
);

/*setTimeout(() => {
  ReactDOM.render(
    <div>
      <Wrapped />
      <Wrapped2 />    
    </div>,
    document.getElementById('root')
  );
}, 7000);

*/