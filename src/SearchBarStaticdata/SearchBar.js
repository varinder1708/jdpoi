import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import styles from './SearchBar.css';
const languages = [
  {
    name: "AC repair",
    year: 1972
  },
  {
    name: "AC service",
    year: 2000
  },
  {
    name: "Ac dealer",
    year: 1983
  },
  {
    name: "doctor",
    year: 2007
  },
  {
    name: "doctor1",
    year: 2012
  },
  {
    name: "doctorcat1",
    year: 2009
  },
  {
    name: "doctorcat2",
    year: 1990
  },
  {
    name: "doctorcat3",
    year: 1995
  },
  {
    name: "doctorcat4",
    year: 1995
  },
  {
    name: "doctorcat5",
    year: 1987
  },
  {
    name: "doctorcat53",
    year: 1995
  },
  {
    name: "Pydoctorcat1thon",
    year: 1991
  },
  {
    name: "doctorcat123",
    year: 1995
  },
  {
    name: "doctorcat123",
    year: 2003
  }
];
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : languages.filter(
        lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        value: "",
        suggestions: []
      };
    }
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
    // fetch(`https://swapi.co/api/people/?search=${value}`)
    // .then(response => response.json())
    // .then(data => this.setState({ suggestions: data.results }))
  };
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  // componentWillMount()
  // {
  //   axios.get('../public/cities.js')
  //   .then( response => { alert(response)
  //     this.setState({
  //     userList: response.data
  //   });
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  // }
  render() {
    
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search for anything",
      value,
      onChange: this.onChange
    };
    return (
    
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    
    );
  }
}

export default SearchBar;
