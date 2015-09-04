var React = require('react');

var Api = require('../../mixins/api.jsx');
var Session = require('../../mixins/session.jsx');

var News = require('../../components/news/news.jsx');

require('./splash.scss');

var View = React.createClass({
    mixins: [
        Api,
        Session
    ],
    getInitialState: function () {
        return {
            activity: [],
            news: [],
            featured: []
        };
    },
    componentDidMount: function () {
        // @todo API request for News
        // @todo API request for Activity
        // @todo API request for Featured
    },
    render: function () {
        return (
            <div className="inner">
                <div className="intro"></div>
                <div className="activity"></div>
                <News />
                <div className="featured"></div>
            </div>
        );
    }
});

React.render(<View />, document.getElementById('view'));
