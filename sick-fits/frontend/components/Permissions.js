import { Query } from "react-apollo";
import Error from "./ErrorMessage.js";
import gql from "graphql-tag";
import Table from "./styles/Table.js";
import SickButton from "./styles/SickButton.js";

const possiblePermissions = [
  "ADMIN",
  "USER",
  "ITEMCREATE",
  "ITEMUPDATE",
  "ITEMDELETE",
  "PERMISSIONUPDATE"
];

const ALL_USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
      permissions
    }
  }
`;

const Permissions = props => {
  return (
    <Query query={ALL_USERS_QUERY}>
      {({ data, loading, error }) => (
        <>
          <Error error={error} />
          <div>
            <h2>Manage Permissions</h2>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  {possiblePermissions.map((permission, index) => (
                    <th key={index}>{permission}</th>
                  ))}
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {data.users.map(user => (
                  <User user={user} key={user.id} />
                ))}
              </tbody>
            </Table>
          </div>
        </>
      )}
    </Query>
  );
};

class User extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        {possiblePermissions.map((permission, index) => (
          <td key={index}>
            <label htmlFor={`${user.id}-permission-${permission}`}>
              <input type="checkbox" />
            </label>
          </td>
        ))}
        <td>
          <SickButton>Update</SickButton>
        </td>
      </tr>
    );
  }
}

export default Permissions;
