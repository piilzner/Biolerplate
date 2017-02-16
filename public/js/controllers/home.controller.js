export class HomeController{
    constructor($scope){
        console.log($scope);
        this.scope.title = "Piilzners Boilerplate!";
        this.scope.desc = "Ground zero for your next AngularJS project.";
    }
}
