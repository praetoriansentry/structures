var jfh = jfh || {};
(function(){
    /**
     * This is a node that can be used in a linked list or a tree
     * @param {Object} obj the object thats stored.  Could be anything.
     * @param {Number} key 
     */
    function Node(obj,key){
        this.prev = null;
        this.key = key;
        this.nxt = null;

        this.obj = obj;
        this.isNode = true;
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
        if(this.nxt){
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
        this.keyCount = 0;
        var start = start || [];
        this.head = null;
        var len = start.length;
        for(var i = 0; i < len; i++){
            this.insert(new Node(start[i], i));
        }
    };
    /**
     * Finds the first element with key k in the list by doing a linear search
     * @param {Number} k the key to find
     * @return {Object} a pointer to the element in the list
     */
    LinkedList.prototype.search = function(k){
        var x = this.head;
        while(x != null && x.key != k){
            x = x.nxt;
        }
        return x;
    };
    /**
     * Used to insert a node into an list
     * @param {Object} x the node to insert into the list
     */
    LinkedList.prototype.insert = function(x){
        x = this.getNode(x);
        x.nxt = this.head;
        if(this.head != null){
            this.head.prev = x;
        }
        this.head = x;
        x.prev = null;
        this.keyCount++;
    };
    /**
     * Takes in anything an returns the node version of it
     * @param {Object} a anything
     * @return {Node} a node holding the anything
     */
    LinkedList.prototype.getNode = function(a){
        var node;
        if(a.isNode){
            return a;
        }else{
            if(typeof a == 'number'){
                node = new Node({},a);
            }else{
                node = new Node(a,this.keyCount);
            }
            return node;
        }
    };
    /**
     * Used to delete a node from a list
     * @param {Node} x the node to be deleted from the list
     */
    LinkedList.prototype.delete = function(x){
        x = this.getNode(x);
        if(x.prev != null){
            x.prev.nxt = x.nxt;
        }else{
            this.head = x.nxt;
        }
        if(x.nxt != null){
            x.nxt.prev = x.prev;
        }
    };
    jfh.LinkedList = LinkedList;
    jfh.Node = Node;
})();
