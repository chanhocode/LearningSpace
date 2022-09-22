// 체육대회를 하기 위해 총 N명의 학생이, A_B_C 3개의 팀으로 나누려고 한다.
// 각 학생은 각 A,B,C에 포함될 수 있으며 포함되지 않을 수 있다.
// 각 팀의 몸무게 총합은 같아야 한다. 단, 모든팀에 학생이 없는경우도 팀 구성으로 판단

/*
  입력
    테스트 케이스의 수 T가 주어진다.
    각 테스트 마다, 첫 번째로 학생 수 N이 주어진다.
    동일 몸무게의 학생들이 존재할 수 있으며, 서로 다른팀으로 간주한다.
*/

// 키워드? 순열,, 집합?

// 입력
const testCase = {
  case: 7,
  student: [
    {
      count: 2,
      weight: [75, 75],
    },
    {
      count: 3,
      weight: [45, 46, 45],
    },
    {
      count: 3,
      weight: [65, 65, 65],
    },
  ],
};

// code
function teamming(total, weight) {
  let count = 1;

  const countTeam = (position, teamA, teamB, teamC) => {
    // base case
    if ((teamA + teamB + teamC) % 3 === 0 || teamA + teamB + teamC === 0) {
      count += 1;
      return;
    } else {
    }
  };

  for (let i; i < total; i++) {
    countTeam(i, weight[i]);
  }

  return count;
}

// test
console.log(teamming(3, [65, 65, 65]));
