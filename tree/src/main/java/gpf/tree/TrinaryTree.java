package gpf.tree;

public class TrinaryTree extends Tree {

	public TrinaryTree() {
		super(); 
	}
	
	public void insertNode(int value) {
		if(root == null) { 
			root = new TrinaryNode(value);
			depth = 1; 
		} else { 
			insertNode((TrinaryNode)root, value); 
			depth++; 
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

	@Override
	void print() {
		int i; 
		
		for(i = 0; i < getDepth(root); i++) { 
			System.out.printf("Level %d: ", i); 
			String str = PrintLevel(root, i);
			System.out.println(str); 
		}
		
	}

	private String PrintLevel(Node node, int level) {
		if(node == null)
			return ""; 
		
		if(level == 0) 
			return String.valueOf(node.getValue()) + " "; 
		
		TrinaryNode triNode = (TrinaryNode) node; 
		String leftString = PrintLevel(triNode.getLeft(), level - 1); 
		String midString = PrintLevel(triNode.getMiddle(), level - 1); 
		String rightString = PrintLevel(triNode.getRight(), level - 1); 
		
		return leftString + midString + rightString; 
	}

	@Override
	public int getDepth(Node node) {
		if(node == null) 
			return 0; 
		
		TrinaryNode triNode = (TrinaryNode) node; 
		int leftDepth = getDepth(triNode.getLeft());
		int midDepth = getDepth(triNode.getMiddle()); 
		int rightDepth = getDepth(triNode.getRight()); 
		
		int max = getMax(leftDepth, midDepth, rightDepth); 
		
		return max+1; 
	}
	
	private int getMax(int leftDepth, int midDepth, int rightDepth) { 
		int max = leftDepth; 
		if(midDepth > rightDepth && midDepth > leftDepth) 
			max = midDepth; 
		
		if(rightDepth > midDepth && rightDepth > leftDepth)
			max = rightDepth; 
		
		return max; 
	}
}
