package gpf.tree;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;

import org.junit.Test;

public class TrinaryNodeTest {

	@Test
	public void testGetChildren() throws Exception { 
		Node leftChild = mock(Node.class); 
		Node middleChild = mock(Node.class); 
		Node rightChild = mock(Node.class); 
		TrinaryNode node = new TrinaryNode(1, leftChild, middleChild, rightChild); 
		assertEquals(leftChild, node.getLeft());
		assertEquals(middleChild, node.getMiddle()); 
		assertEquals(rightChild, node.getRight()); 
	}
}
