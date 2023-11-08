<template>
  <div>
    <h1>چت کاربران</h1>
  </div>
</template>

<script>
import {Client} from "@stomp/stompjs";
// import SockJs from "sockjs-client";

export default {
  name: "ChatUser",
  components: {},
  data() {
    return {
      stompClient: null,

    };
  },
  methods: {
    setStompClient(url) {
      this.stompClient = new Client({
        brokerURL: url
      });
      this.stompClient.onConnect = (frame) => {
        console.log('Connected: ' + frame);
        this.stompClient.subscribe('/topic/conv-1', this.receiveMessage);
      };
      this.stompClient.onWebSocketError = (error) => {
        console.error('Error with websocket', error);
      };
      this.stompClient.onStompError = (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
      };
    },
    connect() {
      this.stompClient.activate();
    },
    disconnect() {
      this.stompClient.deactivate();
      console.log("Disconnected");
    },
    sendMessage(content) {
      this.stompClient.publish({
        destination: "/app/messages/chat-1/conv-1",
        body: JSON.stringify(
            {
              "senderUserId": "mehdi",
              "chatId": "1",
              "conversationId": "1",
              "content": content,
              "timestamp": "0"
            })
      });
    },
    receiveMessage(message) {
      console.log('Received Message: ' + JSON.stringify(JSON.parse(message.body)));
    }
  },
  mounted() {
    this.setStompClient('ws://localhost:8085/ws');
    this.connect();
    this.sendMessage('hello guys :)');
  },
};
</script>


<style>
</style>
