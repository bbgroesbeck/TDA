/**
 * Created by i65114 on 1/6/17.
 */


function MainCtrl($localStorage) {
    this.about = {name: 'Welcome to the about page!'};
    this.localStorage = $localStorage;
    console.log(this.localStorage);
    this.localStorage = this.localStorage.$default({
        lists: []
    });
    this.todo;
// created by bryce groesbeck

}

//adding a new list.
MainCtrl.prototype.newList = function () {
   this.localStorage.lists.push({listName:'List', list: [ { name: '', completed: false } ]});
   this.todo = this.localStorage.lists[this.localStorage.lists.length - 1];

};

MainCtrl.prototype.tabClicked = function (clickedList) {
    this.todo = clickedList;
}
