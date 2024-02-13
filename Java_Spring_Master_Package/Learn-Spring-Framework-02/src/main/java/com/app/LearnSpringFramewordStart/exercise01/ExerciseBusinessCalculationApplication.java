package com.app.LearnSpringFramewordStart.exercise01;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan
public class ExerciseBusinessCalculationApplication {

	public static void main(String[] args) {
		try(var context = new AnnotationConfigApplicationContext
				(ExerciseBusinessCalculationApplication.class)) {
			
			System.out.println(context.getBean(BusinessCalculationService.class).findMax());
			
		}

	}

}
