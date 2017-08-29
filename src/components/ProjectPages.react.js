import React, {Component} from 'react'
import content from '../content/projects.js'
import ProjectImageCarousel from './ProjectImageCarousel.react.js'

class ProjectPages extends Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0,
    }
  }

  componentDidMount() {
    setInterval(
      () => {
        let currentImage = this.state.currentImage;
        currentImage = (currentImage + 1) % 100;
        this.setState({
          currentImage: currentImage,
        });
      },
      3000,
    );
  }


  _getDescriptions() {
    return content.map(e => {
      return (
        <div className='project' key={e.name}>
          <div className='project-description-wrapper'>
          <div className='line'/>
            <div className='project-description'>
              <div className='project-summary'>
                <div>
                  <ol>
                    <li>{e.name}</li>
                    <li>{e.employer}</li>
                    <li>{e.type}</li>
                    <li>{e.year}</li>
                  </ol>
                </div>
              </div>
              <div className='project-text'>
                {e.text.map((text) => <div>{text}</div>)}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  _getImages() {
    return content.map(e => {
      return <ProjectImageCarousel images={e.images} />;
    });
  }

  render() {
    let content = this._getDescriptions();
    let images = this._getImages();
    let projects = [];
    content.forEach((c, idx) => {
      projects.push(content[idx]);
      projects.push(images[idx]);
    });
    return (
      <div className='project-list'>
        {projects}
      </div>
    );
  }
}

export default ProjectPages;
