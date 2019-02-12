'use strict';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize";
import { lightText } from '../helpers/textColors';
const textSize = RF(2.7);
const textSizeLast = RF(2.8);

export const impact = {
  container: {
    borderColor: '#5B5340',
    borderWidth: 1, 
    borderRadius: 10, 
    padding: 10, 
    width: wp('80%'),
    backgroundColor: lightText,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  header: {
    fontSize: RF(3.8), 
    fontWeight: 'bold', 
    alignSelf: 'center'
  },
  myStatsContainer: {
    height: hp('26%')
  },
  lineContainer: {
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row', 
    height: 10, 
    padding: 2
  },
  lineContainerLast: {
    flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row', 
    height: 15, 
    padding: 2
  },
  textLeft: {
    flex: 2, 
    fontSize: textSize
  },
  textRight: {
    flex: 1, 
    textAlign: 'right', 
    fontSize: textSize
  },
  textLeftLast: {
    flex: 2, 
    fontSize: textSizeLast, 
    fontWeight: 'bold'
  },
  textRightLast: {
    flex: 1, 
    textAlign: 'right', 
    fontSize: textSizeLast, 
    fontWeight: 'bold'
  }
};