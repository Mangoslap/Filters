import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
    state = {
        options: [{
            title: "Breweries",
            isSelected: true,
            color: "white",
        }, {
            title: "All-Day Brunch",
            isSelected: false,
            color: "#63C5FF"
        }, {
            title: "Live Music",
            isSelected: false,
            color: "#63C5FF"
        }, {
            title: "Dancing",
            isSelected: false,
            color: "#63C5FF"
        }, {
            title: "Cheap Drinks",
            isSelected: false,
            color: "#63C5FF"
        }, {
            title: "Tallboy Tuesdays",
            isSelected: false,
            color: "#63C5FF"
        },
        //This point on are the indexes for the Brewery Filters
        {
            title: "Breweries",
            isSelected: true,
            color: "white",
        }, {
            title: "All-Day Brunch",
            isSelected: false,
            color: "#63C5FF"
        }, {
            title: "Live Music",
            isSelected: false,
            color: "#63C5FF"
        }, {
            title: "Dancing",
            isSelected: false,
            color: "#63C5FF"
        }, {
            title: "Cheap Drinks",
            isSelected: false,
            color: "#63C5FF"
        }, {
            title: "Tallboy Tuesdays",
            isSelected: false,
            color: "#63C5FF"
        }]
    }

    buttonTap(index) {
        var arr = this.state.options;
        if (arr[index].isSelected) {
            arr[index].isSelected = false;
            arr[index].color = "#63C5FF";
        }
        else {
            arr[index].isSelected = true;
            arr[index].color = "white";
        }
        this.setState({ arr });
    }

    render() {
        var buttonSize = 16;
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

                    <TouchableOpacity style={styles.button} onPress={() => this.buttonTap(0)}>
                        <Text style={{ fontFamily: "Helvetica-Bold", fontSize: buttonSize, color: this.state.options[0].color }}>{this.state.options[0].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.buttonTap(1)}>
                        <Text style={{ fontFamily: "Helvetica-Bold", fontSize: buttonSize, color: this.state.options[1].color }}>{this.state.options[1].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.buttonTap(2)}>
                        <Text style={{ fontFamily: "Helvetica-Bold", fontSize: buttonSize, color: this.state.options[2].color }}>{this.state.options[2].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.buttonTap(3)}>
                        <Text style={{ fontFamily: "Helvetica-Bold", fontSize: buttonSize, color: this.state.options[3].color }}>{this.state.options[3].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.buttonTap(4)}>
                        <Text style={{ fontFamily: "Helvetica-Bold", fontSize: buttonSize, color: this.state.options[4].color }}>{this.state.options[4].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.buttonTap(5)}>
                        <Text style={{ fontFamily: "Helvetica-Bold", fontSize: buttonSize, color: this.state.options[5].color }}>{this.state.options[5].title}</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.brewTitle}>
                    <Text style={styles.title}>Breweries</Text>
                </View>
                <View style={styles.brewComp}>

                    <TouchableOpacity style={styles.button} onPress={() => this.buttonTap(6)}>
                        <Text style={{ fontFamily: "Helvetica-Bold", fontSize: buttonSize, color: this.state.options[6].color }}>{this.state.options[6].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.buttonTap(7)}>
                        <Text style={{ fontFamily: "Helvetica-Bold", fontSize: buttonSize, color: this.state.options[7].color }}>{this.state.options[7].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.buttonTap(8)}>
                        <Text style={{ fontFamily: "Helvetica-Bold", fontSize: buttonSize, color: this.state.options[8].color }}>{this.state.options[8].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.buttonTap(9)}>
                        <Text style={{ fontFamily: "Helvetica-Bold", fontSize: buttonSize, color: this.state.options[9].color }}>{this.state.options[9].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.buttonTap(10)}>
                        <Text style={{ fontFamily: "Helvetica-Bold", fontSize: buttonSize, color: this.state.options[10].color }}>{this.state.options[10].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.buttonTap(11)}>
                        <Text style={{ fontFamily: "Helvetica-Bold", fontSize: buttonSize, color: this.state.options[11].color }}>{this.state.options[11].title}</Text>
                    </TouchableOpacity>

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
