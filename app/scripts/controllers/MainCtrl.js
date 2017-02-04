(function() {
    function MainCtrl($uibModal, Room, Message, $cookies, $rootScope) {

        this.createRoom = function() {
          $uibModal.open({
            templateUrl: '/templates/createRoomModal.html',
            controller: 'ModalCtrl as modal'
          });
        };

        this.rooms = Room.all;

        this.addRoom = function(room) {
            Room.add(room);
            this.newRoom = "";
        };

        var currentRoomId = "";

        this.setRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
            this.messages = Message.getByRoomId(room.$id);
        };

        $rootScope.currentUser = $cookies.get('blocChatCurrentUser');

        this.setUsername = function(newUsername) {
            $uibModal.open({
              templateUrl: '/templates/setUsernameModal.html',
              controller: 'ModalCtrl as modal'
            });
        };

        this.sendMessage = function(message) {
          Message.send(message, this.currentRoom.$id, $rootScope.currentUser);
          this.message = "";
        };
    }

    angular
        .module('blocChat')
        .controller('MainCtrl', ['$uibModal', 'Room', 'Message', '$cookies', '$rootScope', MainCtrl]);
})();
