import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
    
    state = {
        clubFilters: [{
            title: "Breweries",
            isSelected: true,
            color: "white",
            index: 0,
        }, {
            title: "All-Day Brunch",
            isSelected: false,
            color: "#63C5FF",
            index: 1,
        }, {
            title: "Live Music",
            isSelected: false,
            color: "#63C5FF",
            index: 2,
        }, {
            title: "Dancing",
            isSelected: false,
            color: "#63C5FF",
            index: 3,
        }, {
            title: "Cheap Drinks",
            isSelected: false,
            color: "#63C5FF",
            index: 4,
        }, {
            title: "Tallboy Tuesdays",
            isSelected: false,
            color: "#63C5FF",
            index: 5,
        }],

        brewFilters: [
            {
                title: "Breweries",
                isSelected: true,
                color: "white",
                index: 0,
            }, {
                title: "All-Day Brunch",
                isSelected: false,
                color: "#63C5FF",
                index: 1,
            }, {
                title: "Live Music",
                isSelected: false,
                color: "#63C5FF",
                index: 2,
            }, {
                title: "Dancing",
                isSelected: false,
                color: "#63C5FF",
                index: 3,
            }, {
                title: "Cheap Drinks",
                isSelected: false,
                color: "#63C5FF",
                index: 4,
            }, {
                title: "Tallboy Tuesdays",
                isSelected: false,
                color: "#63C5FF",
                index: 5,
        }]
    }
    buttonTap(key, array) {
        var arr = array;
        if (arr[key.index].isSelected) {
            arr[key.index].isSelected = false;
            arr[key.index].color = "#63C5FF";
        }
        else {
            arr[key.index].isSelected = true;
            arr[key.index].color = "white";
        }
        this.setState({ arr });
    }
    renderFilters = (array) => {
        return (
            array.map(x => (
                <TouchableOpacity style={styles.button} onPress={() => this.buttonTap(x, array)} key={x.index}>
                    <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 16, color: x.color }}>{x.title}</Text>
                </TouchableOpacity>
                )
            )
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Ionicons name="md-close" size={32} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.clubTitle}>
                    <Text style={styles.title}>Clubs</Text>
                </View>
                <View style={styles.clubComp}>
                    {this.renderFilters(this.state.clubFilters)}
                </View>
                <View style={styles.brewTitle}>
                    <Text style={styles.title}>Breweries</Text>
                </View>
                <View style={styles.brewComp}>
                    {this.renderFilters(this.state.brewFilters)}
                </View>
                <View style={styles.footer}>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#2898FA"
    },
    header: {
        flex: 2,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    clubTitle: {
        flex: 2,
        paddingHorizontal: 20,
        justifyContent: "flex-end"
    },
    clubComp: {
        flex: 6,
        paddingHorizontal: 20,
        padding: 30,
        flexDirection: "column",
        flexWrap: "wrap"
    },
    brewTitle: {
        flex: 2,
        paddingHorizontal: 20,
        justifyContent: "flex-end",
    },
    brewComp: {
        flex: 6,
        paddingHorizontal: 20,
        padding: 30,
        flexDirection: "column",
        flexWrap: "wrap"
    },
    title: {
        fontSize: 42,
        color: "white",
        fontFamily: 'Helvetica-Bold',
    },
    button: {
        padding: 10,
        paddingVertical: 20,
    },
    footer: {
        flex: 2,
        justifyContent: "center",
    },
});
