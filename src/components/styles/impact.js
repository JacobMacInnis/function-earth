'use strict';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize";

export const impact = {
  container: {
    borderWidth: 1, 
    borderRadius: 10, 
    padding: 10, 
    width: wp('70%')
  },
  header: {
    fontSize: RF(4), 
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
    fontSize: RF(3)
  },
  textRight: {
    flex: 1, 
    textAlign: 'right', 
    fontSize: RF(3)
  },
  textLeftLast: {
    flex: 2, 
    fontSize: RF(3.2), 
    fontWeight: 'bold'
  },
  textRightLast: {
    flex: 1, 
    textAlign: 'right', 
    fontSize: RF(3.2), 
    fontWeight: 'bold'
  }
};