/*
유기농 배추
요약: 어떤 배추에 배추흰지렁이가 한 마리 살 고 있으면 인점한 다른 배추러 이동할 수 있어, 그 배추들은 해충으로부터 보호 받을 수 있다.
0은 배추가 심어져 있는 땅, 1은 배추가 심어져 있지 않은 땅

입력의 첫줄에는 테스트 케이스 T가 주어딘다. 그 다음줄 부터 각각 가로 세로 길이 (1 <= M,N <= 50), 그리고 배추가 심어져
있는 위치의 개수 (1 <= K <= 2500>이 주어진다. 그 다음 줄 에는 배추의 위치가 주어진다.

DFS 사용
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
        // 초기화
        fill(&inp[0][0], &inp[0][0] + 51 * 51, 0);
        fill(&visited[0][0], &visited[0][0] + 51 * 51, 0);
        result = 0;
        
        // 배추 심기
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