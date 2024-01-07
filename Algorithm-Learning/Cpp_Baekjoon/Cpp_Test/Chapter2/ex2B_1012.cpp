/*
����� ����
���: � ���߿� �����������̰� �� ���� �� �� ������ ������ �ٸ� ���߷� �̵��� �� �־�, �� ���ߵ��� �������κ��� ��ȣ ���� �� �ִ�.
0�� ���߰� �ɾ��� �ִ� ��, 1�� ���߰� �ɾ��� ���� ���� ��

�Է��� ù�ٿ��� �׽�Ʈ ���̽� T�� �־���. �� ������ ���� ���� ���� ���� ���� (1 <= M,N <= 50), �׸��� ���߰� �ɾ���
�ִ� ��ġ�� ���� (1 <= K <= 2500>�� �־�����. �� ���� �� ���� ������ ��ġ�� �־�����.

DFS ���
*/

#include <iostream>
#include <vector>

using namespace std;

int tNum, m, n, k, y, x, ny, nx, result;
int dy[] = { -1, 0, 1, 0 };
int dx[] = { 0, 1, 0, -1 };

int inp[51][51];
bool visited[51][51];

void DFS(int y, int x) {
    visited[y][x] = true;
    for (int i = 0; i < 4; i++) {
        ny = y + dy[i];
        nx = x + dx[i];

        if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
        if (inp[ny][nx] == 1 && !visited[ny][nx]) {
            DFS(ny, nx);
        }
    }
    return;
}

int main() {
    cin.tie(NULL);
    cout.tie(NULL);

    cin >> tNum;
    while (tNum--) {
        // �ʱ�ȭ
        fill(&inp[0][0], &inp[0][0] + 51 * 51, 0);
        fill(&visited[0][0], &visited[0][0] + 51 * 51, 0);
        result = 0;
        
        // ���� �ɱ�
        cin >> m >> n >> k;
        for (int i = 0; i < k; i++) {
            cin >> x >> y;
            inp[y][x] = 1;
        }

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (inp[i][j] == 1 && !visited[i][j]) {
                    DFS(i, j);
                    result++;
                }
            }
        }
        cout << result << endl;
    }

}