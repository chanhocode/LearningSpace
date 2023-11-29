package ex04;

import java.lang.reflect.Field;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

public class Main {
    public static void main() {
        // 클래스의 패키지명 가져오기
        String packageName = Main.class.getPackageName();
        System.out.println(packageName);

        System.out.println("\n===========\n");
        List<Class<?>> classes = getClasses(packageName);


        System.out.println("\n-----------\n");
        List<Object> characters = classes.stream()
                .filter(c->c.isAnnotationPresent(Character.class))
                .map(c-> {
                    try {
                        // @Character 인스턴스 생성
                        Object instance = c.getConstructor().newInstance();

                        // @AutoAmout 필드 가져오기
                        Field field = Arrays.stream(c.getDeclaredFields())
                                .filter(f -> f.isAnnotationPresent(AutoMount.class))
                                .findFirst()
                                .orElse(null);

                        if (
                                field == null || !field.getType().isAnnotationPresent(Weapon.class)
                        ) return instance;

                        field.setAccessible(true);
                        field.set(instance, field.getType().getConstructor().newInstance());

                        // AutoRun 메소드 찾아 실행
                        Arrays.stream(c.getDeclaredMethods())
                                .filter(f -> f.isAnnotationPresent(AutoRun.class))
                                .findFirst()
                                .ifPresent(m -> {
                                    m.setAccessible(true);
                                    try {
                                        m.invoke(instance);
                                    } catch (Exception e) {e.printStackTrace();}
                                });
                        return instance;
                    } catch (Exception e) {
                        e.printStackTrace();
                        return null;
                    }
                }).filter(Objects::nonNull)
                .toList();

    }

    // 패키지 이름을 받아 해당 패키지에 있는 클래스들을 가져오는 메소드
    public static List<Class<?>> getClasses(String packageName) {
        List<Class<?>> classes = new ArrayList<>();
        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();

        // 패키지 이름을 경로 형식으로 변환
        String path = packageName.replace('.', '/');

        // ClassLoader의 기능으로 경로에 해당하는 URL을 가져옴
        java.net.URL resource = classLoader.getResource(path);
        if (resource == null) {
            System.out.println("리소스가 없습니다.");
            return null;
        }
        String filePath = resource.getFile();

        filePath = java.net.URLDecoder.decode(filePath, StandardCharsets.UTF_8);

        java.io.File file = new java.io.File(filePath);
        if (file.isDirectory()) {
            for (String fileName : file.list()) {
                if (fileName.endsWith(".class")) {
                    // 끝의 .class를 잘라내어 클래스 명을 가져옴
                    String className = packageName + '.' + fileName
                            .substring(0, fileName.length() - 6);

                    Class<?> cls = null;
                    try {
                        cls = Class.forName(className);
                    } catch (ClassNotFoundException e) {
                        throw new RuntimeException(e);
                    }
                    classes.add(cls);
                }
            }
        } else {
            System.out.println("디렉토리가 아닙니다.");
            return null;
        }
        return classes;
    }
}
