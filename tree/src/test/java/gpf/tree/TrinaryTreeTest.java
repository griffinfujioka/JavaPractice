package gpf.tree;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.junit.Before;
import org.junit.Test;

public class TrinaryTreeTest {
	
	TrinaryTree tree; 
	
	@Before
	public void before() { 
		tree = new TrinaryTree(); 
	}

	@Test
	public void testCreateTrinaryTree() { 
		assertEquals(0, tree.getDepth(tree.getRoot()));
	}
	
	@Test
	public void testInsertNodeIntoEmptyTree() throws Exception { 
		tree.insertNode(4);
		assertEquals(4, tree.getRoot().getValue());
		assertEquals(1, tree.getDepth(tree.getRoot()));
	}
	
	@Test
	public void testInsertNodeLessThanRoot() throws Exception { 
		tree.insertNode(4);
		tree.insertNode(2);
		TrinaryNode triNode = (TrinaryNode) tree.getRoot(); 
		assertEquals(4, tree.getRoot().getValue());
		assertEquals(2, tree.getDepth(tree.getRoot()));
		assertEquals(2, triNode.getLeft().getValue());
		assertEquals(null, triNode.getMiddle()); 
		assertEquals(null, triNode.getRight()); 
	}
	
	@Test
	public void testInsertNodeEqualToRoot() throws Exception { 
		tree.insertNode(4);
		tree.insertNode(4);
		TrinaryNode triNode = (TrinaryNode) tree.getRoot(); 
		assertEquals(4, tree.getRoot().getValue());
		assertEquals(2, tree.getDepth(tree.getRoot()));
		assertEquals(4, triNode.getMiddle().getValue());
		assertEquals(null, triNode.getLeft()); 
		assertEquals(null, triNode.getRight()); 
	}
	
	@Test
	public void testInsertNodeGreaterThanRoot() throws Exception { 
		tree.insertNode(4);
		tree.insertNode(7);
		TrinaryNode triNode = (TrinaryNode) tree.getRoot(); 
		assertEquals(4, tree.getRoot().getValue());
		assertEquals(2, tree.getDepth(tree.getRoot()));
		assertEquals(7, triNode.getRight().getValue());
		assertEquals(null, triNode.getLeft()); 
		assertEquals(null, triNode.getMiddle()); 
	}
	
	@Test
	public void testDeleteNodeFromEmptyTree() { 
		tree.deleteNode(4);
		assertTrue(null == tree.getRoot());
	}
	
	@Test
	public void testDeleteRootNode() throws Exception { 
		tree.insertNode(4);
		assertEquals(4, tree.getRoot().getValue());
		assertEquals(1, tree.getDepth(tree.getRoot()));
		tree.deleteNode(4);
		assertEquals(null, tree.getRoot());
		assertEquals(0, tree.getDepth(tree.getRoot()));
	}
	
	@Test
	public void testDeleteLeftChild() throws Exception { 
		tree.insertNode(4);
		tree.insertNode(2);
		TrinaryNode triNode = (TrinaryNode) tree.getRoot(); 
		assertEquals(4, tree.getRoot().getValue());
		assertEquals(2, tree.getDepth(tree.getRoot()));
		assertEquals(2, triNode.getLeft().getValue());
		assertEquals(null, triNode.getMiddle()); 
		assertEquals(null, triNode.getRight()); 
		tree.deleteNode(2);
		assertEquals(4, tree.getRoot().getValue());
		assertEquals(1, tree.getDepth(tree.getRoot()));
		assertEquals(null, triNode.getLeft());
		assertEquals(null, triNode.getMiddle()); 
		assertEquals(null, triNode.getRight()); 
	}
	
	@Test
	public void testDeleteMiddleChild() throws Exception { 
		tree.insertNode(4);
		tree.insertNode(4);
		TrinaryNode triNode = (TrinaryNode) tree.getRoot(); 
		assertEquals(4, tree.getRoot().getValue());
		assertEquals(2, tree.getDepth(tree.getRoot()));
		assertEquals(4, triNode.getMiddle().getValue());
		assertEquals(null, triNode.getLeft()); 
		assertEquals(null, triNode.getRight()); 
		tree.deleteNode(4);
		assertEquals(4, tree.getRoot().getValue());
		assertEquals(1, tree.getDepth(tree.getRoot()));
		assertEquals(null, triNode.getLeft());
		assertEquals(null, triNode.getMiddle()); 
		assertEquals(null, triNode.getRight());
	}
	
	@Test
	public void testDeleteRightChild() throws Exception { 
		tree.insertNode(4);
		tree.insertNode(7);
		TrinaryNode triNode = (TrinaryNode) tree.getRoot(); 
		assertEquals(4, tree.getRoot().getValue());
		assertEquals(2, tree.getDepth(tree.getRoot()));
		assertEquals(7, triNode.getRight().getValue());
		assertEquals(null, triNode.getLeft()); 
		assertEquals(null, triNode.getMiddle()); 
		tree.deleteNode(7);
		assertEquals(4, tree.getRoot().getValue());
		assertEquals(1, tree.getDepth(tree.getRoot()));
		assertEquals(null, triNode.getLeft());
		assertEquals(null, triNode.getMiddle()); 
		assertEquals(null, triNode.getRight());
	}
}
