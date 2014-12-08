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
	
	@Test
	public void testStringToLongWithNullParameter() { 
		
	}
	
	@Test
	public void testStringToLongForNegative() { 
		
	}
	
	@Test
	public void testStringToLongForDecimal() { 
		
	}
	
	@Test
	public void testStringToLongTooManyDecimals() { 
		
	}
	
	@Test
	public void testStringToLongNumberConversionException() { 
		
	}
}
