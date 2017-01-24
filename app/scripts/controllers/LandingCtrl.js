(function() {
    function LandingCtrl(Room, Message) {

        this.rooms = Room.all;

        this.addRoom = function(room) {
            Room.add(room);
            this.newRoom.name = "";
        }

        this.setRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(room.$id);
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
        .controller('LandingCtrl', ['Room', 'Message', LandingCtrl]);
})();
