import React from 'react';
import { View } from 'react-native';

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
  <Image style={{height:100,width:100}} source={{require:'../imgages'}}/>
 </View>
);
 

export default App;