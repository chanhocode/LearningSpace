/*
���� ����
���� �� ������ �� ���� ����� �ʴ� ������ ������ �ִ�� � ����� ���� ���� �����Ϸ��� �Ѵ�.
ù° �ٿ��� � ������ ��Ÿ���� 2���� �迭�� ��� ���� ������ ��Ÿ���� N�� �Էµȴ�. (2 <= N <= 100)
��° �ٺ��ʹ� ������� �� �྿ ���� ������ �Էµȴ�. ���̴� 1�̻� 100 ������ �����̴�.
*/

#include <iostream>
#include <algorithm>

using namespace std;

int n, result = 1;

int dy[] = { -1, 0, 1, 0 };
int dx[] = { 0, 1, 0, -1 };

int inp[101][101];
int visited[101][101];

void DFS(int y, int x, int depth) {
    visited[y][x] = 1;
    for (int i = 0; i < 4; i++) {
        int ny = y + dy[i];
        int nx = x + dx[i];
        if (ny < 0 || nx < 0 || ny >= n || nx >= n) continue;
        if (!visited[ny][nx] && inp[ny][nx] > depth) {
            DFS(ny, nx, depth);
        }
    }
    return;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin >> n;
    // �Է�
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> inp[i][j];
        }
    }
    for (int d = 1; d < 101; d++) {
        // �ʱ�ȭ
        fill(&visited[0][0], &visited[0][0] + 101 * 101, 0);

        int cnt = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (inp[i][j] > d && !visited[i][j]) {
                    DFS(i, j, d);
                    cnt++;
                }
            }
        }
        result = max(result, cnt);
    }
    cout << result << endl;

}