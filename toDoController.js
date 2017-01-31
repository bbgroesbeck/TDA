/**
 * Created by i65114 on 1/6/17.
 */

function ToDoComponentCtrl($localStorage, $mdToast) {
    this.$mdToast = $mdToast;
     // this.localStorage = $localStorage;

}
// created by bryce groesbeck
ToDoComponentCtrl.prototype.add = function () {
    this.todo.list.push({name: '', completed: false})
    // this.localStorage.storeList = this.todo.list;

//mdtoast
    this.$mdToast.showSimple('Success, Task Added');


};


//clears checked tasks.
ToDoComponentCtrl.prototype.clear = function () {

    for (var i = 0; i < this.todo.list.length; i++) {
        var task = this.todo.list[i];
        if (task.completed === true) {
            this.todo.list.splice(i, 1);
            this.clear();
        }

    }
    this.$mdToast.showSimple('Yep, Task Cleared');
};
// //need to open a new tab in the same page.
// ToDoComponentCtrl.prototype.newList = function () {
//     window.open('index.html', '_blank');
// };


// created by bryce groesbeck


//deletes the selected task.
ToDoComponentCtrl.prototype.remove = function (index) {
    this.todo.list.splice(index, 1)

    this.$mdToast.showSimple('Sad, Task Removed');
};


var toDoComponent = {
    templateUrl: 'toDo.html',
    controller: ToDoComponentCtrl,
    bindings: {
        todo: '='
    }
};
// created by bryce groesbeck