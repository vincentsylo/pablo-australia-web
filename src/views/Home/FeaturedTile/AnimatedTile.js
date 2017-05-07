import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './FeaturedTile.css';
import set from '../images/img_anime01.png';
import tart from '../images/img_anime02.png';
import drink from '../images/img_anime03.png';

class AnimatedTile extends Component {
  state = {
    showAnimation: false,
    showAlternateAnimation: false,
  };

  componentDidMount() {
    const { delay } = this.props;

    this.delay = setTimeout(() => this.startAnimation('showAnimation'), delay);
    this.delayAlternate = setTimeout(() => this.startAnimation('showAlternateAnimation'), delay * 2);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.delay);
    clearTimeout(this.delayAlternate);
  }

  startAnimation = (state) => {
    const { delay } = this.props;
    this.setState({ [state]: true }, () => {
      this.interval = setInterval(() => this.animate(state), delay);
    });
  };

  animate = (state) => {
    if (this.component) {
      this.setState({ [state]: !this.state[state] });
    }
  };

  renderTarts() {
    const { showAnimation, showAlternateAnimation } = this.state;
    const animationCls = cx(styles.animated, styles.tart, {
      [styles.swing]: showAnimation,
    });
    const alternateAnimationCls = cx(styles.animated, styles.tart, {
      [styles.swing]: showAlternateAnimation,
    });

    return (
      <div ref={(ref) => { this.component = ref; }} className={cx(styles.animatedTile, styles.tarts, styles.small)}>
        <img src={tart} alt="" className={animationCls} />
        <img src={tart} alt="" className={alternateAnimationCls} />
        <img src={tart} alt="" className={alternateAnimationCls} />
        <img src={tart} alt="" className={animationCls} />
      </div>
    );
  }

  render() {
    const { showAnimation } = this.state;
    const { type } = this.props;

    let img;
    switch (type) {
      case 'set': img = set; break;
      case 'tarts': img = tart; break;
      case 'drink': img = drink; break;
      default: img = null;
    }

    return type !== 'tarts' ? (
      <div className={cx(styles.animatedTile, styles.small)}>
        {
          img ? (
            <img
              src={img}
              alt=""
              className={cx(styles.animated, {
                [styles.tada]: showAnimation,
              })}
            />
          ) : null
        }
      </div>
    ) : this.renderTarts();
  }
}

AnimatedTile.propTypes = {
  type: PropTypes.oneOf(['set', 'tarts', 'drink']).isRequired,
  delay: PropTypes.number,
};

AnimatedTile.defaultProps = {
  delay: 2000,
};

export default AnimatedTile;
