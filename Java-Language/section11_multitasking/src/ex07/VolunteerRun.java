package ex07;

public class VolunteerRun implements Runnable{
    private static int lastNo = 0;
    private static int working = 0;

    private int no;
    private Cave cave;

    public VolunteerRun(Cave cave) {
        this.no = ++lastNo;
        this.cave = cave;
        System.out.printf("## %d번 지원자 투입 (남은 물의 양: %d)%n", no, cave.getWater());
    }

    @Override
    public void run() {
        working++;
        System.out.printf("$$ %d번 지원자 시작 (현재 %d명 펌핑중, 남은 물 %d)%n", no, working, cave.getWater());

        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            // return이 없다면 sutdownNow를 해도 중단되지 ㅇ낳음
            working--;
            System.out.printf("&& %d번 지원자 중단 (현재 %d명 펌핑중, 남은 물 %d)%n", no, working, cave.getWater());
            return;
        }

        cave.pump();
        working--;
        System.out.printf("^ %d번 지원자 완료 (현재 %d명 펌핑중, 남은 물: %d)%n",no, working, cave.getWater());
    }
}
