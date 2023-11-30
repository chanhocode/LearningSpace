package com.petshop;

public abstract class Pet {
    public static void intro () {
        System.out.println("반려동물은 친구이다.");
    }

    private String name;
    public Pet(String name) {
        this.name = name;
    }

    public abstract String makeSound();
}
