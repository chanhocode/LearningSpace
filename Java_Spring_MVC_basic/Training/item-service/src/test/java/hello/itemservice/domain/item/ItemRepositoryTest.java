package hello.itemservice.domain.item;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

class ItemRepositoryTest {

    ItemRepository itemRepository = new ItemRepository();

    @AfterEach
    void afterEach() {
        itemRepository.clearStore();
    }

    @Test
    void save() {
        // given
        Item item = new Item("itemA", 10000, 10);
        // when
        Item savedItem = itemRepository.save(item);
        // then
        Item findItem = itemRepository.findById(item.getId());
        assertThat(findItem).isEqualTo(savedItem);
    }

    @Test
    void findAll() {
        // given
        Item item1 = new Item("itemA", 10000, 10);
        Item item2 = new Item("itemB", 20000, 20);

        Item saved1 = itemRepository.save(item1);
        Item saved2 = itemRepository.save(item2);
        // when
        List<Item> allItems = itemRepository.findAll();

        // then
        assertThat(allItems.size()).isEqualTo(2);
        assertThat(allItems).contains(item1, item2);

    }

    @Test
    void updateItem() {
        // given
        Item item = new Item("itemA", 10000, 10);
        Item savedItem = itemRepository.save(item);
        // when
        Item updateParam = new Item("itemB", 20000, 20);
        itemRepository.update(item.getId(), updateParam);

        // then
        Item updatedItem = itemRepository.findById(item.getId());
        assertThat(updatedItem.getItemName()).isEqualTo(updateParam.getItemName());
        assertThat(updatedItem.getPrice()).isEqualTo(updateParam.getPrice());
        assertThat(updatedItem.getQuantity()).isEqualTo(updateParam.getQuantity());
    }

}