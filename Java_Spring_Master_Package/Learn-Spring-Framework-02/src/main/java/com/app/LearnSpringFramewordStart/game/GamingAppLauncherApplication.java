package com.app.LearnSpringFramewordStart.game;

import org.springframework.beans.BeansException;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("com.app.LearnSpringFramewordStart.game")
public class GamingAppLauncherApplication {
	

	public static void main(String[] args) {
		try (var context = new AnnotationConfigApplicationContext(GamingAppLauncherApplication.class)) {
			context.getBean(GamingConsole.class).up();
			
			context.getBean(GameRunner.class).run();
			
			
		} catch (BeansException e) {
			e.printStackTrace();
		}
	}
}

