import { useSelector } from 'react-redux';
import { withAuthProtected } from '../../hoc';
import { currentUserSelector } from '../../redux/selectors';

function ProfilePage() {
  const user = useSelector(currentUserSelector);
  return (
    <div className="row flex-column align-items-center flex-md-row justify-content-md-between">
      <div className="col-10 col-xl-4 col-lg-6 col-md-6 mb-5">
        <img src={user.avatar} alt={user.first_name} className="w-100" />
      </div>
      <div className="col-10 col-xl-6 col-lg-6 col-md-6 mx-auto">
        <div className="mb-3 border-bottom pb-3">
          <h3 className="mb-3">First Name:</h3>
          <h4 className="text-muted">{user.first_name}</h4>
        </div>
        <div className="mb-3 border-bottom pb-3">
          <h3 className="mb-3">Last Name:</h3>
          <h4 className="text-muted">{user.last_name}</h4>
        </div>
        <div className="mb-3 border-bottom pb-3">
          <h3 className="mb-3">Email:</h3>
          <h4 className="text-muted">{user.email}</h4>
        </div>
      </div>
    </div>
  );
}

export default withAuthProtected(ProfilePage);
