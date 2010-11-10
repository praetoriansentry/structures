var jfh = jfh || {};
(function(){
    /**
     * This is a node that can be used in a linked list or a tree
     * @param {Object} obj the object thats stored.  Could be anything.
     * @param {Object} prev a pointer to the previous node
     * @param {Object} next a pointer to the next node
     * @param {Number} key 
     */
    function Node(obj,prev,next,key){
        this.prev = prev;
        this.key = key;
        this.next = next;
        this.obj = obj;
    };
    /**
     * Function to determine if a node is the head of the array
     * @return {Boolean} true if this node is the head of the array
     */
    Node.prototype.isHead = function(){
        if(this.prev){
            return false;
        }else{
            return true;
        }
    };
    /**
     * Function to determine if a node is the tail of the array
     * @return {Boolean} true if this node is the tail of the array
     */
    Node.prototype.isTail = function(){
        if(this.next){
            return false;
        }else{
            return true;
        }
    };
    /**
     * Contructor for the linked list object
     * @param {Array} start an array to build the linked list from
     */
    function LinkedList(start){
        this.head = null;
    };
    /**
     * Finds the first element with key k in the list by doing a linear search
     * @param {Number} k the key to find
     * @return {Object} a pointer to the element in the list
     */
    LinkedList.prototype.search = function(k){
        var x = this.head;
        while(x != null and x.key != k){
            x = x.next;
        }
        return x;
    };
    /**
     * Used to insert a node into an list
     * @param {Node} x the node to insert into the list
     */
    LinkedList.prototype.insert = function(x){
        x.next = this.head;
        if(this.head != null){
            this.head.prev = x;
        }
        this.head = x;
        x.prev = null;
    };
    /**
     * Used to delete a node from a list
     * @param {Node} x the node to be deleted from the list
     */
    LinkedList.prototype.delete = function(x){
        if(x.prev != null){
            x.prev.next = x.next;
        }else{
            this.head = x.next;
        }
        if(x.next != null){
            x.next.prev = x.prev;
        }
    };
    jfh.LinkedList = LinkedList;
    jfh.Node = Node;
})();
