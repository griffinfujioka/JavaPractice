package com.FindAnagrams;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Find Anagrams." );
        String[] firstWords = new String[] { "cinema", "racecar", "abs", "train"}; 
        String[] secondWords = new String[] { "iceman", "racecar", "abb", "rain"}; 
        Util.findAnagrams(firstWords, secondWords);
    }
    
    
}
