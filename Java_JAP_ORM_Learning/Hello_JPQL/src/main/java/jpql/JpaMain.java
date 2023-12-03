package jpql;

import javax.persistence.*;
import java.util.List;

public class JpaMain {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("hello");
        EntityManager em = emf.createEntityManager();

        EntityTransaction tx = em.getTransaction();
        tx.begin();

        try{
            Member member = new Member();
            member.setUsername("member1");
            member.setAge(10);
            em.persist(member);
            // (query, type)
            // TypeQuery: 반환 타입이 명확할 때 사용.
            // Query: 반환 타입이 명확하지 않을 때 사용.
            TypedQuery<Member> query = em.createQuery("select m from Member m", Member.class);
            Query query2 = em.createQuery("select m.username, m.age from Member m");
            List<Member> result = query.getResultList();
            for (Member member1 : result) {
                System.out.println("member1 = " + member1);
            }

            // 값이 하나인경우 (where~)
            // query.getSingleResult();

            // 바인딩
            TypedQuery<Member> query3 = em.createQuery("select m from Member m where m.username = :username", Member.class);
            query3.setParameter("username", "mamber1");
            Member singleResult = query3.getSingleResult();
            System.out.println("singleResult: " + singleResult);



            tx.commit();
        } catch(Exception e) {
            tx.rollback();
            e.printStackTrace();
        } finally {
            em.close();
        }
        emf.close();
    }
}
