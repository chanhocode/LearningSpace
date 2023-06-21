package hellojpa;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class JpaMain {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("hello");
        EntityManager em = emf.createEntityManager();

        EntityTransaction tx = em.getTransaction();
        tx.begin(); // 데이터 베이스 트랜잭션 시작

        try {
            // 생성하기
//            Member member = new Member();
//            member.setId(2L);
//            member.setName("HelloB");
//            em.persist(member);
            // 가져오기
//            Member findMember = em.find(Member.class, 1L);
//            System.out.println("findMember.id = " + findMember.getId());
//            System.out.println("findMember.name = " + findMember.getName());
            // 수정하기
//            findMember.setName("HelloJPA");
            // 삭제하기
//            em.remove(findMember);

            // ==============================================================

            // 비영속
            Member member = new Member();
            member.setId(3L);
            member.setName("HelloJPA");

            // 영속
            em.persist(member); // 1차 캐시에 저장 (영속성 컨텍스트)

            // em.flush() -> 쿼리 호출 DB 반영 (1차 캐시 유지)

            Member findMember = em.find(Member.class, 3L); // 조회 SQL이 생성 되지 않음.
            // 1차 캐시에서 가져온다.
            System.out.println("findMember.id = " + findMember);

            // 1차캐시에 없으므로 DataBase 에서 가져온다.
            Member findMember2 = em.find(Member.class, 2L);
            Member findMember3 = em.find(Member.class, 2L);
            /*
            * 영속 엔티티의 동일성 보장
            * */
            System.out.println(findMember2 == findMember3); // true

            tx.commit(); // 커밋하는 순간 데이터베이스에 SQL을 보낸다.
        } catch (Exception e) {
            tx.rollback();
        } finally {
            em.close();
        }

        emf.close();
    }
}
