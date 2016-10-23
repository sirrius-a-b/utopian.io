import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getFeedContent,
  getMoreFeedContent,
  getUserFeedContent,
  getMoreUserFeedContent,
} from './../feed/feedActions';
import { getUserComments, getMoreUserComments } from './userActions';
import appActions from '../actions';
import Header from '../app/Header';
import MenuUser from '../app/Menu/MenuUser';

@connect(
  state => ({
    feed: state.feed,
    posts: state.posts,
    comments: state.comments,
  }),
  dispatch => bindActionCreators({
    getFeedContent,
    getMoreFeedContent,
    getUserFeedContent,
    getMoreUserFeedContent,
    getUserComments,
    getMoreUserComments,
    setMenu: appActions.setMenu,
  }, dispatch)
)
export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-panel">
        <Header />
        <MenuUser username={this.props.params.name} />
        <div>
          { React.cloneElement(
            this.props.children,
            {
              ...this.props,
              limit: 10,
            }
          ) }
        </div>
      </div>
    );
  }
}
