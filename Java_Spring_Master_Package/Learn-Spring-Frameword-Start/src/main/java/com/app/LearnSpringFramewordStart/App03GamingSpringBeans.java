package com.app.LearnSpringFramewordStart;

import org.springframework.beans.BeansException;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.app.LearnSpringFramewordStart.game.GameRunner;
import com.app.LearnSpringFramewordStart.game.GamingConsole;
import com.app.LearnSpringFramewordStart.game.MarioGame;
import com.app.LearnSpringFramewordStart.game.PacmanGame;
import com.app.LearnSpringFramewordStart.game.SuperContraGame;

public class App03GamingSpringBeans {

	public static void main(String[] args) {
		
		try (var context = new AnnotationConfigApplicationContext(GamingConfiguration.class)) {
			context.getBean(GamingConsole.class).up();
			
			context.getBean(GameRunner.class).run();
			
			
		} catch (BeansException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}

