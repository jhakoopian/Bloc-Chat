(function() {
    function Room($firebaseArray) {
        var Room = {};

        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        Room.all = rooms;

        Room.add = function(room) {
          rooms.$add(room);
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

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
