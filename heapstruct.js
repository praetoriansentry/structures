var jfh = jfh || {};
(function(){
    /**
     * Constructor
     * @param {Object} props An object with all of the fields to initialize
     * the heap
     */
    function heap(/*Object*/ props){
        function defaultCompare(a,b){
            if(a > b){
                return true;
            }else{
                return false;
            }
        }
        props = props || {};
        this.data = props.data || [];
        this.comparator = props.comparator || defaultCompare;
        this.buildMaxHeap();
    }
    var h = heap.prototype;
    h.heapSize = 0;// The heapsize property.  Different than length
    h.data = [];// The actual array that holds the heap representation
    /**
     * Function to find the parent of a node at possition i
     * @param {Number} i the index of the node in the heap
     */
    h.parent = function(/*Number*/ i){
        return Math.ceil(i/2) - 1;
    };
    /**
     * Function to get the left sub tree of the node at position i
     * @param {Number} i the index of the node in the heap
     */
    h.left = function(/*Number*/ i){
        return (2*(i+1))-1;
    };
    /**
     * Function to get the right sub tree of the node at position i
     * @param {Number} i the index of the node in the heap
     */
    h.right = function(/*Number*/ i){
        return (2*(i+1));
    };
    /**
     * Basic function to make sure the heaps stay in order
     * @param {Number} i An index into the array
     */
    h.maxHeapify = function(/*Number*/ i){
        var A = this.data;
        var l =  this.left(i);
        var r =  this.right(i);
        var heapSize = A.heapSize;
        var largest;
        if( l <= heapSize && this._compareElements(l,i)){
            largest = l;
        }else{
            largest = i;
        }
        if( r <= heapSize && this._compareElements(r,largest)){
            largest = r;
        }
        if( largest != i ){
            var tmp = A[i];
            A[i] = A[largest];
            A[largest] = tmp;
            this.maxHeapify(largest);
        }
    };
    /**
     * This function figures out what which of the two arugments is bigger
     * @param {Number} a the INDEX of the first element
     * @param {Number} b the INDEX of the second element element
     * @return {Boolean} true if the element at a is greater than the
     * element at position b.  false otherwise
     */
     h._compareElements = function(a,b){
         return this.comparator(this.data[a], this.data[b]);
     };

    /**
     * Procedure goes throught nodes of the tree and runs maxHeapify on each one
     */
    h.buildMaxHeap = function(){
        var heapSize = this.data.length - 1;
        this.data.heapSize = heapSize;
        for(var i = Math.floor(heapSize/2); i >= 0 ; i--){
            // This is the textbook implementation, but maybe I should figure
            // out how to implement this so that it's indexed from 0...
            this.maxHeapify(i);
        }
    };
    /**
     * The algorithm to actually sort an array using heaps this implementation
     * of heapsort is destructive to the internal heap property
     */
    h._heapsort = function(){
        var A = this.data;
        this.buildMaxHeap();
        var len = A.length - 1;
        for(var i = len; i >= 1; i--){
            // Exchange 1 and i... this isn't confusing at all...
            var tmp = A[i];
            A[i] = A[0];
            A[0] = tmp;
            A.heapSize = A.heapSize - 1;
            this.maxHeapify(0);
        }
        return this.data;
    };
    /**
     * Function to clone the data in the array
     */
    h._cloneArray = function(){
        var newArray = [];
        var d = this.data;
        var len = d.length;
        for(var i = 0; i < len; i++){
            newArray[i] = d[i];
        }
        return newArray;
    };
    /**
     * This is the safer version of heap sort.  The idea is that it makes a copy
     * of the heap and then
     *
     */
    h.heapsort = function(){
        var tmpHeap = new heap({data:this._cloneArray(),
            comparator:this.comparator});
        return tmpHeap._heapsort();
    };
    /**
     * The function to get the max element in the heap runs in constant time
     * obviously
     */
    h.maximum = function(){
        // This implementation is indexed from 0
        return this.data[0];
    };
    /**
     * The point of this functino is to actually remove the max element from
     * the heap.  So if you are using it like a queue of some kind you can
     * easily pop off elements
     */
    h.extractMax = function(){
        var A = this.data;
        if(A.heapSize < 0){
            return undefined;//Error('Heap Underflow');
        }
        var max = this.maximum();
        A[0] = A[A.heapSize];
        A.heapSize = A.heapSize - 1;
        this.maxHeapify(0);
        return max;
    };
    /**
     * The increase key function.  Could be used for a queue as well
     * @param {Number} i the index of the element whose key we are increasing
     * @param {Number} key the key actual key
     */
    h.increaseKey = function(/*Number*/ i, /*Number*/ key){
        var A = this.data;
        if( key < A[i] ){
            return Error('New Key is smaller than current key');
        }
        A[i] = key;
        while(i > 0 && A[this.parent(i)] < A[i]){
            var tmp = A[i];
            A[i] = A[this.parent(i)];
            A[this.parent(i)] = tmp;
            i = this.parent(i);
        }
    };
    /**
     * Inserts the given key into the heap
     * @param {Number} key The key to be inserted
     */
    h.insert = function(/*Number*/ key){
        var A = this.data;
        A.heapSize = A.heapSize + 1;
        A[A.heapSize] = -Infinity;
        this.increaseKey(A.heapSize, key);
    };    
    // Now lets give this variable a position in the jfh namspace
    jfh.heap = heap;
})();
