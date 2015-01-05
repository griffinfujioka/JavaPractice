package gpf.tree;

public class TrinaryTree extends Tree {

	public TrinaryTree() {
		super(); 
	}
	
	public void insertNode(int value) throws Exception {
		if(root == null) { 
			root = new TrinaryNode(value);
			depth = 1; 
		} else { 
			insertNode((TrinaryNode)root, value); 
			depth++; 
		}
	}

	private void insertNode(TrinaryNode node, int value) throws Exception {
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

	public void deleteNode(int value) {
		root = deleteNode(root, value);
	}

	private Node deleteNode(Node node, int value) {
		if(node == null)
			return null;
		
		TrinaryNode triNode = (TrinaryNode)node; 
		if(node.getValue() == value) { 
			// all children are null
			if(triNode.getLeft() == null &&
					triNode.getMiddle() == null &&
					triNode.getRight() == null) { 
				return null;
			}
			
			if(triNode.getMiddle() != null) { 
				triNode.setMiddle((TrinaryNode)deleteNode(triNode.getMiddle(), value));
			} else { 
				if(triNode.getLeft() != null && triNode.getRight() != null) {
					// both right and left children exist
					TrinaryNode successor = findSuccessor((TrinaryNode)triNode.getRight()); 
					triNode.setValue(successor.getValue()); 
					triNode.setRight((TrinaryNode)deleteNode(triNode.getRight(), successor.getValue())); 
				} else if(triNode.getLeft() != null) { 
					// right child is empty
					return triNode.getLeft(); 
				} else if(triNode.getRight() != null) { 
					// left child is empty
					return triNode.getRight(); 
				}
			}
		} else if(node.getValue() < value) { 
			triNode.setRight((TrinaryNode)deleteNode(triNode.getRight(),value));
		} else {
			triNode.setLeft((TrinaryNode)deleteNode(triNode.getLeft(), value)); 
		}
		
		return triNode; 
	}

	private TrinaryNode findSuccessor(TrinaryNode node) {
		if(node.getLeft() == null)
			return node; 
		
		return findSuccessor((TrinaryNode)node.getLeft());
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
