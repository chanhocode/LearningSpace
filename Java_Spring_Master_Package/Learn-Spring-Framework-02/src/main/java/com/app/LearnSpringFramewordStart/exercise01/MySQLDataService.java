package com.app.LearnSpringFramewordStart.exercise01;

import org.springframework.stereotype.Component;

@Component
public class MySQLDataService implements DataService{
	public int[] retrieveData() {
		return new int [] { 1, 2, 3, 4, 5};
	}

}
