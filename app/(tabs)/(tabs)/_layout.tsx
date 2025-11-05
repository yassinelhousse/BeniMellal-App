
import { Stack } from 'expo-router';

import { SafeAreaView } from 'react-native-safe-area-context';



export default function RootLayout() {


  return (
      
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="profil" options={{headerShown:false}}/>
        <Stack.Screen name="animation" options={{title:'Product details',headerShown:true}}/>
        <Stack.Screen name="Cart" options={{headerShown:false}}/>
        <Stack.Screen name="[id]" options={{headerShown:false}}/>


      </Stack>

  );
}
