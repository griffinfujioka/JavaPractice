package test;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

import Util.StringUtil;

public class StringUtilTest {

	@Test
	public void testStringToLong() { 
		String str = "1234"; 
		assertTrue(1234l == StringUtil.stringToLong(str)); 
	}
	
	@Test(expected = NumberFormatException.class)
	public void testStringToLongWithNullParameter() { 
		StringUtil.stringToLong(null); 
	}
	
	@Test
	public void testStringToLongForNegative() { 
		String str = "-1234"; 
		assertTrue(-1234l == StringUtil.stringToLong(str)); 
	}
	
	@Test(expected = NumberFormatException.class)
	public void testStringToLongNumberConversionException() { 
		String str = "garbage"; 
		StringUtil.stringToLong(str); 
	}
}
