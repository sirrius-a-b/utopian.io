import * as Actions from '../actions/constants';

const loading = (state = false, action) => {
  switch (action.type) {
    case Actions.CREATE_CONTRIBUTION_REQUEST: {
      return Actions.CREATE_CONTRIBUTION_REQUEST;
    }
    case Actions.GET_CONTRIBUTIONS_REQUEST: {
      return Actions.GET_CONTRIBUTIONS_REQUEST;
    }
    case Actions.GET_CONTRIBUTION_REQUEST: {
      return Actions.GET_CONTRIBUTION_REQUEST;
    }
    case Actions.GET_SPONSORS_REQUEST: {
      return Actions.GET_SPONSORS_REQUEST;
    }
    case Actions.GET_PROJECTS_REQUEST: {
      return Actions.GET_PROJECTS_REQUEST;
    }
    case Actions.GET_PROJECTS_SUCCESS:
    case Actions.CREATE_SPONSOR_SUCCESS:
    case Actions.CREATE_CONTRIBUTION_SUCCESS:
    case Actions.GET_CONTRIBUTION_SUCCESS:
    case Actions.GET_CONTRIBUTIONS_SUCCESS: {
      return false;
    }
    default: {
      return state;
    }
  }
};

export default loading;
