package ex04;


import java.io.*;

public class Main {
    public static void main(String[] args) {
        String DATA_PATH = "src/ex04/data.bin";
        try (
                FileOutputStream fos = new FileOutputStream(DATA_PATH);
                DataOutputStream dos = new DataOutputStream(fos);
                ) {
            dos.writeBoolean(true);
            dos.write(123);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        boolean read1;
        int read2;
        try (
                FileInputStream fis = new FileInputStream(DATA_PATH);
                DataInputStream dis = new DataInputStream(fis);
                ) {
            // 쓴 순서와 동일하게 읽어야 한다. 순서 변경시 오류가 나거나 잘못 읽힘
            read1 = dis.readBoolean();
            read2 = dis.readInt();
        } catch (IOException e) {
            throw new RuntimeException();
        }
    }
}
