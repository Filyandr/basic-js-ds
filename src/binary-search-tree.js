const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = addData(this.rootTree, data);

    function addData(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data == data) {
        return node;
      }

      if (data > node.data) {
        node.right = addData(node.right, data);
      } else {
        node.left = addData(node.left, data);
      }
      return node;
    }
  }

  has(data) {
    return checkData(this.rootTree, data);

    function checkData(node, data) {
      if(!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return checkData(node.left, data);
      }
      if (data > node.data) {
        return checkData(node.right, data);
      }
  }
}

  find(data) {
    return findData(this.rootTree, data);

    function findData(node, data) {
      if(!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return findData(node.left, data);
      }
      if (data > node.data) {
        return findData(node.right, data);
      }
  }
}

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if(!this.rootTree) {
      return;
    }
    let currentNode = this.rootTree;
    while (currentNode.left) {
      currentNode = currentNode.left;
    } return currentNode.data;
  }

  max() {
    if(!this.rootTree) {
      return;
    }
    let currentNode = this.rootTree;
    while (currentNode.right) {
      currentNode = currentNode.right;
    } return currentNode.data;
  }
}


module.exports = {
  BinarySearchTree
};