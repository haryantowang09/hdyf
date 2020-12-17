import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

const ParentNav = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  border-top: 1px solid pink;
`;

const HorizontalNav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 0.5em 0;
  border-top: 1px solid pink;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1em;
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

  renderNav() {
    return (
      <ParentNav>
        <Nav>
          <BlogQuote>
            Everyone failed but it is when you stop. - Wang
          </BlogQuote>
        </Nav>
        <HorizontalNav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/post">Post a Comment</Link>
          </div>
          <div>{this.renderButton()}</div>
        </HorizontalNav>
      </ParentNav>
    );
  }

  render() {
    return (
      <Fragment>
        <main className="grid-layout">
          <Route path="/post" component={CommentBox} />
          <Route path="/" exact component={CommentList} />
        </main>
        {this.renderNav()}
      </Fragment>
      
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
