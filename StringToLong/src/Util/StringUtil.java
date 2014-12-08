package Util;

public class StringUtil {

	public static long stringToLong(String str) { 
		if(str == null || str.isEmpty())
			throw new NumberFormatException("Invalid input"); 
		
		boolean isNegative = str.charAt(0) == '-'; 
		str = str.replace("-", ""); 
		int i = 0; 
		long value = 0l; 
		while(i < str.length()) { 
			int digit = str.charAt(i) - 48; 
			
			if(digit < 0 || digit > 9) 
				throw new NumberFormatException("Invalid input."); 
			
			value *= 10; 
			value += digit; 
			i++; 
		}
		
		return isNegative ? value * -1 : value; 
	}
}
