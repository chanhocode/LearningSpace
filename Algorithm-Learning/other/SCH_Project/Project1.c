#include <stdio.h>
#include <string.h>

#define MAX_IOT_LIST_SIZE 45

typedef struct {
    char name[20]; // 이름
    int id; // 학번
} Namecard;

Namecard iot_list[MAX_IOT_LIST_SIZE]; // 학생 정보를 저장할 배열
int length; // 리스트의 길이

Namecard make_Namecard(char name[], int id) {
    Namecard newCard;
    strcpy(newCard.name, name);
    newCard.id = id;
    return newCard;
}

void init(void) {
    // length를 0으로 초기화
    length = 0;
}

int is_full(void) {
    // 리스트가가득차있으면1,그렇지않으면0을리턴
    if (length >= MAX_IOT_LIST_SIZE) {
        return 1;
    } else {
        return 0;
    }
}

void insert(int pos, Namecard item) {
    if(is_full() == 1 || pos < 0 || pos > length) {
        printf("포화상태 오류 또는 삽입 위치 오류\n");
        return;
    }
    // 리스트의 위치 pos에 item을 삽입
    int i;
    for (i = length; i > pos; i--)
        iot_list[i] = iot_list[i - 1];
        iot_list[pos] = item;
    length++;
}

Namecard get_entry(int pos) {
    // 리스트에서 위치 pos의 원소를 반환(리턴), 삭제하지는 않음
    return iot_list[pos];
}

int find(Namecard item) {
    // item이 리스트 내에 있으면 해당 item의 인덱스를 리턴, 없으면 -1을 리턴
    // item이 리스트 내에 있다는 의미는, name과 id가 모두 일치해야 함
    int result = -1;
    for (int i = 0; i < length; i++) {
        if (strcmp(get_entry(i).name, item.name) == 0 &&  get_entry(i).id == item.id) {
            result = i;
            break;
        }
    }
    return result;
}

int is_empty(void) {
    // 리스트가비어있으면1,그렇지않으면0을리턴
    if (length == 0) {
        return 1;
    } else {
        return 0;
    }
}

void delete(int pos) {
    if(find(iot_list[pos]) == -1 || is_empty() == 1 || pos < 0 || pos >= length){
        printf("공백상태 오류 또는 삭제 위치 오류\n");
        return;
    }
    // 리스트에서 위치 pos의 원소를 삭제
    for (int i = pos; i < length-1; i++) iot_list[i] = iot_list[i + 1];
    length--;
}


void replace(int pos, Namecard item) {
    if (length == 0 || pos < 0 || pos >= length) {
        printf("교체 위치 오류\n");
        return;
    }
    // 리스트의 위치 pos에 있는 원소를 item으로 교체
    strcpy(iot_list[pos].name, item.name);
    iot_list[pos].id = item.id;
}

int size(void) {
    // 리스트의 원소 개수를 리턴
    return length;
}

void print_list(char *msg) {
    // 리스트의 모든 원소를 아래 양식으로 출력
    // 예) msg: (이름, 학번) (이름, 학번) (이름, 학번)
    printf("%s:", msg);
    for(int i = 0; i < length; i++) {
        printf(" (%s, %d) ", iot_list[i].name, iot_list[i].id);
    }
    printf("\n\n");
}

int main() {
    init();
    print_list("Init");
    insert(0,make_Namecard("조찬호",20201693)); //본인이름,학번넣기
    insert(0, make_Namecard("전창완", 20181521));
    insert(1, make_Namecard("윤재석", 20191516));
    insert(size(), make_Namecard("김동민", 20201506));
    insert(3, make_Namecard("송태원", 20211501));
    insert(size(), make_Namecard("홍길동", 20221530));
    insert(10, make_Namecard("김철수", 20231522));
    print_list("Insert");
    replace(size() - 1, make_Namecard("이영희", 20171504));
    replace(4, make_Namecard("김준성", 20181498));
    replace(20, make_Namecard("김예성", 20191490));
    print_list("Replace");
    delete(3);
    delete(size() - 1);
    delete(0);
    delete(30);
    print_list("Delete");
    printf("%s is found at %d\n", "윤재석", find(make_Namecard("윤재석", 20191516)));
    printf("%s is found at %d\n", "이강인", find(make_Namecard("이강인", 20211426)));
    printf("%s is found at %d\n", "김준성", find(make_Namecard("김준성", 20221234)));
}
