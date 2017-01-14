import React from 'react';
import ajax from 'superagent';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state  = {
      name: []
    };
  }

  componentWillMount() {
    ajax.get(`https://api.github.com/users/${this.props.params.users}/events`)
    .end((error, response) => {
      if (!error && response) {
        this.setState({ name: response.body });
      } else {
        console.log(`Error fetching ${name}`, error);
      }
    });
  }

render() {
    return <ul>
        {this.state.events.map((event, index) => {
            const eventType = event.type;
            const repoName = event.repo.name;
            const creationDate = event.created_at;

            return (<li key={index}>
                <strong>{repoName}</strong>: {eventType}
                at {creationDate}.
            </li>);
        })}
    </ul>;
}

//end class
}

export default User