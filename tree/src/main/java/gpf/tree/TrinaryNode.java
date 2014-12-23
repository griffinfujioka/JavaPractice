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
	
	
	
}
