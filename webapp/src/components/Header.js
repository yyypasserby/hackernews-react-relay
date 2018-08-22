import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants';

class Header extends Component {
  render() {
    const userId = localStorage.getItem(GC_USER_ID);
    return (
      <div>
        <div>Hacker News</div>
        <Link to='/'>new</Link>
        { userId &&
          <span>
            |<Link to='/create'>submit</Link>
          </span>
        }
        { userId ?
          <span>|
          <button
            onClick={() => {
              localStorage.removeItem(GC_USER_ID);
              localStorage.removeItem(GC_AUTH_TOKEN);
              this.props.history.push('/');
            }}>logout</button>
          </span>
          :
          <span>
            |<Link to='/login'>login</Link>
          </span>
        }
      </div>
    );
  }
}

export default withRouter(Header);
