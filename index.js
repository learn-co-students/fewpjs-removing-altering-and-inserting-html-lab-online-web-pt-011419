// Write your code here!

let node = document.getElementById('main');
if (node.parentNode) {
  node.parentNode.removeChild(node)
}

const newHeader = document.createElement("h1");
newHeader.id = 'victory'
newHeader.innerHTML = "Tanzima is the champion"
