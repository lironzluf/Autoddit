import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Post extends React.Component {

    render() {
        return (

            <div>
                {this.props.data.title}
                Submitted on {this.props.data.createdAt} by {this.props.data.username}
                {this.props.data.comments} comments
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);
