package com.app.LearnSpringFramewordStart.examples.a0;

import java.util.Arrays;

import org.springframework.beans.BeansException;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.app.LearnSpringFramewordStart.game.GameRunner;
import com.app.LearnSpringFramewordStart.game.GamingConsole;

@Configuration
@ComponentScan("com.app.LearnSpringFramewordStart.examples.a1")
public class SimpleSpringContextLauncherApplication {
	

	public static void main(String[] args) {
		try (var context = new AnnotationConfigApplicationContext
				(SimpleSpringContextLauncherApplication.class)) {
		
			
			Arrays.stream(context.getBeanDefinitionNames())
				.forEach(System.out::println);
		} catch (BeansException e) {
			e.printStackTrace(); 
		}
	}
}

