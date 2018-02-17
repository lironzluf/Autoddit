import React from 'react';
import { NavLink } from 'react-router-dom'
import Routes, { ADD_LINK , HOME} from './components/Routes';
import { setPosts } from './redux/actions/index';
import { postService } from './services/post.service';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import logo from './static/images/autodesk-logo.png';
import './App.css';

class App extends React.Component {

    componentDidMount() {
        const posts = postService.getPosts();
        this.props.setPosts(posts);
    }

    render() {
        return (
            <div>
                <header>
                    <div className="logo">
                        <img src={logo} alt="Autoddit"/>
                        <span>AUTODDIT</span>
                    </div>
                    <nav>
                        <NavLink exact to={HOME} activeClassName="active">Home</NavLink>
                        <NavLink exact activeClassName="active" to={ADD_LINK}>Add Link</NavLink>
                    </nav>
                </header>

                <main>
                    <Routes/>
                </main>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    setPosts: (posts) => setPosts(posts)
}, dispatch);


export default connect(
    null,
    mapDispatchToProps,
    null, {pure:false})(App);
