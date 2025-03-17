
// Užduotis 2: Asinchroninis sąrašo apdorojimas

document.addEventListener("DOMContentLoaded", () => {
    function processList(list, callback) {
        let results = [];
        
        function processItem(index) {
            if (index >= list.length) {
                callback(results);
                return;
            }
            
            setTimeout(() => {
                results.push(list[index] * 2);
                processItem(index + 1);
            }, 1000);
        }
        
        processItem(0);
    }
    
    function showResults(finalList) {
        console.log("Processed List:", finalList);
    }
    
    processList([1, 2, 3, 4, 5], showResults);
})
