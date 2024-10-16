import {
    Button,
    GestureResponderEvent,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text
} from "react-native";

function HomeScreen({ navigation }: { navigation: any }): React.JSX.Element {
    // const handleNavigateWater = (e: GestureResponderEvent) => {
    //     navigation.navigate('Water');
    // };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text>Hello World!</Text>

                <Button title="Drink Water" />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        paddingHorizontal: 24,
    }
});

export default HomeScreen;