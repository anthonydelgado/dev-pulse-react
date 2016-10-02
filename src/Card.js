var React = require('react');

var Card = React.createClass({
    handleChange: function (e) {
        var name = e.target.value;
        this.props.onChange(name);
    },

    render: function () {
        return (
            <div className="col s12 m4">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title truncate">{ this.props.title }</span>
                        <p> at { this.props.company }</p>
                    </div>
                    <div className="card-action">
                        <a className="waves-effect waves-light btn blue darken-3">
                            <i className="material-icons left">add</i> Save</a>
                        <a href={ this.props.url } className="waves-effect waves-light btn blue darken-3" target="_blank">
                            <i className="material-icons left">call_made</i> APPLY
                        </a>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Card;