package ex01;

public class Outer {
    private String inst = "인스턴스";
    private static String sttc = "클래스";

    // 멤버 인스턴스 클래스
    class InnerInstMember {
        private String name = inst + " 필드로서의 클래스";
        private InnerSttcMember innerSttcMember = new InnerSttcMember();

        public void func() {
            System.out.println(name);
        }
    }

    // 정적(클래스) 내부 클래스
    public static class InnerSttcMember {
        private String name = sttc + " 필드로서의 클래스";
        public void func() {
            System.out.println(name);
        }
    }
    public void memberFunc() {
        // 메소드 안에 정의된 클래스
        class MethodMember {
            String instSttc = inst + " " + sttc;
            InnerInstMember innerInstMember = new InnerInstMember();
            InnerSttcMember innerSttcMember = new InnerSttcMember();

            public void func() {
                innerInstMember.func();
                innerSttcMember.func();
                System.out.println("메소드 안의 클래스");
            }
        }
        new MethodMember().func();
    }

    public void innerFuncs() {
        new InnerInstMember().func();
        new InnerSttcMember().func();
    }
    public InnerInstMember getInnerInstMember ()  {
        return new InnerInstMember();
    }
}
