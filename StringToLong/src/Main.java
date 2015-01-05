import java.util.Scanner;

import Util.StringUtil;

public class Main {

	public static void main(String[] args) {
		System.out.println("Welcome."); 
		String input = null; 
		Scanner scanner = new Scanner(System.in); 
		while(true) { 
			System.out.println("Enter a string: "); 
			input = scanner.nextLine(); 
			long value = StringUtil.stringToLong(input); 
		}
	}

}
