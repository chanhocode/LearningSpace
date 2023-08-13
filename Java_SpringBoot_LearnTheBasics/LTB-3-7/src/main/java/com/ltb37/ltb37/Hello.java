package com.ltb37.ltb37;

public class Hello {
    private String prefix;
    private String name;

    public String getPrefix() {
        return prefix;
    }

    public void setPrefix(String prefix) {
        this.prefix = prefix;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return prefix + " " + name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
