
var veront_model = {

  repositories: [],
  intprop: 0
}


function newLocalRepository() {
  newRepositoryStructure();
}

function newRepositoryStructure() {
  var newrep = {
    name:"New Repository"
  }

  veront_model.repositories.push(newrep);
  return newrep;
}
