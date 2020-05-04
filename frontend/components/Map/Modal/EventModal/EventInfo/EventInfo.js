import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

//packages
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


class EventInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    //set title when event modal is opened
    componentDidMount(){
        this.props.setTitle();
    }

    renderGuests = ({item}) => {
        return(
            <View style = {styles.guestView}>
                <View style = {styles.guestUsernameView}>
                    <Text style = {styles.guestUsernameText}>{item.username}</Text>
                </View>
            </View>
        )
    }

    render(){
        return(
            <View style ={styles.eventInfosView}>
                <View style = {styles.eventTitleView}>
                    <View style = {styles.eventHeaderView}>
                        <Text style = {styles.eventInfoText}>Title</Text>
                    </View>
                    <View style = {styles.eventTitleInputView}>
                        <TextInput
                        placeholder="enter title"
                        style={styles.input}
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                        value = {this.props.title}
                        onChangeText={(title) => this.props.onChangeTitle(title)}
                        maxLength={32}/>
                        <TouchableOpacity style = {styles.clearButtonView} onPress = {this.props.clearTitle}>
                            <MaterialCommunityIcons name = "close-circle" size = {20} color = "lightgrey"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.usersView}>
                    <View style = {styles.hostView}>
                        <View style = {styles.headercenterView}>
                            <Text>Host</Text>
                        </View>
                        <View style = {styles.hostNameView}>
                            <Text style = {styles.hostNameText}>{this.props.eventItem.hostName}</Text>
                        </View>
                    </View>
                    <View style = {styles.guestsView}>
                        <View style = {styles.headercenterView}>
                            <Text>Guest</Text>
                        </View>
                        <FlatList
                            data = {this.props.eventItem.guests}
                            renderItem = {this.renderGuests}
                            keyExtractor = {(item)=>item.userID.toString()}
                        />
                    </View>
                </View>
                <TouchableOpacity style = {styles.leaveButtonView} onPress = {this.props.leaveEvent}>
                    <Text style = {styles.leaveButtonText}>LEAVE</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    eventInfosView: {
        flex: 1,
    },
    eventTitleView: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: "grey",
    },
    eventHeaderView: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    eventTitleInputView: {
        flexDirection: 'row',
        flex: 5,
    },
    eventInfoText: {
        fontSize: 15,
        fontWeight: "200",
        fontFamily: 'Helvetica Neue',
        color: "#3C3C3D",
    },
    input: {
        flex: 1,
        fontFamily: 'Helvetica Neue',
        color: "#3C3C3D",
    },
    clearButtonView: {
        justifyContent: 'flex-end',
        marginTop: 5,
        marginRight: 5,
    },
    usersView:{
        flex: 1,
    },
    hostView: {
        padding: 5,
        alignItems: "center",
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: "lightgrey",
    },
    hostNameText: {
        fontSize: 15,
        fontFamily: 'Helvetica Neue',
        color: "#3C3C3D",
    },
    guestsView: {
        padding: 5,
        alignItems: "center",
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: "lightgrey",
    },
    guestUsernameView: {
        alignItems: "center",
        justifyContent: 'center',
    },
    guestUsernameText: {
        fontSize: 15,
        fontFamily: 'Helvetica Neue',
        color: "#3C3C3D",
    },
    leaveButtonView: {
        justifyContent: "flex-end",
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: "#3C3C3D",
        margin: 20,
    },
    leaveButtonText: {
        padding: 10,
        fontSize: 15,
        fontFamily: 'Helvetica Neue',
        color: "white",

    }
});

export default EventInfo;