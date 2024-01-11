/*
영역 구하기
M, N과 K 그리고 K개의 직사각형의 좌표가 주어질 때, K개의 직사각형 내부를 제외한 나머지 부분이 몇 개의 분리된 영역으로
나누어지는지, 그리고 분리된 각 영역의 넓이가 얼마인지를 구하라.
# 입력
M,N,K는 모두 100이하의 자연수. 둘째 줄 부터 K개의 줄에는 한줄에 하나씩 직사각형의 왼쪽 아래 꼭짓점의 x,y좌표값과
오른쪽 위 꼭짓점의 x,y좌표값이 빈칸을 사이에 두고 차례로 주어진다.
# 출력
첫째 줄에 분리되어 나누어지는 영역의 개수를 출력. 둘째 줄에는 각 영역의 넓이를 오름차순으로 정렬하여 빈칸을 사이에 두고 출력
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
    
    // 입력
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