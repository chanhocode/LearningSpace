package ex04;

@Character
public class KingArthur {
    @AutoMount
    private Sword sword;

    private Arrow arrow;

    @AutoRun
    public void swingSword() {
        System.out.printf("%s다 $s를 휘두릅니다.%n",
                this.getClass().getSimpleName(),
                sword.getClass().getSimpleName());
    }
}
