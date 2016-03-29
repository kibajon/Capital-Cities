
app.controller("PageController", function($scope,$http){
    $scope.showOrno=false;
    var words=[];
    function searchCountry (country){
        console.log(country,countries);
        var lowLet=country.toLowerCase();
        $scope.words = countries[lowLet];
        $scope.showOrno=($scope.words!=undefined);   
    };    
    $scope.inputChange=function(){
        searchCountry(this.countryName);
    }
});