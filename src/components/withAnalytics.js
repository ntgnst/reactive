import React, { Component } from "react";
import {connect} from 'react-redux';
import {types, sendAnalytics} from '../redux/actions/analytic';
export default function withAnalytics(WrappedComponent, options = {}) {
  const trackPage = page => {
    alert("Page Changed. And Ready for analytic request !");
    console.log(page);
  };

  const HOC = class extends Component {
    componentDidMount() {
      const page = this.props.location.pathname;
      trackPage(page);
      this.props.dispatch(sendAnalytics());
    }

    componentWillReceiveProps(nextProps) {
      const currentPage = this.props.location.pathname;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
    
  };
  const mapStateToProps = (state, props) => ({ analytic: state.analytic });
  
  return connect(mapStateToProps)(HOC);
}
