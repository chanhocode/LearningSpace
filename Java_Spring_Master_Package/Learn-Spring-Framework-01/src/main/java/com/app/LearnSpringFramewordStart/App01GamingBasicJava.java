package com.app.LearnSpringFramewordStart;

import com.app.LearnSpringFramewordStart.game.GameRunner;
import com.app.LearnSpringFramewordStart.game.GamingConsole;
import com.app.LearnSpringFramewordStart.game.MarioGame;
import com.app.LearnSpringFramewordStart.game.PacmanGame;
import com.app.LearnSpringFramewordStart.game.SuperContraGame;

public class App01GamingBasicJava {

	public static void main(String[] args) {
		//GamingConsole game = new SuperContraGame();
		//GamingConsole game = new MarioGame();
		GamingConsole game = new PacmanGame();
		GameRunner gameRunner = new GameRunner(game);
		// GamingConsole은 GameRunner클래스의 의존성
		gameRunner.run();
	}
}

