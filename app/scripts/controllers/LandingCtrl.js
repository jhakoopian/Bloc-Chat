(function() {
    function LandingCtrl(Room, Message, $cookies) {

        this.rooms = Room.all;

        this.addRoom = function(room) {
            Room.add(room);
            // this.newRoom.name = "";
            this.newRoom = "";
        }

        this.setRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(room.$id);
        }

        this.username = $cookies.get('blocChatCurrentUser');

        this.changeUsername = function(newUsername) {
            $cookies.put('blocChatCurrentUser', newUsername);
            this.username = $cookies.get('blocChatCurrentUser');
            this.newUsername = "";
        }

        // this.getMessages = function() {
        //     Message.get(room);
        //     console.log("this worked");
        // }

        // this.getMessages = function(room) {
        //     Message.getMessages(room)
        // }
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', 'Message', '$cookies', LandingCtrl]);
})();
