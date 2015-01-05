package gpf.tree;

public abstract class Tree {
	protected Node root;
	
	protected int depth; 
	
	public Tree() { 
		root = null; 
		depth = 0; 
	}
	
	public void printMenu() {
		System.out.println(" -- Trinary Tree Menu --"); 
		System.out.println("\t1. Insert node");
		System.out.println("\t2. Delete node");
		System.out.println("\t3. Print tree");
	} 
	
	public abstract int getDepth(Node node); 
	
	abstract void insertNode(int value);
	
	abstract void deleteNode(int value);
	
	abstract void print(); 
	
	
}
