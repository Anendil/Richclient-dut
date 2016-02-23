angular.module("myApp4").controller("CurrencyController",['$http', function($http) {
    var self = this;

    $http.get('data/currencymap.json').
    success(function(data) {
        self.currencies = data;
        self.from = self.currencies.EUR;
        self.to = self.currencies.USD;
    }).
    error(function(data, status) {
        console.log("Erreur avec le statut Http : "+status);
    });

    self.what = 1;

    self.getResult = function(){
        $http.jsonp('http://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from.code+'_'+self.to.code+'&callback=JSON_CALLBACK').
        success(function(data) {
            self.result = data[self.from.code+'_'+self.to.code].val;
            self.result = self.result * self.what;
        });
    };
}]);