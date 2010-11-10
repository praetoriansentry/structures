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
    console.log('Done testing extract max');
    // Test insert
    console.log('Testing insert');
    var inserts = [];
    jfh.heap.buildMaxHeap(inserts);
    jfh.heap.heapInsert(inserts,15);
    console.log(inserts);
    jfh.heap.heapInsert(inserts,1);
    console.log(inserts);
    jfh.heap.heapInsert(inserts,3);
    console.log(inserts);
    jfh.heap.heapInsert(inserts,48);
    console.log(inserts);
    jfh.heap.heapInsert(inserts,4);
    console.log(inserts);
    jfh.heap.heapInsert(inserts,32);
    console.log(inserts);
    jfh.heap.heapInsert(inserts,85);
    console.log(inserts);
    jfh.heap.heapInsert(inserts,67);
    console.log(inserts);
    jfh.heap.heapInsert(inserts,97);
    console.log(inserts);
    jfh.heap.heapInsert(inserts,81);
    console.log(inserts);
    jfh.heap.heapInsert(inserts,56);
    console.log(inserts);
})();