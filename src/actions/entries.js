export const ENTRIES = 'ENTRIES';
export const entries = entry => ({
  type: ENTRIES,
  entry
});
export const LEAVE_ENTRY_SCREEN = 'LEAVE_ENTRY_SCREEN';
export const leaveEntryScreen = () => ({
  type: LEAVE_ENTRY_SCREEN
});
//container
////logo        1
////header      1
////title       1
////country     1
////stateRegion 1
////entryLabel  1 
////entryInput  2
////button      2
{/* <View style={styles.logo}>
          <Image source={require('../src/assets/images/function-earth-logo.png')} 
            style={{width: 100, height: 100}} />
        </View>
        <View style={styles.header}>   
          <Text>Function Earth</Text>
        </View>
        <View styles={styles.title}>
          <Text>New {this.props.entryType} Entry</Text>
        </View>
        <View styles={styles.country}>
          <Text>Country</Text>
          <TextInput
            onChangeText={country => this.setState({country})}
            value={this.state.country}
          />
        </View>
        <View styles={styles.stateRegion}>
          <Text>State/Region</Text>
          <TextInput
            onChangeText={stateRegion => this.setState({stateRegion})}
            value={this.state.stateRegion}
          />
        </View>
        <View styles={styles.entryLabel}>
          <Text>Today I helped preserve our {this.props.entryType}. I...</Text>
        </View>
        <View styles={styles.entryInput}>
          <TextInput
            onChangeText={entry => this.setState({entry})}
            value={this.state.entry}
          />
        </View>
        <View styles={styles.button}>
          <Button
            title='Log My Action'
            onPress={() => this.logNewEntry()}
          />
        </View> */}