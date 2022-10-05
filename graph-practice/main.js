/*
A graph is a data structure that shares similar elements with a binary tree.
The graph consists of vertices (also referred to as nodes; data) and edges, which are
lines or arcs connecting any two vertices (nodes) in a graph.
In conclusion a graph is composed of a set of vertices (V) and a set of edges (E) -
G(E,V).
Graphs can be directed or undirected. If edges have directions between vertices they are part of a directed graph - think
Webpages. Whereas undirected graphs are like social networks.
And that's what graphs manily represent - networks. 
Graphs can be represented in various ways for example:
Adjacency Matrix
Adjacency List
Incidende Matrix and more...
*/

import { Queue } from "./queue.js";

//Implementation of a graph

//Using class
class Graph { // undirected graph
    constructor(numOfVertices){
        this.numOfVertices = numOfVertices
        this.AdjList = new Map();
        /*Map() holds key-value pairs and remembers the original insertion order of keys.
        The Map() stores key-value pairs like an Array.*/
    }
    // addVertex will add vertex v as key to AdjList and initialize its values with an array
    addVertex(v) {
        this.AdjList.set(v, []) // initialize with null array
    }

    // addEdge will add an edge between two nodes src(v) and dest(w)
    addEdge(v, w) {
        this.AdjList.get(v).push(w) // get the list of v and put w as edge between v and w
        this.AdjList.get(w).push(v) // graph is undirected - add edge from w to v
    }

    // printGraph prints vertices and their adjacency list
    printGraph() {
        // get all vertices
        let get_keys = this.AdjList.keys()
        // iterate over the vertices
        for (let i of get_keys) {
            // get adjacency list for the vertex
            let get_values = this.AdjList.get(i)
            let conc = ''

            // iterate over the adjacency list
            // concatenate the values into a string
            for (let j of get_values) {
                conc += j + ' '
                console.log(i + ' -> ' + conc)
            }
        }
    }
    
    // Graph traversal
    //Breadth first traversal
    bfs(startingNode) {
        let visited = {} // tracks visited obj
        let q = new Queue() // new queue obj

        visited[startingNode] = true 
        q.enQ(startingNode)

        while(!q.isEmpty()){
            let getQElement = q.dQ()
            console.log(getQElement)

            let get_List = this.AdjList.get(getQElement)

            for (let i in get_List) {
                let next = get_List[i]
                if(!visited[next]){
                    visited[next] = true
                    q.enQ(next)
                }
            }
        }
    }

    //Depth first traversal
    dfs(startingNode) {
        let visited = {}
        this.DFSUtil(startingNode, visited)
    }

    DFSUtil(vert, visited) {
        visited[vert] = true
        console.log(vert)

      let  get_next = this.AdjList.get(vert)

        for (let i in get_next) {
            let get_elem = get_next[i]
            if (!visited[get_elem]){
                this.DFSUtil(get_elem, visited)
            }
        }
    }

}

// Create a new graph
let vertices = ['a', 'b', 'c', 'd', 'e', 'f']
const g = new Graph(vertices.length)

for (let i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i])
}
g.addEdge('a', 'b')
g.addEdge('b', 'e')
g.addEdge('c', 'f')
g.addEdge('d', 'e')
g.printGraph()
console.log(g.AdjList)
console.log('BFS')
g.bfs('a')
console.log('DFS')
g.dfs('a')









//// Addition to Map()

// Create new map with array of arrays
const map = new Map([
    ['First', 'Value1'],
    ['Second', 'Value2'],
    ['Third', 'Value3'],
])
// console.log(map)

// Object literal
const boy = {
    firstName: 'Joshua',
    lastName: 'Kimmich',
    occupation: 'Hurensohn'
}

// Create Map from object entries
// Object.entries(obj) creates an array
const map2 = new Map(Object.entries(boy))
// console.log(map2)

// Create an object from a map
const map3 = Object.fromEntries(map2)
// console.log(map3)

// Create an array from map
const arr = Array.from(map2)
// console.log(arr)

// Create a map from array
const map4 = new Map(arr)
// console.log(map4)