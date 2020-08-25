import React from "react";
import propTypes from "prop-types";
const { string, object } = propTypes;

const blank = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

export default class SpinnerImg extends React.Component {
  static propTypes = {
    src: string.isRequired,
    style: object,
  };

  static defaultProps = { style: {} };

  state = {
    loaded: false,
  };

  componentDidMount() {
    this.img = new Image();
    this.img.onload = () => {
      this.setState({ loaded: true });
    };
    this.img.src = this.props.src;
  }

  componentWillUnmount() {
    this.img.onload = () => undefined;
  }

  render() {
    const { loaded } = this.state;
    const { src, style, ...rest } = this.props;

    return (
      <div className="p-r">
        <img
          {...rest}
          src={this.state.loaded ? src : blank}
          style={{
            ...style,
            transition: `opacity .3s, ${style.transition}`,
            opacity: loaded ? 1 : 0,
          }}
        />
        {loaded || (
          <div
            className="p-a"
            style={{
              width: "40px",
              height: "40px",
              top: "50%",
              left: "50%",
              margin: "-20px 0 0 -20px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              stroke="#fff"
            >
              <g fill="none" fillRule="evenodd" strokeWidth="2">
                <circle cx="22" cy="22" r="14.2114">
                  <animate
                    attributeName="r"
                    begin="0s"
                    dur="1.8s"
                    values="1; 20"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.165, 0.84, 0.44, 1"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    begin="0s"
                    dur="1.8s"
                    values="1; 0"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.3, 0.61, 0.355, 1"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="22" cy="22" r="19.7145">
                  <animate
                    attributeName="r"
                    begin="-0.9s"
                    dur="1.8s"
                    values="1; 20"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.165, 0.84, 0.44, 1"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    begin="-0.9s"
                    dur="1.8s"
                    values="1; 0"
                    calcMode="spline"
                    keyTimes="0; 1"
                    keySplines="0.3, 0.61, 0.355, 1"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </svg>
          </div>
        )}
      </div>
    );
  }
}
