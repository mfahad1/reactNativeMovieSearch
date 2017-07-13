import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';
import styles from './searchBar.style';

class SearchBar extends Component{

	constructor(props) {
		super(props);
		this.state = { 
			searchInputText: null
		};
	}

	search = (text)=>{
		this.props.searchKeywordAction(text);
	}

	render() {
		return(
			<View style={styles.containers}>
				<TextInput
	        style={styles.input}
	        placeholder={'Search...'}
	        placeholderTextColor={'white'}
	        onChangeText={(text) => this.setState({text})}
       	  value={this.state.text}
					onSubmitEditing={this.search.bind(this,this.state.text)}
	      />
				<Text style={styles.text} onPress={this.search.bind(this,this.state.text)}>Search</Text>
			</View>
		)
	}
}

export default SearchBar;