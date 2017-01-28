(function() {
    function LandingCtrl(Room, Message, $cookies) {

        this.rooms = Room.all;

        this.addRoom = function(room) {
            Room.add(room);
            // this.newRoom.name = "";
            this.newRoom = "";
        }

        var currentRoomId = "";

        this.setRoom = function(room) {
            this.currentRoom = room;
            currentRoomId = room.$id;
            this.messages = Message.getByRoomId(currentRoomId);
        }

        var currentUser = $cookies.get('blocChatCurrentUser');

        this.username = currentUser;

        this.changeUsername = function(newUsername) {
            $cookies.put('blocChatCurrentUser', newUsername);
            currentUser = $cookies.get('blocChatCurrentUser');
            this.username = currentUser;
            this.newUsername = "";
        }

        this.sendMessage = function(message) {
          Message.send(message, currentRoomId, currentUser);
          this.message = "";
        }
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', 'Message', '$cookies', LandingCtrl]);
})();
