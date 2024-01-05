/*
* 미로(N*M) 탐색
* 미로에서 1은 이동 가능, 0은 이동 불가
* (1, 1)에서 출발하여 (N, M)의 위치로 이동할 때 지나야 하는 최소 칸 수를 구하라.
*/
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <iostream>
#include <queue>
#include <tuple>
using namespace std;


// N, M(2 ≤ N, M ≤ 100)
const int max_n = 104;

int dy[4] = { -1, 0, 1, 0 };
int dx[4] = { 0, 1, 0, -1 };

int n, m, y, x;
int ip[max_n][max_n], visited[max_n][max_n];

int main() {
    cin >> n >> m;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            scanf("%1d", &ip[i][j]);
        }
    }

    // BFS
    queue<pair<int, int>> q;
    visited[0][0] = 1;
    q.push({ 0, 0 });

    while (q.size()) {
        tie(y, x) = q.front();
        q.pop();
        for (int i = 0; i < 4; i++) {
            int ny = y + dy[i];
            int nx = x + dx[i];

            if (ny < 0 || ny >= n || nx < 0 || nx >= m || ip[ny][nx] == 0) continue;
            if (visited[ny][nx]) continue;

            visited[ny][nx] = visited[y][x] + 1;
            q.push({ ny, nx });
        }
    }
    printf("%d", visited[n - 1][m - 1]);
    return 0;
}

