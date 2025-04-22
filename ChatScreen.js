import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // ✅ import ให้แล้ว

const ChatScreen = ({ route }) => {
  const { chatName } = route.params;
  const [messages, setMessages] = useState([
    { id: '1', sender: 'friend', avatar: require('./assets/avatar1.png') },
    
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const now = new Date();
      const currentTime = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });

      setMessages([
        ...messages,
        {
          id: messages.length + 1 + '',
          sender: 'me',
          text: newMessage,
          time: currentTime,
        },
      ]);
      setNewMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.messageList}>
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageRow,
              message.sender === 'me' ? styles.myMessageRow : styles.friendMessageRow,
            ]}
          >
            {message.sender === 'friend' && (
              <Image source={message.avatar} style={styles.avatar} />
            )}
            <View
              style={[
                styles.messageBubble,
                message.sender === 'me' ? styles.myMessage : styles.friendMessage,
              ]}
            >
              <Text style={styles.messageText}>{message.text}</Text>
              <Text style={styles.messageTime}>{message.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="camera-outline" size={24} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="image-outline" size={24} color="#555" />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Type a message..."
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>ส่ง</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop: 5,
  },
  messageList: {
    paddingBottom: 60,
    paddingHorizontal: 10,
  },
  messageRow: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'flex-end',
  },
  friendMessageRow: {
    justifyContent: 'flex-start',
  },
  myMessageRow: {
    justifyContent: 'flex-end',
  },
  messageBubble: {
    maxWidth: '70%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  myMessage: {
    backgroundColor: '#d1f7d1',
    borderTopRightRadius: 0,
  },
  friendMessage: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 0,
    marginLeft: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageText: {
    fontSize: 16,
    textAlign: 'left',
  },
  messageTime: {
    fontSize: 12,
    color: '#555',
    marginTop: 5,
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  iconButton: {
    marginRight: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default ChatScreen;
