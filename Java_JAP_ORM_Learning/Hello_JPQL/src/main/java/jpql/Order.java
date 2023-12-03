package jpql;

import javax.persistence.*;

@Entity
@Table(name="ORDERS")
public class Order {
    @Id @GeneratedValue
    private Long id;
    private int orderAmount;
    @Embedded
    private Addres addres;

    @ManyToOne
    @JoinColumn(name = "PRODUCT_ID")
    private Product product;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getOrderAmount() {
        return orderAmount;
    }

    public void setOrderAmount(int orderAmount) {
        this.orderAmount = orderAmount;
    }

    public Addres getAddres() {
        return addres;
    }

    public void setAddres(Addres addres) {
        this.addres = addres;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
