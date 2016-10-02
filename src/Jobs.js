var $ = require('jquery');
window.jQuery = $;
window.$ = $;
var React = require('react');
// Cards
var Card = require('./Card');

var Jobs = React.createClass({
    getInitialState: function() {

        // this.serverRequest = $.get('https://crossorigin.me/http://api.indeed.com/ads/apisearch?publisher=8023780673544955&format=json&v=2&q=javascript&l=NY', function (result) {
        //     // var movieFound = result[0];
        //     this.setState({
        //         jobsObject: result.results,
        //     });
        // }.bind(this));
    },
    handleChange: function (e) {

        var name = e.target.value;
        this.serverRequest = $.get('https://crossorigin.me/http://api.indeed.com/ads/apisearch?publisher=8023780673544955&format=json&v=2&q=' + name + '&l=NY', function (result) {
            // var movieFound = result[0];
            this.setState({
                jobsObject: result.results,
            });
        }.bind(this));
    },

    componentDidMount: function() {

    },

    componentWillUnmount: function() {

        this.serverRequest.abort();
    },

    render: function() {

        if(this.state.jobsObject){
            var rows = [];
            this.state.jobsObject.forEach(function(job) {
                rows.push(<Card title={job.title}  company={job.company} url={job.url} />);
            });

        }


        var states = ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
            "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH",
            "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT",
            "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN",
            "WI", "MO", "AR", "OK", "KS", "LA", "VA"];

        $.each(states, function (key, value) {
            var state = '<li><a href="#" class="blue-text select-location" data-location="' + value + '">' + value + '</a></li>';
            $('#dropdown-state').append(state);
        });

        var software = ["Node", "React", "PHP", "Python", "Ruby", "Javascript"];

        $.each(software, function (key, value) {
            var software = '<li><a href="#" class="blue-text select-software" data-software="' + value + '">' + value + '</a></li>';
            $('#dropdown-software').append(software);
        });



        return (
        <div className="container">


            <div className="jobs-container container">
                <br/>
                <br/>
                        <div className="row">
                            <div className="col s12">
                                <h3 className="center">
                                    <a id="software-selected" className="dropdown-button" href="#"  >Javascript </a>
                                    jobs in
                                    <a id="location-selected" className="dropdown-button" href="#"  > New York City</a>
                                </h3>

                                <ul id='dropdown-state' className='dropdown-content blue-text'>
                                    <li><a href="#!" className="blue-text">Select State</a></li>
                                    <li className="divider"> </li>
                                </ul>

                                <ul id='dropdown-software' className='dropdown-content'>
                                    <li><a href="#!" className="blue-text">Select Software</a></li>
                                    <li className="divider"> </li>
                                </ul>

                            </div>
                        </div>
                        <div className="row" id="joblist">
                            {rows}
                        </div>
                <br/>
                <br/>
            </div>


        </div>

        );
    }
});

module.exports = Jobs;