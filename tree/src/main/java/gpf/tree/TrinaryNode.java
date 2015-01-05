package gpf.tree;

public class TrinaryNode extends Node {
	
	Node left; 
	Node middle; 
	Node right; 

	public TrinaryNode(int value) {
		super(value);
	}

	public TrinaryNode(int value, Node left, Node middle, Node right) {
		super(value); 
		this.left = left; 
		this.middle = middle; 
		this.right = right; 
	}
	
	public Node getRight() { 
		return this.right; 
	}
	
	public Node getLeft() { 
		return this.left; 
	}
	
	public Node getMiddle() { 
		return this.middle; 
	}

	public void setRight(TrinaryNode trinaryNode) {
		this.right = trinaryNode; 
	}

	public void setLeft(TrinaryNode trinaryNode) {
		this.left = trinaryNode; 
	}

	public void setMiddle(TrinaryNode trinaryNode) {
		this.middle = trinaryNode; 
	}
	
	
	
}
