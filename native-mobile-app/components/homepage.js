import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Homepage = props => {
	return(
			<View style ={styles.homepage}>
				<Image source={{uri: 'https://www.mobipaper.site/download/bmw-m2-competition-heritage-edition'}} style={styles.homepageImg} />
			</View>
		)
};

const styles = StyleSheet.create({
  homepage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  homepageImg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 800,
  },
});


export default Homepage;