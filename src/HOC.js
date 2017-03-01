import React from 'react';

export default function(Component) {
    return class EnhancedComponent extends React.Component {
        render() {
            return (<Component {...this.props} alwaysTrue={true} />);
        }
    }
}