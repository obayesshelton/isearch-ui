import React, { Component, PropTypes } from 'react';
import Tags from '../../containers/tags';
import SearchSummary from 'search-summary';
import SearchBar from 'search-bar';
import * as mockData from './mockData.js';
import Grid from '../../containers/grid';
import AddMessage from 'add-message';
import Modal from '../modal';

require('./style.css');
class Home extends Component {
  constructor () {
    super();
    this.state = {
      addMessageVisible: false,
      modalVisible: false
    };
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  showModal () {
    this.setState({modalVisible: true});
  }

  closeModal () {
    this.setState({modalVisible: false});
  }

  render () {
    const { searchSummary, ...tileData } = mockData;
    const { addMessageVisible, hideAddMessage } = this.props;
    return (
      <div className='homeContainer'>
        <Modal modalVisible={this.state.modalVisible} close={this.closeModal}/>
        <SearchBar />
        <SearchSummary {...searchSummary} />
        <Tags />
        <Grid tileData={tileData}/>
        {addMessageVisible && <AddMessage hideAddMessage={hideAddMessage} suggestedLocations='Croatia and Greece'/>}
        <div className='filterIcon' onClick={this.showModal}>
          <i className='fa fa-filter fa-2x'/>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  addMessageVisible: PropTypes.bool,
  hideAddMessage: PropTypes.func
};

export default Home;
