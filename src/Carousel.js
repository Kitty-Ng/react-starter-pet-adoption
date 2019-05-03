import React from 'react';

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    let photos = ['http://placecorgi.com/600/600'];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index
      // dataset is a DOM api
      // plus sign will turn it into a number
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? 'active' : ''}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
