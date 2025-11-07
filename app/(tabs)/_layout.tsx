
import { Stack } from 'expo-router';

import { SafeAreaView } from 'react-native-safe-area-context';



export default function RootLayout() {


  return (
      
      <Stack>
         
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="profil" options={{headerShown:false}}/>
        <Stack.Screen name="notification" options={{ headerShown: false }} />
        
        <Stack.Screen name="Cart" options={{headerShown:false}}/>
        <Stack.Screen name="[id]" options={{headerShown:false}}/>


      </Stack>

  );
}
