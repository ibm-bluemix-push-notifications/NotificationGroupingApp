/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {FlatList,View,
  Linking,
  TouchableNativeFeedback,
  Platform,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet, Text, SafeAreaView 
} from 'react-native';

import {getNews} from './src/api';
import Lists from './src/Lists';

import LargeHeading from './src/LargeHeading';
import HorizontalScrollFeed from './src/HorizontalScrollView';
import GroupCard from './src/GroupCard';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [], refreshing: true,
      trendingGroups: [
        
        {
          id: 3456,
          name: 'Domestic',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4_UB-omhiJ8pY4JqLzyC0vA2zTzVOX3aRYUUigsS1R5G_TsC3',
          icon: '',
        },
        {
          id: 2345,
          name: 'World',
          image: 'https://upload.wikimedia.org/wikipedia/en/4/40/Abc_world_news_now_logo_2016.jpg',
          icon: '',
        },
        {
          id: 1234,
          name: 'Sports',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmqm9_NkYJ2srR4f-wawuTBqvo0w1sdeo4EFFkdYB2oN1CK3fY',
          icon: '',
        },
        
        {
          id: 3458,
          name: 'Tech',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRF1Mbtqt2uxa2uiRa6XB4_BbwkX_6tZpicC67jmwQAC4ExjMjZ',
          icon: '',
        },
        {
          id: 3459,
          name: 'Entertainment',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTh-x-2U1h08re-VlinYaWvFnXyvy7RftsUIsSsPH2PnIF2sfvu',
          icon: '',
        },
      ],
    };
    this.fetchNews = this.fetchNews.bind(this);
  }
  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then(articles => this.setState({articles, refreshing: false}))
      .catch(() => this.setState({refreshing: false}));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true,
      },
      () => this.fetchNews()
    );
  }

  render() {

    let TouchablePlatformSpecific =
      Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

    
    return (

      <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>

<LargeHeading>Trending Groups</LargeHeading>
        <HorizontalScrollFeed
          data={this.state.trendingGroups}
          renderItem={({ item }) => (
            <TouchablePlatformSpecific onPress={() => Alert.alert(item.name)} >
              <View style={{ marginRight: 6 }} >
                <GroupCard item={item}/>
              </View>
            </TouchablePlatformSpecific>
          )}
          keyExtractor={(item) => `item-${item.id}`}
        />
      <FlatList
        data={this.state.articles}
        renderItem={({item}) => <Lists article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
      </ScrollView>
      </SafeAreaView>
    );
  }

  
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});