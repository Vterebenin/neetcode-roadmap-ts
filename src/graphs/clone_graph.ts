import {warn} from 'console';

/**
 * Definition for Node.
 */
class Node {
  val: number;
  neighbors: Node[] | null[];
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

const cloned = new Map<Node, Node>();

function cloneGraph(node: Node | null): Node | null {
  if (!node) {
    return null;
  }

  if (cloned.has(node)) {
    return cloned.get(node)!;
  }

  const newNode = new Node(node.val);
  cloned.set(node, newNode);
  newNode.neighbors = node.neighbors.map(neighbor => cloneGraph(neighbor)!);

  return newNode;
}

export function main() {
  const n1 = new Node(1, []);
  const n2 = new Node(2, []);
  const n3 = new Node(3, []);
  const n4 = new Node(4, []);
  n1.neighbors = [n4, n2];
  n2.neighbors = [n1, n3];
  n3.neighbors = [n2, n4];
  n4.neighbors = [n1, n3];
  const node = cloneGraph(n1);
  console.log(node);
}
