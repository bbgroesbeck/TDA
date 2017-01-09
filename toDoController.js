/**
 * Created by i65114 on 1/6/17.
 */

function ToDoComponentCtrl() {
    this.todoModel = {
        list: [ { name: '', completed: false } ]
    };
 }
// created by bryce groesbeck
ToDoComponentCtrl.prototype.add = function () {
    this.todoModel.list.push({name:'', completed:false})
    };



ToDoComponentCtrl.prototype.clear = function () {

    for (var i = 0; i < this.todoModel.list.length; i++) {
        var task = this.todoModel.list[i];
        if (task.completed === true){
            this.todoModel.list.splice(i, 1);
            this.clear();
        }

    }
};

ToDoComponentCtrl.prototype.newList = function () {
    window.open('index.html', '_blank');
};
// created by bryce groesbeck

ToDoComponentCtrl.prototype.remove = function (index) {
    this.todoModel.list.splice(index, 1)
    };


var toDoComponent = {
    templateUrl: 'toDo.html',
    controller: ToDoComponentCtrl,
    bindings: {
        toDo: '='
    }
};
// created by bryce groesbeck