package ex11;

public class Main {
    public static void clickFormElement(FormElement fe) {
        fe.func();
    }
    public static void main(String[] args) {
        Button button1 = new Button(2, "Enter");
        Switch switch1 = new Switch(3, true);

        clickFormElement(button1);
        clickFormElement(switch1);
    }

}
