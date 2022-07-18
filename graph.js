class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Graph {
    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList = {

        };
    }
    addVertex(node){
        // const newNode = new Node(node);
        if(!this.adjacentList[node]){
            this.adjacentList[node] = [];
        }else{
            return undefined;
        }
    }
    addEdge(node1, node2){

    }
    showConnections(){
        const allNodes = Object.keys(this.adjacentList);
        for(let node of allNodes){
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections){
                connections += vertex + " ";
            }
            console.log( node + "-->" + connections);
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.showConnections();