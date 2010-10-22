(function(){
    var data = {
        data:[25,22,2,3,5,7,4,8,10,13,52,13]
    };
    var heap = new jfh.heap(data);
    console.log(heap);
    console.log(heap.heapsort());
    console.log('Creating New Heap');
    heap = new jfh.heap(data);
    console.log('Heap Created');
    console.log('Adding Two elements to the heap');
    heap.insert(43);
    heap.insert(59);
    console.log(heap.data);
    console.log('Adding new max element.');
    heap.insert(100);
    console.log(heap.data);
    console.log('Extracting two elements');
    console.log(heap.extractMax());
    console.log(heap.extractMax());
    console.log(heap.data);
    console.log('Extracting remaining elements');
    var max;
    while(max = heap.extractMax()){
        console.log(max);
    }
    console.log('Done Extracting');
})();