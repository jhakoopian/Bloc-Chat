(function() {
    function LandingCtrl(Room) {
        this.rooms = Room.all;

        this.addRoom = function(room) {
            console.log(room);
            Room.add(room);
            this.newRoom.name = "";
        }
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', LandingCtrl]);
})();
