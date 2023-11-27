package ex09;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.util.ArrayList;
import java.util.List;

public class ex02 {
    public static String PEOPLE_PATH = "src/ex09/people.ser";

    public static void main(String[] args) {
        Person person1Out;
        Person person2Out;
        List<Person> peopleOut;
        try (
                FileInputStream fis = new FileInputStream(PEOPLE_PATH);
                BufferedInputStream bis = new BufferedInputStream(fis);
                ObjectInputStream ois = new ObjectInputStream(bis);
                )
        {
            person1Out = (Person) ois.readObject();
            person2Out = (Person) ois.readObject();
            peopleOut = (ArrayList) ois.readObject();
        } catch (IOException | ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
        System.out.println(person1Out);
        System.out.println(person2Out);
        System.out.println(peopleOut);
    }
}
