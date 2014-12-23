package gpf.tree;

import static org.mockito.Mockito.mock;

import org.junit.Test;

public class TrinaryNodeTest {

	@Test
	public void testGetChildren() { 
		Node leftChild = mock(Node.class); 
		Node middleChild = mock(Node.class); 
		Node rightChild = mock(Node.class); 
		Node node = new TrinaryNode(1, leftChild, middleChild, rightChild); 
	}
}
