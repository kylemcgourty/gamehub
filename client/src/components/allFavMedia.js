import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';

export default class AllFavMedia extends Component {
  constructor(props) {
    super(props);

    this.state = {urls: []};
  }

  componentWillReceiveProps(props) {
    axios.post('/get_all_favmedia', {email: props.profile.email})
      .then((response) => {
        console.log('this is ALL MEDIA', response.data);
        let allFavMedia = response.data.map((item) => {
          return item.url;
        });
        this.setState({urls: allFavMedia})
      });
  }

  renderAllFavMedia(url) {
    url = url.replace("watch?v=", "v/");
    return (
      <iframe key={url}
        src={url}
        width="560" height="300"
        frameBorder="0" allowFullScreen></iframe>
    );
  }

  render() {
    if (this.state.urls.length > 0) {
      return (
        <div className="allFavMediaBox">
          {this.state.urls.map(this.renderAllFavMedia)}
        </div>
      );
    } else {
      return (
        <div>
          NO MEDIA
          
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  console.log("SATETEATTT", state);
  return {
    profile: state.profile,
    authData: state.authData
  };
}

export default connect(mapStateToProps)(AllFavMedia);