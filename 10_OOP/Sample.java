class parent{

    static int age = 20;  
}

class Child extends parent{


}

public class Sample{

    public static void main(String[] args) {
        Child ch = new Child();
        System.out.println(Child.age);
    }
}