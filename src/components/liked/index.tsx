import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";

const DATA = [
    {
        id: "1",
        nomeUser: "Teste",
        ensinar: "Piano",
        aprender: "Inglês",
        img: undefined
    },
    {
        id: "2",
        nomeUser: "Teste",
        ensinar: "Piano",
        aprender: "Inglês",
        img: undefined
    },
    {
        id: "3",
        nomeUser: "Teste",
        ensinar: "Piano",
        aprender: "Inglês",
        img: undefined
    }
]

export function Liked() {

    return (
        <View>
            <Text style={styles.title}>Pessoas Interessadas</Text>

            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <View style={styles.infoContainer}>
                            <View style={styles.img}>

                            </View>
                            <View>
                                <Text>{item.nomeUser}</Text>
                                <Text>{item.ensinar}</Text>
                            </View>
                        </View>
                    </View>
                )}

                scrollEnabled={true}
                style={styles.list}

            />
        </View>
    )
}