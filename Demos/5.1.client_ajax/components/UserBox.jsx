import React from 'react';

import UserList from './UserList.jsx';

const UserBox = React.createClass({

  render: function() {
    return (
      <div className="UserBox">
        <UserList data={this.props.data} />
      </div>
    );
  }
});

export default UserBox;