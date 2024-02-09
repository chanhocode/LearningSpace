package com.app.LearnSpringFramewordStart;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.app.LearnSpringFramewordStart.game.GameRunner;
import com.app.LearnSpringFramewordStart.game.GamingConsole;
import com.app.LearnSpringFramewordStart.game.PacmanGame;

@Configuration
public class GamingConfiguration {
	
	@Bean
	public GamingConsole game() {
		GamingConsole game = new PacmanGame();
		return game;
	}
	
	@Bean
	public GameRunner gameRunner() {
		var gameRunner = new GameRunner(game());
		return gameRunner;
	}
}
