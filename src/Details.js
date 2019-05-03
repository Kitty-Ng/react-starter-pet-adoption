import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';

// const Details = props => {
//   return (
//     <pre>
//       <code>{JSON.stringify(props, null, 4)}</code>
//     </pre>
//   );
// };

class Details extends React.Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       loading: true
  //     };
  //   }

  state = { loading: true };
  /* 
  If you have a constructor, you have to do the super(props) 
  to make sure that the props are passed up to React so React 
  can keep track of them.
    */
  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${
          animal.contact.address.state
        }`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h1>loading...</h1>;
    }

    const { animal, breed, location, description, name, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;

/* 
useState will not work inside a class function
class function must have a render()

Lifecycle methods:
componentDidMount is similar to useEffects when first rendering the component i.e. an AJAX request

A child can recieve props from parent but cannot change them/ it is immutable. only read it. 
*/
