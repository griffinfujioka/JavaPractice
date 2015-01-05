package gpf.tree;

public class TrinaryTree implements Tree {
	private TrinaryNode root;

	public void insertNode(int value) {
		if(root == null) { 
			root = new TrinaryNode(value);
		} else { 
			insertNode(root, value); 
		}
	}

	private void insertNode(TrinaryNode node, int value) {
		if(node.getValue() < value) { 
			if(node.getRight() != null) { 
				insertNode((TrinaryNode)node.getRight(), value); 
			} else { 
				node.setRight(new TrinaryNode(value));
			}
		} else if(node.getValue() > value) { 
			if(node.getLeft() != null) { 
				insertNode((TrinaryNode)node.getLeft(), value); 
			} else { 
				node.setLeft(new TrinaryNode(value)); 
			}
		} else { 
			if(node.getMiddle() != null) {
				insertNode((TrinaryNode)node.getMiddle(), value); 
			} else {
				node.setMiddle(new TrinaryNode(value));
			}
		}
	}

	public void deleteNode(Node node) {
		// TODO Auto-generated method stub
		
	} 
}
