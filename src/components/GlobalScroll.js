import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import GlobalImpact from './GlobalImpact';
import OceanImpact from './Ocean-Impact';
import TopUserImpact from './Top-User-Impact';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class GlobalScroll extends Component {

  render() {
    return (
      <ScrollView 
        scrollEventThrottle={16}
        horizontal={true}
        showsHorizontalScrollIndicator={false}  
      >
        <View style={styles.statContainerFirst}>
          <GlobalImpact 
            earth={this.props.globalStats.earthPoints}
            ocean={this.props.globalStats.oceanPoints}
            animal={this.props.globalStats.animalPoints}
            humanity={this.props.globalStats.humanityPoints}
            all={this.props.globalStats.points}
            title={'Impact'}
            />
        </View>
        <View style={styles.statContainer}>
          <GlobalImpact 
            earth={this.props.globalStats.earthEntryCount}
            ocean={this.props.globalStats.oceanEntryCount}
            animal={this.props.globalStats.animalEntryCount}
            humanity={this.props.globalStats.humanityEntryCount}
            all={this.props.globalStats.entryCount}
            title={'Entries'}
            />
        </View>
        <View style={styles.statContainer}>
          <OceanImpact
            artic={this.props.globalStats.oceans.artic.points}
            atlantic={this.props.globalStats.oceans.atlantic.points}
            indian={this.props.globalStats.oceans.indian.points}
            pacific={this.props.globalStats.oceans.pacific.points}
            southern={this.props.globalStats.oceans.southern.points}
            points={this.props.globalStats.oceanPoints}
            title={'Impact'}
          />
        </View>
        <View style={styles.statContainer}>
          <OceanImpact
            artic={this.props.globalStats.oceans.artic.entryCount}
            atlantic={this.props.globalStats.oceans.atlantic.entryCount}
            indian={this.props.globalStats.oceans.indian.entryCount}
            pacific={this.props.globalStats.oceans.pacific.entryCount}
            southern={this.props.globalStats.oceans.southern.entryCount}
            points={this.props.globalStats.oceanEntryCount}
            title={'Entries'}
          />
        </View>
        <View style={styles.statContainerLast}>
          <TopUserImpact
            // Top Users Total
            fiveUser={this.props.globalStats.topUsers.topUsers[0].username}
            five={this.props.globalStats.topUsers.topUsers[0].totalPoints}
            fourUser={this.props.globalStats.topUsers.topUsers[1].username}
            four={this.props.globalStats.topUsers.topUsers[1].totalPoints}
            threeUser={this.props.globalStats.topUsers.topUsers[2].username}
            three={this.props.globalStats.topUsers.topUsers[2].totalPoints}
            twoUser={this.props.globalStats.topUsers.topUsers[3].username}
            two={this.props.globalStats.topUsers.topUsers[3].totalPoints}
            oneUser={this.props.globalStats.topUsers.topUsers[4].username}
            one={this.props.globalStats.topUsers.topUsers[4].totalPoints}
            title={'Top Users'}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  statContainerFirst: {
    marginLeft: wp('9%'),
    color: '#161511'
  },
  statContainer: {
    marginLeft: 10
  },
  statContainerLast: {
    marginLeft: 10,
    marginRight: wp('9%')
  },
});

export default GlobalScroll;