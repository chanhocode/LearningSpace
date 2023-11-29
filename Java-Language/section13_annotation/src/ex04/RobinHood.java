package ex04;

@Character
public class RobinHood {
    private Sword sword;
    @AutoMount
    private Arrow arrow;
    @AutoRun
    public void shootArrow() {
        System.out.printf("%s가 %s를 쏩니다.",
                this.getClass().getSimpleName(),
                arrow.getClass().getSimpleName());
    }
}
