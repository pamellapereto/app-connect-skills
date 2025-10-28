import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";

const DATA = [
    {
        id: "1",
        nomeUser: "Teste",
        nomeMatch: "Teste Match",
        ensinar: "Piano",
        aprender: "Inglês"
    },
    {
        id: "2",
        nomeUser: "Teste",
        nomeMatch: "Teste Match",
        ensinar: "Piano",
        aprender: "Inglês"
    },
    {
        id: "3",
        nomeUser: "Teste",
        nomeMatch: "Teste Match",
        ensinar: "Piano",
        aprender: "Inglês"
    }
]

export function Match() {

    return (
        <View>
            <Text style={styles.title}>Matches</Text>

            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
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

                        <View style={styles.infoContainer}>
                            <View>
                                <Text>{item.nomeMatch}</Text>
                                <Text>{item.aprender}</Text>
                            </View>
                            <View style={styles.img}>

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