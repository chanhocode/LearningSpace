package ex01;

public class DeepCopied implements Cloneable {
    String title;
    int no;

    int[] numbers;
    Click click;
    Click[] clicks;

    public DeepCopied(String title, int no, int[] numbers, Click click, Click[] clicks) {
        this.title = title;
        this.no = no;
        this.numbers = numbers;
        this.click = click;
        this.clicks = clicks;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        DeepCopied clone = (DeepCopied) super.clone();

        clone.numbers = new int[numbers.length];
        for (var i = 0; i <numbers.length; i++) {
            clone.numbers[i] = numbers[i];
        }

        clone.click = new Click(click.x, click.y);

        clone.clicks = new Click[clicks.length];
        for (int i = 0; i<clicks.length; i++) {
            clone.clicks[i] = new Click(clicks[i].x, clicks[i].y);
        }
        return clone;
    }
}
