import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableHighlight} from 'react-native';
import * as AllActions from '../actions';
import HomeContainer from './homeContainer';
import MovieDetailContainer from './movieDetailContainer';
import SiginContainer from './siginContainer';
import {Scene, Router} from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';
import {bindActionCreators} from 'redux';

class AppContainer extends Component {

		render() {

				return (

						<Router>
								<Scene key="root" hideNavBar={true}>
										<Scene hideNavBar={true} key="home"
												initial={true}	component={HomeContainer}/>
										<Scene key="sigin" component={SiginContainer} />
										<Scene hideNavBar={true} key="movieDetail" component={MovieDetailContainer}/>
								</Scene>
						</Router>

				)
		}
}

const mapDispatchToProps = (dispatch) => {
		return bindActionCreators(AllActions, dispatch);
}

export default connect(()=>{return {}},mapDispatchToProps)(AppContainer)