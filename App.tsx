import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
// import Navigation from './navigation';
// import Buttons from "./screens/Buttons";
// import FlatLists from "./screens/FlatList";
// import DisplayAnImage from "./screens/Image";
// import ImageBackgrounds from "./screens/ImageBackground";
// import KeyboardAvoidingView from "./screens/KeyboardAvoidingView";
// import Modals from "./screens/Modal";
// import Pressables from "./screens/Pressable";
// import RefreshControls from "./screens/RefreshControl";
// import ScrollViews from "./screens/SrcollViews";
// import SectionLists from "./screens/SectionList";
// import StatusBars from "./screens/StatusBar";
// import Switches from "./screens/Switch";
// import TextInANest from "./screens/Text";
import UselessTextInput from "./screens/TextInput";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;        
  } else {
    return (
      <SafeAreaProvider>
        {/* <Navigation colorScheme={colorScheme} /> */}
        {/* <StatusBar /> */}
        {/* <Buttons></Buttons> */}
        {/* <FlatLists></FlatLists> */}
        {/* <DisplayAnImage></DisplayAnImage> */}
        {/* <ImageBackgrounds></ImageBackgrounds> */}
        {/* <KeyboardAvoidingView></KeyboardAvoidingView> */}
        {/* <Modals></Modals> */}
        {/* <Pressables></Pressables> */}
        {/* <RefreshControls></RefreshControls> */}
        {/* <ScrollViews></ScrollViews> */}
        {/* <SectionLists></SectionLists> */}
        {/* <StatusBars></StatusBars> */}
        {/* <Switches></Switches> */}
        {/* <TextInANest></TextInANest> */}
        <UselessTextInput></UselessTextInput>
      </SafeAreaProvider>
    );
  }
}
 