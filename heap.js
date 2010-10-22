/**
 * This code will hopefully define a fully functional heap
 */

var jfh = jfh || {};
jfh.heap = {};
(function(){
    var h = jfh.heap;
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
     * @param {Array} A The array thats holding the information
     * @param {Number} i An index into the array
     */
    h.maxHeapify = function(/*Array*/ A, /*Number*/ i){
        var l =  h.left(i);
        var r =  h.right(i);
        var heapSize = A.heapSize;
        var largest;
        if( l <= heapSize && A[l] > A[i]){
            largest = l;
        }else{
            largest = i;
        }
        if( r <= heapSize && A[r] > A[largest] ){
            largest = r;
        }
        if( largest != i ){
            var tmp = A[i];
            A[i] = A[largest];
            A[largest] = tmp;
            h.maxHeapify(A, largest);
        }
    };
    /**
     * Procedure goes throught nodes of the tree and runs maxHeapify on each one
     * @param {Array} A the heap to be
     */
    h.buildMaxHeap = function(/*Array*/ A){
        var heapSize = A.length - 1;
        A.heapSize = heapSize;
        for(var i = Math.floor(heapSize/2); i >= 0 ; i--){
            // This is the textbook implementation, but maybe I should figure
            // out how to implement this so that it's indexed from 0...
            h.maxHeapify(A,i);
        }
    };
    /**
      * The algorithm to actually sort an array using heaps
      * @param {Array} A the array to be sorted
      */
    h.heapsort = function(/*Array*/ A){
        h.buildMaxHeap(A);
        var len = A.length - 1;
        for(var i = len; i >= 1; i--){
            // Exchange 1 and i... this isn't confusing at all...
            console.log(A);
            console.log(i);
            var tmp = A[i];
            A[i] = A[0];
            A[0] = tmp;
            console.log(A);
            A.heapSize = A.heapSize - 1;
            h.maxHeapify(A, 0);
        }
    };
    /**
      * The function to get the max element in the heap runs in constant time
      * obviously
      * @param {Array} the heap to extract the max element from
      */
    h.heapMaximum = function(/*Array*/ A){
        // This implementation is indexed from 0
        return A[0];
    };
})();