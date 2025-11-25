import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
 
const UserCard = () => ( 
  <View /*style={styles.card}*/> 
    <Text /*style={styles.userName}*/>Usuário Exemplo</Text> 
    <Text /*style={styles.infoText}*/>Aprender: Violão | Ensinar: Inglês</Text> 
  </View> 
); 
 
export function Home() { 
  const [usuarios] = useState([{}, {}, {}]); 
  const swiperRef = useRef(null); 
 
  const handleSwipeRight = () => alert('🎉 Combinação!'); 
  const handleSwipeLeft = () => alert('❌ Rejeitado!'); 
 
  return ( 
    <SafeAreaView>
      <Text>Tela home</Text>
    </SafeAreaView> 
  ); 
} 
