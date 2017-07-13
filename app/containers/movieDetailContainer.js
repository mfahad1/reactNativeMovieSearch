import React, {Component} from 'react';
import {connect} from 'react-redux';
import DetailMovie from '../components/movieDetail/detail';
import * as AllActions from '../actions';
import {bindActionCreators} from 'redux';


import {Text, View, TouchableOpacity} from 'react-native';

class MovieDetailContainer extends Component {
		constructor(props) {
				super(props);
				console.log(props);
		}

		render() {
				console.log('props11', this.props.movie);
				return (
						<View style={{
								flex: 1
						}}>
								<DetailMovie movie={this.props.movie}/>
						</View>
				)
		}
}

const mapStateToProps = (state) => {
		return {};
}

const mapDispatchToProps = (dispatch) => {
		return bindActionCreators(AllActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetailContainer)