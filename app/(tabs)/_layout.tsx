
import { Stack } from 'expo-router';

import { SafeAreaView } from 'react-native-safe-area-context';



export default function RootLayout() {


  return (
      
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/* {/* <Stack.Screen name="products" options={{headerShown:false}}/> */}
        {/* <Stack.Screen name="products/[id]" options={{title:'Product details',headerShown:true}}/> */}
        <Stack.Screen name="Cart" options={{headerShown:false}}/> */

      </Stack>

  );
}
