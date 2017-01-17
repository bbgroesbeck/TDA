/**
 * Created by i65114 on 1/6/17.
 */


function MainCtrl() {
    this.about = {name: 'Welcome to the about page!'};
    this.lists = [];
    this.todo;
// created by bryce groesbeck

}

//adding a new list.
MainCtrl.prototype.newList = function () {
   this.lists.push({listName:'List', list: [ { name: '', completed: false } ]});
   this.todo = this.lists[this.lists.length - 1];

};

MainCtrl.prototype.tabClicked = function (clickedList) {
    this.todo = clickedList;
}
