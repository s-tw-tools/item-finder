let DataStorage = (function(){
    let data; 

    function loadData() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
          
        fetch("https://s-tw-tools.github.io/item-finder/items_en_DK.json", requestOptions)
            .then(response => response.json())
            .then(result => {data = result})
            .catch(error => console.log('error', error));
    }
    
    return {
      getData: function(){
        if (!data) {
          data = new loadData();
        }
        while(!data)
        return data;
      }
    };
})();
