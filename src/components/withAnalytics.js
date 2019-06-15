import React, { Component } from "react";

export default function withAnalytics(WrappedComponent, options = {}) {
  const trackPage = page => {
    alert("Page Changed. And Ready for analytic request !");
    console.log(page);
  };

  const HOC = class extends Component {
    componentDidMount() {
      const page = this.props.location.pathname;
      trackPage(page);
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
  return HOC;
}
