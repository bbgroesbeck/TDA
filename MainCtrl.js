/**
 * Created by i65114 on 1/6/17.
 */


function MainCtrl($localStorage, $mdToast) {
    this.about = {name: 'Welcome to the about page!'};
    this.$mdToast = $mdToast;
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
   this.localStorage.lists.push({listName:'List', list:[]});
   this.todo = this.localStorage.lists[this.localStorage.lists.length - 1];

    this.$mdToast.showSimple('Success, New List Added');

};

MainCtrl.prototype.tabClicked = function (clickedList) {
    this.todo = clickedList;


    this.$mdToast.showSimple('List Clicked');
}
