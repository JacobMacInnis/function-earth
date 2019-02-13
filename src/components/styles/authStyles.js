import { Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize";
import { lightText } from '../helpers/textColors';

export const authInput = { color: lightText, backgroundColor: '#424039', borderColor: lightText, borderWidth: 1, borderRadius: 10, height: hp('5%'), width: wp('60%'), fontSize: RF(2.5)}

export const authLabel = { color: lightText, fontSize: RF(2.5), alignSelf: 'center', }
// export const authLabel = () => {
//   var labelStyle = {
//        color: lightText,
//      };
//  return <Text style={labelStyle}>Label</Text>
//  }

export const authButton =  {borderWidth: 1, borderRadius: 10, borderColor: 'white', height: hp('5%'), width: wp('60%'), margin: 10, justifyContent: 'center',  shadowColor: 'white', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, elevation: 1};

export const authButtonText = { fontSize: RF(4), alignSelf: 'center', fontWeight: 'bold', color: lightText };