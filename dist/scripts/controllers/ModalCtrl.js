(function() {
    function ModalCtrl($uibModalInstance, Room, $cookies, $rootScope) {
        this.submit = function(room) {
            Room.add(room);
            $uibModalInstance.close();
        };

        this.cancel = function() {
            $uibModalInstance.dismiss();
        };

        this.setUsername = function(username) {
          $cookies.put('blocChatCurrentUser', username);
          $rootScope.currentUser = username;
          $uibModalInstance.close();
        };
    }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModalInstance', 'Room', '$cookies', '$rootScope', ModalCtrl]);
})();
