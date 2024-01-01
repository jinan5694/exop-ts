import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, Button, Appbar } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack'


// interface ScreenProps {
//   navigation: Na
// }
function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Details')}>
        Go to Details
      </Button>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const screenOptions: NativeStackNavigationOptions = {
    headerBackVisible: true,
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview'}} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



// const MyAppBar = () => {
//   const _goBack = () => console.log('Went back');

//   const _handleSearch = () => console.log('Searching');

//   const _handleMore = () => console.log('Shown more');

//   return (
//     <Appbar.Header>
//       <Appbar.BackAction onPress={_goBack} />
//       <Appbar.Content title="Title" />
//       <Appbar.Action icon="magnify" onPress={_handleSearch} />
//       <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
//     </Appbar.Header>
//   );
// };


// export default function App() {
//   return (
//     <NavigationContainer>
//       <PaperProvider>
//         <MyAppBar></MyAppBar>
//         <View style={styles.container}>
//           <Text>Open up App.tsx to start working on your app!</Text>
//           <StatusBar style="auto" />
//           <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
//             Press me
//           </Button>
//         </View>
//       </PaperProvider>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
