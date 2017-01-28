(function() {
    function Message($firebaseArray) {
        var Message = {};

        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function(roomId) {
            return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
        }

        Message.all = messages;

        Message.send = function(message, currentRoomId, currentUser) {
            messages.$add({
              "content": message,
              "roomId": currentRoomId,
              "username": currentUser
            });
        }

        // function writeUserData(userId, name, email, imageUrl) {
        //   firebase.database().ref('users/' + userId).set({
        //     username: name,
        //     email: email,
        //     profile_picture : imageUrl
        //   });
        // }
        // var list = $firebaseArray(ref);
        // list.$add({ foo: "bar" }).then(function(ref) {
        //   var id = ref.key;
        //   console.log("added record with id " + id);
        //   list.$indexFor(id); // returns location in the array
        // });

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
