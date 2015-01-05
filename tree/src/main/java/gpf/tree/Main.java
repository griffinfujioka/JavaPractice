package gpf.tree;

import java.util.Scanner;

/**
 * 
 *
 */
public class Main 
{
    public static void main( String[] args )
    {
        System.out.println( "Welcome to Griffin's Trinary Tree program!" );
        String input = ""; 
        Scanner in = new Scanner(System.in); 
        int menuChoice; 
        int value;
        TrinaryTree tree = new TrinaryTree(); 
        
        while(!input.equals("quit")) { 
        	tree.printMenu(); 
        	menuChoice = in.nextInt(); 
        	switch(menuChoice) { 
	        	case 1: 
	        		System.out.println("Enter the value to insert: "); 
	        		value = in.nextInt(); 
	        		tree.insertNode(value);
	        		break; 
	        	case 2: 
	        		System.out.println("Enter the value to delete: "); 
	        		value = in.nextInt(); 
	        		tree.deleteNode(value);
	        		break; 
	        	case 3: 
	        		tree.print();
	        		break; 
	        	default:
	        		break;
        	}
        	
        	tree.print();
        }
        
        System.out.println("Goodbye!");
    }
}
