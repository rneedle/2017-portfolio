import React, {Component} from 'react'
import nextButton from '../static/rightArrow.svg'
import previousButton from '../static/leftArrow.svg'

class ProjectImageCarousel extends Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0,
      navLeft: 'nav-left',
      navRight: 'nav-right',
    };
  }

  _modulo(x, m) {
    return ((x % m) + m) % m;

  }

  _onNext() {
    this.setState({
      currentImage: this._modulo((this.state.currentImage + 1), this.props.images.length),
    });
  }

  _onPrevious() {
    this.setState({
      currentImage: this._modulo((this.state.currentImage - 1), this.props.images.length),
    });
  }
  _getImage(images) {
      let imageIdx = this.state.currentImage % images.length;
      let image = require(`../static/${images[imageIdx]['image']}`);
      return <img className="project-image" src={image} alt="project-image"/>;
  }

  _getCaption() {
    return <div>{this.props.images[this.state.currentImage]['caption']}</div>;
  }

  render() {
    return (
      <div className="project-image-wrapper">
        {this._getImage(this.props.images)}
        <div className="caption-wrapper">
          <div className="nav">
            <img
              className={this.state.navLeft}
              onMouseDown={() => {this.setState({navLeft: 'nav-left-down'})}}
              onMouseUp={() => {this.setState({navLeft: 'nav-left'})}}
              onClick={this._onPrevious.bind(this)}
              src={previousButton}
              alt="previous"/>
            <img
              className={this.state.navRight}
              onMouseDown={() => {this.setState({navRight: 'nav-right-down'})}}
              onMouseUp={() => {this.setState({navRight: 'nav-right'})}}
              onClick={this._onNext.bind(this)}
              src={nextButton}
              alt="next" />
          </div>
          {this._getCaption()}
        </div>
      </div>
    )

  }
}

export default ProjectImageCarousel;
