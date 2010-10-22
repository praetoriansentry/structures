(function(){
    // Anonymous function for testing
    //Test heap sort
    var testArray = [5,13,2,25,7,17,20,8,4]; // From CLRS
    console.log('Initialized Test Array');
    console.log(testArray);
    console.log('Sorting Test Array');
    jfh.heap.heapsort(testArray);
    console.log(testArray);
    console.log('Done Testing Heap Sort');
    // Test extract max
    var extractMax = [25,18,17,13,12,4,8,6,89,42,67,43];
    console.log('Building Max Heap')
    jfh.heap.buildMaxHeap(extractMax);
    console.log('Heap Created');
    console.log('Extracting Elements');
    console.log(jfh.heap.extractMax(extractMax));
    console.log(jfh.heap.extractMax(extractMax));
    console.log(jfh.heap.extractMax(extractMax));
    console.log(jfh.heap.extractMax(extractMax));
    console.log(jfh.heap.extractMax(extractMax));
    console.log(jfh.heap.extractMax(extractMax));
    console.log(jfh.heap.extractMax(extractMax));
    console.log(jfh.heap.extractMax(extractMax));
    console.log(jfh.heap.extractMax(extractMax));
    console.log(jfh.heap.extractMax(extractMax));
    console.log(jfh.heap.extractMax(extractMax));
    console.log(jfh.heap.extractMax(extractMax));
    console.log(jfh.heap.extractMax(extractMax));
})();