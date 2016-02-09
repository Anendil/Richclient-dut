angular.module("myApp2").controller("myController",[function(){

    this.etatButton="";

    this.services = [
        {
            name: 'Web Development',
            price: 300,
            active:true
        },{
            name: 'Design',
            price: 400,
            active:false
        },{
            name: 'Integration',
            price: 250,
            active:false
        },{
            name: 'Formation',
            price: 220,
            active:false
        }
    ];

    this.isActive= function(boolean){
        if(boolean) {
            this.etatButton = "btn btn-primary";
            return this.etatButton;
        }
        else{
            this.etatButton="btn btn-default";
            return this.etatButton;
        }
    }

    this.toggleActive = function(s){
        isActive(s.active);
        s.active =  !s.active;
    }

}]);