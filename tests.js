(function(){
    // Anonymous function for testing
    var testArray = [5,13,2,25,7,17,20,8,4]; // From CLRS
    console.log('Initialized Test Array');
    console.log(testArray);
    console.log('Sorting Test Array');
    jfh.heap.heapsort(testArray);
    console.log(testArray);
    console.log('Done Testing Heap Sort');
})();