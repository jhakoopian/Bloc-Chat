(function() {
    function Cookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');

        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: 'templates/setUsernameModal.html',
                controller: 'ModalCtrl as modal',
                backdrop: 'static',
                keyboard: false
            })
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', Cookies]);
})();
