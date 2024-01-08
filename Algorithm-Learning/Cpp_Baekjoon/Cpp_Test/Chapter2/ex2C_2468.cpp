/*
안전 영역
많은 비가 내렸을 때 물에 잠기지 않는 안전한 영역이 최대로 몇개 만들어 지는 지를 조사하려고 한다.
첫째 줄에는 어떤 지역을 나타내는 2차원 배열의 행과 열의 개수를 나타내는 N이 입력된다. (2 <= N <= 100)
둘째 줄부터는 순서대로 한 행씩 높이 정보가 입력된다. 높이는 1이상 100 이하의 정수이다.
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
    // 입력
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> inp[i][j];
        }
    }
    for (int d = 1; d < 101; d++) {
        // 초기화
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