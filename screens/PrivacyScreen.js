import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Linking, Button } from 'react-native';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RF from "react-native-responsive-fontsize";

export default props => (  
  <ScrollView style={styles.privacyContainer}>
    <View style={styles.privacyLogoContainer}>
      <Image source={require('./../src/assets/images/function-earth-logo.png')} 
        style={{flex: 1, width: undefined, height: undefined, alignSelf: 'stretch'}}
        resizeMode="contain"/>
      <Text style={styles.loginTitle}>Function Earth Earth Privacy Policy</Text>
    </View>
    <Text style={styles.content}>We at Function Earth (“Function Earth,”, "FE", “we,” “us,” or “our”) created this privacy policy (“Privacy Policy”) because we know that you care about how information you provide to us is used and shared. This Privacy Policy relates to the information collection and use practices of Function Earth in connection with our website located at www.functionearth.com (the “Site”), and the Service.</Text>
    <Text style={styles.content}>By visiting our Site and/or using our Service, you are agreeing to the terms of this Privacy Policy and the accompanying Terms of Use. Capitalized terms not defined in this Privacy Policy shall have the meaning set forth in our Terms of Use.</Text>
    <Text style={styles.privacyLargeText}>Information We Collect</Text>
    <Text style={styles.content}>We do not collect any personal information from you unless you voluntarily provide it to us.</Text>
    <Text style={styles.content}>When you sign up to become a Registered User, you will be asked to provide us with certain personal information, such as your name, email address, birth date (“Personal Information”). If you choose to purchase Products through the Service, you will be asked to provide your billing address, shipping address and credit card information (“Transaction Information”).</Text>
    <Text style={styles.content}>Like most web sites, we use automatic data collection technology when you visit our Site to record information that identifies your computer, to track your use of our Site, and to collect certain basic information about you and your surfing habits. This information includes information about your operating system, your IP addresses, browser type and language, referring and exit pages and URLs, keywords, date and time, amount of time spent on particular pages, what sections of a website you visit, and similar information concerning your use of the Site and the Service (the “Usage Information”).</Text>
    <Text style={styles.content}>We may collect this Usage Information by using cookies and pixel tags (also called web beacons or clear gifs). Cookies are small packets of data that a web site stores on your computer’s hard drive so that your computer will “remember” information about your visit. Pixel tags are tiny graphics with a unique identifier, similar in function to cookies, and are used to track the online movements of web site users. You can reject cookies by following the directions provided in your Internet provider’s “help” file. If you reject cookies, you may still visit the Site, but may not be able to use some areas of the Site and/or the Service.</Text>
    <Text style={styles.content}>We do not collect personally identifying information in this way, but if you’ve provided us with personally identifying information we may associate that information with the information that is collected automatically. Automatic data collection may be performed on our behalf by our services providers.</Text>
    <Text style={styles.content}>We may also allow third-party companies that are presenting advertisements on the Site to set and access their own cookies. Such third-party cookies are not governed by this Privacy Policy, but by the privacy policies of such third party.</Text>
    <Text style={styles.privacyLargeText}>Information Collected by or Through Third-Party Companies</Text>
    <Text style={styles.content}>We may share Usage Information about your activity on the Site with third parties for the purpose of tailoring, analyzing, managing, reporting, and optimizing advertising you see on the Site, and elsewhere. These third parties may use cookies, pixel tags (also called web beacons or clear gifs), and/or other technologies to collect such Usage Information for such purposes. Pixel tags enable us and these third-parties to recognize a browser’s cookie when a browser visits the site on which the pixel tag is located in order to learn which advertisement brings a user to a given site.</Text>
    <Text style={styles.content}>We may share your Personal Information, and non-personal information, including your name, address, email address and any transactions you conduct on our Site or offline with us with a third party advertising partner and its service providers in order to deliver tailored advertising to you that match your interests when you visit our Site as well as other websites. Our advertising partner will make the data that we provide anonymous so that no one else will receive your Personal Information.</Text>
    <Text style={styles.privacyLargeText}>Opt Out Options</Text>
    <Text style={styles.content}>You may opt-out of the use of your information for tailored advertising purposes. To learn more about the use of this information or to choose not to have this information used by our third-party advertising partner by opting out, please visit the Network Advertising Initiative at</Text>
    <Button title="http://www.networkadvertising.org/managing/opt_out.asp" onPress={() => { Linking.openURL('http://www.networkadvertising.org/managing/opt_out.asp')}} style={styles.link}/>
    <Text style={styles.content}>If you delete your Cookies, use a different browser, or buy a new computer, you will need to renew your opt-out choice.</Text>
    <Text style={styles.privacyLargeText}>How We Use Your Information</Text>
    <Text>We will use the Personal Information and Usage Information collected on this Site for the following purposes:</Text>
    <View style={styles.list}>
      <Text style={styles.content}>To respond to your requests and to provide you with the Service;</Text>
      <Text style={styles.content}>To respond to your inquiries and contact you about changes to this Site;</Text>
      <Text style={styles.content}>To send you notices (for example, in the form of e-mails, mailings, and the like) regarding products or services you are receiving, and for billing and collection purposes;</Text>
      <Text style={styles.content}>For any other purposes disclosed at the time the information is collected or to which you consent; and</Text>
      <Text style={styles.content}>As otherwise specifically described in this Privacy Policy.</Text>
    </View>
    <Text style={styles.content}>We may also use your information to improve our Site, and may use cookies and other information to enable us to customize your user experience.</Text>
    <Text style={styles.content}>We will share your Transaction Information with trusted third parties as necessary to process and fulfill your order. All such third parties are contractually obligated to keep all Transaction Information confidential, maintain the privacy of all Registered Users, and to use such Transaction Information only to provide services to Function Earth for the benefit of Function Earth and its Registered Users. Transaction Information may also be used to develop a personalized profile and shopping history for each Registered User in order to customize promotions, updates or special offers.</Text>
    <Text style={styles.content}>We, like many businesses, sometimes hire other companies to perform certain business-related functions. Examples include mailing information, maintaining databases, hosting services, and processing payments. When we employ another company to perform a function of this nature, we provide them with the information that they need to perform their specific function. We require such third parties to maintain the confidentiality of such information and use such information only as necessary to provide us with designated services.</Text>
    <Text style={styles.content}>If we or all or substantially all of our assets are acquired, we expect that the information that we have collected, including personally identifying information, would be transferred along with our other business assets.</Text>
    <Text style={styles.content}>We may disclose Personal Information and Usage Information to government authorities, and to other third parties when compelled to do so by government authorities, at our discretion, or otherwise as required by law, including but not limited to in response to court orders and subpoenas. We also may disclose Personal Information and the Usage Information when we have reason to believe that someone is or may be causing injury to or interference with our rights or property, other users of this Site, or anyone else that could be harmed by such activities.</Text>
    <Text style={styles.privacyLargeText}>Function Earth Blog Content</Text>
    <Text style={styles.content}>We are not responsible for protecting any Personal Information that you post on our blog or on social media web pages associated with Function Earth. Although we reserve the right to monitor any postings, all Personal Information that is posted on these websites is unprotected and can be seen by anyone with access to the Site.</Text>
    <Text style={styles.privacyLargeText}>How We Protect Your Information</Text>
    <Text style={styles.content}>We take commercially reasonable steps to protect the Personal Information and the Usage Information from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. Please understand, however, that no security system is impenetrable. We cannot guarantee the security of our databases, nor can we guarantee that the information you supply will not be intercepted while being transmitted to and from us over the Internet.</Text>
    <Text style={styles.privacyLargeText}>Accessing and Modifying Account Information</Text>
    <Text style={styles.content}>You may update the information that is stored in your user account in by visiting by e-mailing us at</Text>
    <Button title="support@functionearth.com" onPress={() => { Linking.openURL('mailto:support@functionearth.com')}} style={styles.link} />
    <Text style={styles.privacyLargeText}>Your Choices</Text>
    <Text style={styles.content}>If you wish to stop receiving promotional e-mails, you may do so by e-mailing: </Text>
    <Button title="support@functionearth.com" onPress={() => { Linking.openURL('mailto:support@functionearth.com')}} style={styles.link}/>
    <Text style={styles.privacyLargeText}>Links</Text>
    <Text style={styles.content}>This Site contains content, services, advertising and other materials that link to web sites operated by third parties. We have no control over those other sites, and this Privacy Policy does not apply to them.</Text>
    <Text style={styles.privacyLargeText}>Important Notice to Non-U.S. Residents</Text>
    <Text style={styles.content}>The Site and the Service are operated in the United States. If you are located outside of the United States, please be aware that any information you provide to us will be transferred to the United States. By using the Service and/or providing us with any information, you consent to this transfer.</Text>
    <Text style={styles.privacyLargeText}>Collection of Information from Minors</Text>
    <Text style={styles.content}>We do not knowingly collect Personal Information from minors under 21, nor do we direct any of our content to minors under 21. If we learn that we collected the Personal Information of a minor, we will take steps to delete the information as soon as possible.</Text>
    <Text style={styles.privacyLargeText}>Changes to This Privacy Policy.</Text>
    <Text style={styles.content}>This Privacy Policy is effective as of the date stated at the top of this Privacy Policy. We may change this Privacy Policy from time to time, and will post any changes on the Site as soon as they go into effect. By accessing the Site or using the Service after we make any such changes to this Privacy Policy, you are deemed to have accepted such changes. Please refer back to this Privacy Policy on a regular basis.</Text>
    <Text style={styles.privacyLargeText}>How to Contact Us</Text>
    <Text style={styles.content}>If you have questions about this Privacy Policy, please e-mail us at: </Text>
    <Button title="support@functionearth.com" onPress={() => { Linking.openURL('mailto:support@functionearth.com')}} style={styles.link} />
    <Text style={styles.content}>, “PRIVACY POLICY” in the subject line.</Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  privacyContainer: {
    flex: 1,
    marginLeft: wp('5%'),
    marginRight: wp('5%'),
  },
  privacyLogoContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('4%')
  },
  logo: {
    flex: 1, 
    width: undefined, 
    height: undefined, 
    alignSelf: 'stretch'
  },
  loginTitle: {
    textAlign: 'center',
    fontSize: RF(5),
  },
  privacyLargeText: {
    textAlign: 'center',
    fontSize: RF(4)
  },
  content: {
    textAlign: 'center',
    fontSize: RF(2)
  },
  link: {
    color: 'blue',
    height: hp('2%'), width: wp('10%'),  shadowColor: '#000' 
  }
});