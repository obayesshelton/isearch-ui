import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardMedia from 'material-ui/lib/card/card-media';
import CardText from 'material-ui/lib/card/card-text';
import CardTitle from 'material-ui/lib/card/card-title';

const categories = ['abstract', 'animals', 'business', 'cats', 'city', 'food', 'nightlife',
  'fashion', 'people', 'nature', 'sports', 'technics', 'transport']

export default React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  getInitialState () {
    const images = [];

    for (var i = 0; i < 100; i++) {
      const cat = categories[Math.floor((Math.random() * 11) + 1)];
      images.push('http://lorempixel.com/600/337/' + cat + '/' + Math.floor((Math.random() * 10) + 1));
    }

    return {
      images: images
    }
  },

  renderRandomCards (n) {

    const components = [];
    for (var i = 0; i < n; i++) {
      const img = this.state.images[Math.floor((Math.random() * 100) + 1)];
      console.log(img);
      components.push(
        <div key={i}>
          <Card>
            <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
              <img src={img} />
            </CardMedia>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
          <br />
        </div>

      )
    }
    return (components);
  },

  render: function () {
    return (
      <div className='greeting'>
        {this.renderRandomCards(10)}
      </div>
    );
  }
});
