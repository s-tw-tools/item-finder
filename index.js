let DataStorage = (function(){
    function DataStore() {
        this.data = undefined;
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
  
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
