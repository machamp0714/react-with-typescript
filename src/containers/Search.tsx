import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { User } from '../services/github/models';
import Search from '../components/Search';
import { GithubState } from '../reducer';
import { getMembers } from '../actions/github';

interface StateProps {
  users: User[]
}

interface DispatchProps {
  getMembersStart: (companyName: string) => void
}

const mapStateToProps = (state: GithubState): StateProps => ({
  users: state.users
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  getMembersStart: (companyName: string) => dispatch(getMembers.start({ companyName }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
