(function() {
    function Cookies($cookies) {
        var currentUser = $cookies.get('blocChatCurrentUser');

        if (!currentUser || currentUser === '') {
            userName = prompt("Please enter your username.");
            $cookies.put('blocChatCurrentUser', userName);
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', Cookies]);
})();
