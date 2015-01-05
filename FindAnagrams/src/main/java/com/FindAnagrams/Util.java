package com.FindAnagrams;

public class Util {
	public static void findAnagrams(String[] firstWords, String[] secondWords) { 
		int index = 0; 
		boolean isAnagram = false; 
		for(String firstWord : firstWords) { 
			isAnagram = true; 
			String secondWord = secondWords[index];
			if(firstWord.length() != secondWord.length()) { 
				System.out.println("0"); 
				break; 
			}
			
			for(char c : firstWord.toCharArray()) { 
				if(secondWord.contains(String.valueOf(c))) { 
					firstWord.replaceFirst(String.valueOf(c), "");
					secondWord.replaceFirst(String.valueOf(c), "");
				} else {
					System.out.println("0");
					isAnagram = false;
					break; 
				}
			}
			if(isAnagram)
				System.out.println("1");
			
			// Move on to the next word 
			index++; 
		}
	}
}
