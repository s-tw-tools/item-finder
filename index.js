let DataStorage = (function(){
    function DataStore() {
        this.data = undefined;
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        this.sortItemsBySkill = function(skillName){
            this.data = this.data.sort(function(a,b){
                let valueOfA = a.bonus.item.find(function(bonusItem){
                    if(bonusItem.bonus != undefined)
                        return(bonusItem.bonus.name == skillName)
                })
                let valueOfB = b.bonus.item.find(function(bonusItem){
                    if(bonusItem.bonus != undefined)
                        return(bonusItem.bonus.name == skillName)
                })
                return ((valueOfA == undefined) ? 0 : valueOfA.bonus.value) - ((valueOfB == undefined) ? 0 : valueOfB.bonus.value); 
            }).reverse()
            return this.data;
        }
  
        fetch("https://s-tw-tools.github.io/item-finder/items_en_DK.json", requestOptions)
            .then(response => response.json())
            .then(result => {this.data = result})
            .catch(error => console.log('error', error));
    }
  
    let instance;
  
    return {
      getDataStorage: function(){
        if (!instance) {
          instance = new DataStore();
          delete instance.constructor;
        }
        return instance;
      }
    };
})();
DataStorage.getDataStorage();
