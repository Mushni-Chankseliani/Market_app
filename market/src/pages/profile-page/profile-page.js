import { withAuthProtected } from '../../hoc';

function ProfilePage() {
  return (
    <div>
      <h1>this is Profile Page</h1>
    </div>
  );
}

export default withAuthProtected(ProfilePage);
