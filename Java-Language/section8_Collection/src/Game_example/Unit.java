package Game_example;

public abstract class Unit {
    public Side side;
    public int hp;

    public Unit(Side side, int hp) {
        this.side = side;
        this.hp = hp;
    }
    public Side getSide() {
        return side;
    }
}
