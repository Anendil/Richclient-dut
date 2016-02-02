angular.module("myApp").controller("myController",[function(){
    this.messageNote="";
    this.showinfo = false;

    this.count=function(){
        return 100 - this.messageNote.length;
    };

    this.color=function(){
        if(100 - this.messageNote.length < 20){
            return 'danger';
        }
        else if(100 - this.messageNote.length < 50){
            return 'warning';
        }
        else
            return 'info';
    };

    this.clear=function(){
        this.showinfo = true;
        this.messageNote="";
    }

}]);