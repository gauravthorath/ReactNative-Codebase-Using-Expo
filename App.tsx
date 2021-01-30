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
import KeyboardAvoidingView from "./screens/KeyboardAvoidingView";

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
        <KeyboardAvoidingView></KeyboardAvoidingView>
      </SafeAreaProvider>
    );
  }
}
 