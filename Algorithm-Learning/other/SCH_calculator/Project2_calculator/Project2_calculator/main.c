#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define EXPR_SIZE 100 // 입력하는 수식의 최대 크기
typedef int element; // 스택 원소(element)의 자료형을 int로 정의

// stack
typedef struct {
    element data[EXPR_SIZE];
    int top;
} StackType;

void init_stack(StackType* s) {
    s->top = -1;
}

int is_empty(StackType* s) {
    return (s->top == -1);
}

int is_full(StackType* s) {
    return (s->top == (EXPR_SIZE - 1));
}

void push(StackType* s, element item) {
    if (is_full(s)) {
        fprintf(stderr, "스택 포화 에러\n");
        return;
    }
    else {
        s->data[++(s->top)] = item;
    }
}

element pop(StackType* s) {
    if (is_empty(s)) {
        fprintf(stderr, "스택 공백 에러\n");
        exit(1);
    }
    else
        return s->data[(s->top)--];
}

element peek(StackType* s) {
    if (is_empty(s)) {
        fprintf(stderr, "스택 공백 에러\n");
        exit(1);
    }
    else
        return s->data[s->top];
} // end-stact

int check_matching(const char* in) {
    StackType s;
    char ch, open_ch;
    int i, n = strlen(in);
    init_stack(&s);
    for (i = 0; i < n; i++) {
        ch = in[i];
        switch (ch) {
            case '(':   case '[':    case '{':
                push(&s, ch);
                break;
            case ')':   case ']':    case '}':
                if (is_empty(&s))
                    return 0;
                else {
                    open_ch = pop(&s);
                    if ((open_ch == '(' && ch != ')') ||
                        (open_ch == '[' && ch != ']') ||
                        (open_ch == '{' && ch != '}')) {
                        return 0;
                    }
                    break;
                }
        }
    }
    if (!is_empty(&s))
    return 0;
    return 1;
}

int prec(char op) {
    switch (op) {
         case '(': case ')': return 0;
         case '+': case '-': return 1;
         case '*': case '/': return 2;
    }
    return -1;
}

void infix_to_postfix(char exp[], char postfix[]) {
    int i = 0;
    int pos=0;
    char ch, top_op;
    int len = strlen(exp); // 길이
    
    StackType s;
    init_stack(&s); //스택초기화
    
    for (i = 0; i < len; i++) {
        ch = exp[i];
        switch (ch) {
             case '+': case '-': case '*': case '/':
                 // 스택에 있는 연산자의 우선순위가 더 크거나 같으면 출력
                 while (!is_empty(&s) && (prec(ch) <= prec(peek(&s))))
                     postfix[pos++] = pop(&s);
                 push(&s, ch);
                 break;
             case '(':
                 push(&s, ch);
                 break;
             case ')':
                top_op = pop(&s);
                while (top_op != '(') {
                    postfix[pos++] = top_op;
                    top_op = pop(&s);
                }
                break;
            default: // 피연산자
                do {
                    postfix[pos++] = ch;
                    ch = exp[++i];
                } while (ch >= '0' && ch <= '9');
                postfix[pos++] = ' ';
                i--;
                break;
         }
    }
    
    while (!is_empty(&s)) {
        postfix[pos++] = pop(&s);
    }// postfix 스택에 저장
}



// 후위표기식 계산을 위해 eval() 함수 사용 (교재 p.127)
int eval(char exp[]) {
    int op1, op2, value, i = 0;
    int len = strlen(exp);
    char ch;
    StackType s;
    init_stack(&s);
    
    int tempValue, tempPos = 0;
    char temp[100];

    
    
    for (i = 0; i < len; i++) {
         ch = exp[i];
        if (ch != '+' && ch != '-' && ch != '*' && ch != '/') {
            if (tempPos != 0 && ch == ' ') {
                temp[tempPos] = '\0';
                tempValue = atoi(temp);
                push(&s, tempValue);
                tempPos = 0;
                temp[0] = '\0';
                continue;
            }
            temp[tempPos++] = ch;
        }

        else { //연산자이면 피연산자를 스택에서 제거
            op2 = pop(&s);
            op1 = pop(&s);
            switch (ch) {
                    //연산을 수행하고 스택에 저장
                case '+':
                    push(&s, op1 + op2);
                    break;
                case '-':
                    push(&s, op1 - op2);
                    break;
                case '*':
                    push(&s, op1 * op2);
                    break;
                case '/':
                    push(&s, op1 / op2);
                    break;
                    
            }
        }
    }
    return pop(&s);
}

int main() {
    int result;
    char input[EXPR_SIZE];
    char postfix[EXPR_SIZE];
    while (1) {
        printf("계산할 수식을 입력하세요: ");
        postfix[0] = '\0'; // 배열 초기화
        fgets(input, EXPR_SIZE - 1, stdin);
        input[strlen(input) - 1] = '\0';
        printf("수식 : %s\n", input);
        
        if (check_matching(input) != 1) {
            printf("수식이 잘못되었습니다.\n\n");
            continue;
        }
        
        infix_to_postfix(input, postfix);
        printf("후위 표기식 : %s\n", postfix);
        result = eval(postfix);
        printf("연산 결과 => %d\n\n", result);
    }
}

