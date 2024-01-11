/*
���� ���ϱ�
M, N�� K �׸��� K���� ���簢���� ��ǥ�� �־��� ��, K���� ���簢�� ���θ� ������ ������ �κ��� �� ���� �и��� ��������
������������, �׸��� �и��� �� ������ ���̰� �������� ���϶�.
# �Է�
M,N,K�� ��� 100������ �ڿ���. ��° �� ���� K���� �ٿ��� ���ٿ� �ϳ��� ���簢���� ���� �Ʒ� �������� x,y��ǥ����
������ �� �������� x,y��ǥ���� ��ĭ�� ���̿� �ΰ� ���ʷ� �־�����.
# ���
ù° �ٿ� �и��Ǿ� ���������� ������ ������ ���. ��° �ٿ��� �� ������ ���̸� ������������ �����Ͽ� ��ĭ�� ���̿� �ΰ� ���
*/

#include <iostream>
#include <algorithm>
#include <vector>
#define y1 aaaa 

using namespace std;


int m, n, k, x1, x2, y1, y2;
int inp[101][101], visited[101][101];
int dy[] = { -1, 0, 1, 0 };
int dx[] = { 0, 1, 0, -1 };
vector<int> result;

int DFS(int y, int x) {
    visited[y][x] = 1;
    int result = 1;
    for (int i = 0; i < 4; i++) {
        int ny = y + dy[i];
        int nx = x + dx[i];
        if (ny < 0 || nx < 0 || ny >= m || nx >= n || visited[ny][nx] == 1 || inp[ny][nx] == 1) continue;
        result += DFS(ny, nx);
    }
    return result;
}


int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    
    // �Է�
    cin >> m >> n >> k;
    for (int i = 0; i < k; i++) {
        cin >> x1 >> y1 >> x2 >> y2;
        for (int x = x1; x < x2; x++) {
            for (int y = y1; y < y2; y++) {
                inp[y][x] = 1;
            }
        }
    }

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (inp[i][j] != 1 && visited[i][j] == 0) {
                result.push_back(DFS(i, j));
            }
        }
    }

    sort(result.begin(), result.end());
    cout << result.size() << endl;
    for (int ret : result) cout << ret << " ";
}