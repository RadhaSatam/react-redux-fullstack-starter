import React from 'react';
import { Link } from 'react-router';

export default class AppView extends React.Component {
    render() {
        return (
            <div>
                <Link to="course">Course</Link>
                {this.props.children}
            </div>
        );
    }
}
