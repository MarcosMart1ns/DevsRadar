import React from 'react';
import { WebView} from 'react-native-webview'


function Profile({navigation}){
    const githubUsername = navigation.getParam('github_username')

    return <WebView styles={{ flex: 1 }} source={{ uri: `https://github.com/${githubUsername}`}} />
}

export default Profile;
