export class HomeController{
    constructor($scope){
        console.log($scope);
        this.scope = $scope;
        this.scope.title = "Boilerplate!";
    }
}