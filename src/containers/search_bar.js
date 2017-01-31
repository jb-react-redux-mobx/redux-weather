import React,{ Component } from 'react';

class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        this.setState({ term: e.target.value });
    }

    onFormSubmit(e) {
        e.preventDefault();

        // go fetch weather data from open weather api from here....
        

    }
    
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get your weather!!"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search!</button>
                </span>
            </form>
        );
    }
}


export default SearchBar;