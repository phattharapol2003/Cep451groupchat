import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const users = [
  { id: 1, name: 'ppppppanida', online: true, avatar: require('./assets/avatar1.png') }, // เพิ่มไฟล์รูป
  { id: 2, name: 'Gwangi Gonggaew', online: true, avatar: require('./assets/avatar1.png') },
  { id: 3, name: 'Suriyakiat Boonworng', online: false, avatar: require('./assets/avatar1.png') },
  { id: 4, name: 'KHETku', online: true, avatar: require('./assets/avatar1.png') },
  { id: 5, name: 'Beam', online: false, avatar: require('./assets/avatar1.png') },
];

const MessageScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
       <Text style={styles.header}>Message</Text>
      {users.map((user) => (
        <TouchableOpacity
        key={user.id}
        style={styles.userCard}
        onPress={() => navigation.navigate('ChatScreen', { chatName: user.name })}
        >
          {/* ใช้รูป avatar */}
          <Image source={user.avatar} style={styles.avatar} />
          <View style={styles.textContainer}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userStatus}>{user.status}</Text>
          </View>
          <View style={[styles.onlineDot, user.online ? styles.online : styles.offline]} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userStatus: {
    fontSize: 14,
    color: '#555',
  },
  onlineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: 10,
  },
  online: {
    backgroundColor: 'green',
  },
  offline: {
    backgroundColor: 'gray',
  },
});

export default MessageScreen;
