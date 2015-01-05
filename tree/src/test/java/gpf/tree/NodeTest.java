package gpf.tree;

import static org.junit.Assert.*;

import org.junit.Test;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

public class NodeTest {

	@Test
	public void testCreateNodeWithValue() { 
		Node node = new Node(1); 
		assertTrue(1 == node.getValue()); 
	}
}
