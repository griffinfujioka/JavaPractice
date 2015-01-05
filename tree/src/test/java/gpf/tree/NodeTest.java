package gpf.tree;

import static org.junit.Assert.*;

import org.junit.Test;

public class NodeTest {

	@Test
	public void testCreateNodeWithValue() throws Exception { 
		Node node = new Node(1); 
		assertTrue(1 == node.getValue()); 
	}
	
	@Test(expected = Exception.class)
	public void testCreateNodeWithNullValue() throws Exception { 
		new Node((Integer)null); 
	}
}
