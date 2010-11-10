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
    console.log('Testing heap with objects and custom comparision');
    var props = {
        data:[
            {num:3,str:'three'},
            {num:9,str:'nine'},
            {num:12,str:'twelve'},
            {num:43,str:'forty three'},
            {num:10,str:'ten'},
            {num:11,str:'eleven'},
            {num:16,str:'sixteen'},
            {num:38,str:'thirty eight'},
            {num:19,str:'ninteen'}
        ],
        comparator:function(a, b){
            if(a.num > b.num){
                return true;
            }else{
                return false;
            }
        }
    }
    var objHeap = new jfh.heap(props);
    console.log(objHeap);
    console.log('Heap Created');
    console.log('Sorting Heap');
    console.log(objHeap.heapsort());
    console.log('Heap Sorted');
    console.log('Extracting remaining elements');
    var max;
    while(max = objHeap.extractMax()){
        console.log(max);
    }
    console.log('Done Extracting');
})();
