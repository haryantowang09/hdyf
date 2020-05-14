import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 0.8em;
  border-bottom: 1px solid pink;
  padding: 0.5em 0;
`;

const BlogQuote = styled.blockquote`
  font-style: Italic;
  color: #666666;
`;

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      );
    }
  }

  renderHeader() {
    return (
      <Nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/post">Post a Comment</Link>
        </div>
        <div>{this.renderButton()}</div>
      </Nav>
    );
  }

  render() {
    return (
      <main className="main-layout">
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
        <BlogQuote>
          No one here around me can help me feel totally save. I guess, there
          never was. - Wang
        </BlogQuote>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
