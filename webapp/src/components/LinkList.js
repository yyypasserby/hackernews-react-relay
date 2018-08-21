import React, { Component } from 'react';
import Link from './Link'

class LinkList extends Component {
  render() {
    return (
      <div>
        {this.props.links.map((link, index) => (
          <Link key={index} link={link} />
        ))}
      </div>
    );
  }
}

export default LinkList;
