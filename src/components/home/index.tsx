
// import { supabase } from '@/lib';
import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';

import { UsuarioProps } from '@/types/user';
import { styles } from './styles';



const UserCard = () => (
    <View style={styles.card}>
        <View style={styles.matchImg}>
            <Text>Foto do miliante</Text>
        </View>
        <Text style={styles.userName}>Nome do miliante</Text>
        <View style={styles.infoContainer}>
            <View style={styles.infoTextContainer}>
                <Text style={styles.learnText}>Aprender</Text>
                <Text style={styles.infoText}>Piano</Text>
            </View>
            <View style={styles.infoTextContainer}>
                <Text style={styles.learnText}>Ensinar</Text>
                <Text style={styles.infoText}>Inglês</Text>
            </View>
        </View>
    </View>
);

const Negar = () => (
    <View style={styles.negar}>
        <Text style={styles.circleIcon}>X</Text>
    </View>
);

const Aceitar = () => (
    <View style={styles.aceitar}>
        <Text style={styles.circleIcon}>M</Text>
    </View>
);

export function HomePage() {
    const [usuario, setUsuario] = useState<UsuarioProps[]>([]);
    const swiperRef = useRef(null);

    // const usuarioLogadoId = supabase.auth.user()?.id;

    // Busca os usuários sugeridos quando a página for carregada
    /* useEffect(() => {
         const fetchSugestoes = async () => {
             if (!usuarioLogadoId) return;
 
             const { data, error } = await supabase.rpc('sugerir_usuarios_para_swipe', {
                 current_user_id: usuarioLogadoId,
             });
 
             if (error) {
                 console.error("Erro ao buscar sugestões:", error);
             } else {
                 setUsuario(data);
             }
         };
 
         fetchSugestoes();
     }, [usuarioLogadoId]); */

    // Deslizar para a direita ("like")
    const handleSwipeRight = async (cardIndex: number) => {
        // const swipedUser = usuario[cardIndex];
        // if (!swipedUser || !usuarioLogadoId) return;

        // console.log(`Você gostou de: ${swipedUser.nome}`);

        /* const { data: isMatch, error } = await supabase.rpc('registrar_swipe_e_verificar_match', {
             swiper_id: usuarioLogadoId,
             swiped_id: swipedUser.id,
         });
 
         if (error) {
             console.error("Erro ao registrar swipe:", error);
         }
 
         if (isMatch) {
             // DEU MATCH!
             alert(`🎉 É uma combinação! Você e ${swipedUser.nome} querem trocar conhecimentos!`);
             // Criar alguma ação para depois do match
         }*/
        alert(`🎉 É uma combinação! Você e a outra pessoa querem trocar conhecimentos!`);
    };

    // Deslizar para a esquerda (rejeitar)
    // Registrar a rejeição e não mostrar de novo.
    const handleSwipeLeft = (cardIndex: number) => {
        //const swipedUser = usuario[cardIndex];
        // console.log(`Você rejeitou: ${swipedUser.nome}`);
        //Editar a coluna Aprovado para false
        alert(`Recusado!`);
    }

    return (
        <>
            <View style={styles.container}>
                <Swiper
                    ref={swiperRef}
                    cards={usuario}
                    renderCard={() => <UserCard />}
                    onSwipedRight={handleSwipeRight}
                    onSwipedLeft={handleSwipeLeft}
                    verticalSwipe={false}
                    onSwipedAll={() => {
                        console.log('Você viu todos os usuários!');
                        // Decidir o que fazer quando não tiver mais sugestões
                    }}
                    cardIndex={0}
                    backgroundColor={'#F1F1F1'}
                    stackSize={3}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Swiper
                    ref={swiperRef}
                    cards={usuario}
                    onTapCard={handleSwipeLeft}
                    renderCard={() => <Negar />}
                    cardIndex={1}
                    stackSize={3}
                />
                <Swiper
                    ref={swiperRef}
                    cards={usuario}
                    onTapCard={handleSwipeRight}
                    renderCard={() => <Aceitar />}
                    cardIndex={1}
                    stackSize={3}
                />
            </View>
        </>
    );
};


