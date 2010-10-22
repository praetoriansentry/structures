(function(){
    var data = {
        data:[25,22,2,3,5,7,4,8,10,13,52,13]
    };
    var heap = new jfh.heap(data);
    console.log(heap);
    console.log(heap.heapsort());
})();