import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions as authActions } from 'reducers/auth'

import Login from './Login'

const mapStateToProps = ({ auth }) => ({ auth })

const mapDispatchToProps = dispatch => bindActionCreators({ ...authActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)