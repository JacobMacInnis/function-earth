import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { FileSystem, MediaLibrary, Permissions } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import Photo from './Photo';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from 'react-native-responsive-fontsize';

const PHOTOS_DIR = FileSystem.documentDirectory + 'photos';

class GalleryScreen extends React.Component {
  state = {
    faces: {},
    images: {},
    photos: [],
    selected: [],
    anySelected: false
  };

  componentDidMount = async () => {
    const photos = await FileSystem.readDirectoryAsync(PHOTOS_DIR);
    this.setState({ photos });
  };

  toggleSelection = (uri, isSelected) => {
    let selected = this.state.selected;
    if (isSelected) {
      selected.push(uri);
    } else {
      selected = selected.filter(item => item !== uri);
    }
    this.setState({ selected });
  };

  saveToGallery = async () => {
    const photos = this.state.selected;

    if (photos.length > 0) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== 'granted') {
        throw new Error('Denied CAMERA_ROLL permissions!');
      }

      const promises = photos.map(photoUri => {
        return MediaLibrary.createAssetAsync(photoUri);
      });

      await Promise.all(promises);
      alert('Successfully saved photos to user\'s gallery!');
    } else {
      alert('No photos to save!');
    }
  };


  renderPhoto = fileName => 
    <Photo
      key={fileName}
      uri={`${PHOTOS_DIR}/${fileName}`}
      onSelectionToggle={this.toggleSelection}
    />;

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.navbar}>
            <Text style={styles.text}>Choose A Photo</Text>  
            <View style={styles.bottomNavbar}>
              <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                <MaterialIcons name="arrow-back" size={25} color="white" />
              </TouchableOpacity>
              {this.state.selected.length > 0 && <TouchableOpacity style={styles.button}><Text style={styles.text}>Delete</Text></TouchableOpacity>}
              <TouchableOpacity style={styles.button} onPress={this.saveToGallery}>
                <Text style={styles.text}>Use Photo</Text>
              </TouchableOpacity>
            </View>
          </View>
        <ScrollView contentComponentStyle={{ flex: 1 }}>
          <View style={styles.pictures}>
            {this.state.photos.map(this.renderPhoto)}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 20,
    backgroundColor: 'white',
  },
  navbar: {
    height: hp('15%'),
    backgroundColor: 'blue',
  },
  bottomNavbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  pictures: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 10,
    height: hp('10%')
  },
  text: {
    color: 'white',
    fontSize: RF(3)
  }
});

const mapStateToProps = state => ({
  
});

export default connect(mapStateToProps)(GalleryScreen);