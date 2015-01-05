package gpf.tree;

public class Node {
	Integer value; 
	
	public Node(Integer value) throws Exception { 
		if(value == null) 
			throw new Exception("Invalid value"); 
		
		this.value = value; 
	}
	
	public int getValue() { 
		return value; 
	}
}
