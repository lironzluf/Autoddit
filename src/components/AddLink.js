import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const AddLink = props => (
    <div>
        <h1>Add Link</h1>
        <button onClick={() => props.changePage()}>Go back to home pagevia redux</button>
    </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/')
}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(AddLink)
