import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { FileSystem, MediaLibrary, Permissions } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';
import Photo from './Photo';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from 'react-native-responsive-fontsize';
import { newEntryImage } from '../src/actions/entries';

const PHOTOS_DIR = FileSystem.documentDirectory + 'photos';

class GalleryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faces: {},
      images: {},
      photos: [],
      selected: [],
      indSelected: '',
      uri: null
    }
    this.useImage = this.useImage.bind(this);
  };

  componentDidMount = async () => {
    const photos = await FileSystem.readDirectoryAsync(PHOTOS_DIR);
    this.setState({ photos });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.image !== this.props.image) {
      this.props.navigation.navigate('EntryScreen');
    }
  }

  toggleSelection = (uri, isSelected, ind) => {
    if (this.state.indSelected === ind) {
      this.setState({ indSelected: '', uri: null })
    } else {
      let indSelected = ind
      this.setState({ indSelected, uri });
    }
  };

  // saveToGallery = async () => {
  //   const photos = this.state.selected;

  //   if (photos.length > 0) {
  //     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

  //     if (status !== 'granted') {
  //       throw new Error('Denied CAMERA_ROLL permissions!');
  //     }
  //     const promises = photos.map(photoUri => {
  //       return MediaLibrary.createAssetAsync(photoUri);
  //     });

  //     await Promise.all(promises);
  //     alert('Successfully saved photos to user\'s gallery!');
  //   } else {
  //     alert('No photos to save!');
  //   }
  // };
  useImage() {
    this.props.dispatch(newEntryImage(this.state.uri));
  }
  // async addImage() {
  //   try{
  //     await this.props.newEntryImage(this.state.uri);
  //     return this.props.navigation.navigate('EntryScreen');
  //   }
  //   catch(err) {
  //     console.log(err);
  //   }
  // }

  deleteImage = async () => {
    console.log('I want to delete this image');
  }


  renderPhoto = fileName => 
    <Photo
      key={fileName}
      ind={fileName}
      indSelected={this.state.indSelected}
      uri={`${PHOTOS_DIR}/${fileName}`}
      onSelectionToggle={this.toggleSelection}
    />;

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.navbar}>
            <Text style={styles.text}>Choose A Photo</Text>  
            <View style={styles.bottomNavbar}>
              <TouchableOpacity style={styles.backButton} onPress={this.props.onPress}>
                <MaterialIcons name="arrow-back" size={25} color="white" />
              </TouchableOpacity>
              <View style={styles.conditionalButton}>
                {this.state.indSelected !== '' && <TouchableOpacity style={styles.button} onPress={this.deleteImage}><Text style={styles.text}>Delete</Text></TouchableOpacity>}
              </View>
              <View style={styles.conditionalButton}>
              {/* <TouchableOpacity style={styles.button} onPress={this.saveToGallery}> */}
                {this.state.indSelected !== '' && <TouchableOpacity style={styles.button} onPress={this.useImage}>
                  <Text style={styles.text}>Use Photo</Text>
                </TouchableOpacity>}
              </View>
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
    flex: 1,
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
  backButton: {
    // flex: 1,
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center'
  },
  conditionalButton: {
    // flex: 1
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: RF(3)
  }
});

const mapStateToProps = state => ({
  image: state.entries.image !== null
});

export default connect(mapStateToProps)(GalleryScreen);